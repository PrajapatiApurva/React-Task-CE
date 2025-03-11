import { useState } from "react";

const plans = {
  monthly: [
    {
      name: "FREE",
      price: "0",
      features: ["5 documents a month", "Activity timeline"],
      note: "No Credit Card required",
    },
    {
      name: "Premium",
      price: "10",
      features: ["Unlimited documents", "Unlimited signees", "Activity timeline", "Certificate of completion"],
    },
    {
      name: "Teams",
      price: "8",
      features: ["Everything from Premium", "Team management", "Transferable contracts"],
      extra: "Minimum total of USD 24/month",
    },
  ],
  annually: [
    {
      name: "FREE",
      price: "0",
      features: ["5 documents a month", "Activity timeline"],
      note: "No Credit Card required",
    },
    {
      name: "Premium",
      price: "100",
      features: ["Unlimited documents", "Unlimited signees", "Activity timeline", "Certificate of completion"],
      extra: "Save USD 20/year",
    },
    {
      name: "Teams",
      price: "80",
      features: ["Everything from Premium", "Team management", "Transferable contracts"],
      extra: "Minimum total of USD 240/year",
    },
  ],
};

function PricingPlan() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div className="flex flex-col items-center py-12 ">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Pick your plan. We make this part easy too.</h2>

      {/* Toggle Button */}
      <div className="flex bg-gray-200 rounded-full mb-8 h-[50px] w-[280px]">
        {['monthly', 'annually'].map((cycle) => (
          <button
            key={cycle}
            className={`px-6 py-2 w-1/2 rounded-full transition font-medium ${
              billingCycle === cycle ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-300"
            }`}
            onClick={() => {
              setBillingCycle(cycle);
              setSelectedPlan(null);
            }}
          >
            {cycle.charAt(0).toUpperCase() + cycle.slice(1)}
          </button>
        ))}
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        {plans[billingCycle].map((plan, index) => {
          const isSelected = selectedPlan === index;

          return (
            <div
              key={index}
              id="planSection"
              className={`p-6 rounded-lg shadow-lg text-center flex flex-col cursor-pointer transition w-full md:w-[372px] lg:h-[500px] border-2 ${
                isSelected ? "bg-white text-gray-900 border-purple-500" : "bg-[#254A76] text-white border-transparent"
              }`}
              onClick={() => setSelectedPlan(index)}
              aria-selected={isSelected}
            >
              <h3 className="text-2xl">{plan.name}</h3>
              <p className="flex items-start text-lg gap-0.5 mt-2">
                <span className="font-semibold">{'USD'}</span> <span className="text-[40px] -mt-3">{plan.price}</span> <span className="text-gray-400">/{billingCycle === "monthly" ? "Month" : "Year"}</span>
              </p>
              {plan.note && (
                <p
                  className={`text-[20px] py-1 px-3 rounded-full mt-2 inline-block ${
                    isSelected ? "bg-purple-200 text-purple-700" : "bg-purple-500 text-white"
                  }`}
                >
                  {plan.note}
                </p>
              )}
              <ul className="mt-4 space-y-2 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className={isSelected ? "text-gray-700" : "text-gray-200"}>
                    • {feature}
                  </li>
                ))}
              </ul>
              {plan.extra && <p className={`text-[25px] mt-2 ${isSelected ? "text-blue-600" : "text-blue-200"}`}>{plan.extra}</p>}
              <button
                className={` cursor-pointer font-semibold py-2 rounded-full mt-6 transition ${
                  isSelected ? "bg-[#254A76] text-white" : "bg-white text-blue-700 hover:bg-gray-100"
                }`}
              >
                Select Plan
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PricingPlan;
