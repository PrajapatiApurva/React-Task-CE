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
    <div className="flex flex-col items-center py-12 px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl text-center font-bold mb-6">
        Why Choose Docutech
      </h2>
      <div className="w-full flex flex-wrap md:flex-nowrap justify-center gap-6">
        {/* Left Sidebar (Options) */}
        <div className="w-full md:w-1/3 space-y-4">
          {options.map((option, index) => (
            <button
              key={index}
              id={
                selected.title === option.title
                  ? "videoSection"
                  : ""
              }
              aria-selected={selected.title === option.title}
              className={`w-full md:w-[427px] h-[85px] p-4 text-left rounded-[30px] font-bold border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500
                ${
                  selected.title === option.title
                    ? "border-purple-500 bg-gradient-to-r from-blue-100 to-purple-200 text-[#254A76] shadow-md"
                    : "border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`
              }
              onClick={() => setSelected(option)}
            >
              {option.title}
            </button>
          ))}
        </div>

        {/* Right Content Box */}
        <div className="w-full md:w-[737px] flex justify-center items-center p-6 border-2 border-Start rounded-lg shadow-md min-h-[500px]">
          <p className="text-lg font-medium text-gray-700 text-center md:text-left">
            {selected.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
