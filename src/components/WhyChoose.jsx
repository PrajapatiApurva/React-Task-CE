import { useState } from "react";

const options = [
  {
    title: "Trusted by Thousands",
    content:
      "Our platform is trusted by thousands of users worldwide, ensuring reliability and top-tier security.",
  },
  {
    title: "SOC-2 Certified",
    content:
      "We are SOC-2 certified, adhering to the highest security and compliance standards for your data.",
  },
  {
    title: "GDPR & HIPAA Compliant",
    content:
      "We comply with GDPR & HIPAA regulations to protect your personal and healthcare-related data.",
  },
  {
    title: "End-to-end encryption",
    content:
      "All communications and data transfers are end-to-end encrypted, providing the utmost security.",
  },
];

function WhyChoose() {
  const [selected, setSelected] = useState(options[0]); // Default selection

  return (
    <div className="flex flex-col items-center py-12">
      <h2 className="text-[30px] text-center font-bold mb-6">
        What our users say
      </h2>
      <div className="w-full bg-white p-8 flex justify-center gap-10">
        {/* Left Sidebar (Options) */}
        <div className="w-1/3 space-y-4">
          {options.map((option, index) => (
            <button
              key={index}
              id={
                selected.title === option.title
                  ? "videoSection"
                  : ""
              }
              className={`w-[427px] h-[85px] p-4 text-left text-[#4A4A4A] rounded-[30px] font-bold border-2 transition-all duration-300 ${
                selected.title === option.title
                  ? "border-purple-500 bg-gradient-to-r from-blue-100 to-purple-200 text-[#254A76]"
                  : " border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setSelected(option)}
            >
              {option.title}
            </button>
          ))}
        </div>

        {/* Right Content Box */}
        <div className="h-[715px] w-[737px] flex justify-center items-center p-6 border-2 border-Start rounded-lg shadow-md">
          <p className="text-lg font-medium text-gray-700">
            {selected.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
