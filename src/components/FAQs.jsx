import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "Are DocuTech signatures legally binding?",
    answer:
      "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they’re encrypted and tracked, so it’s safer than losing a paper contract in your junk drawer!",
  },
  {
    question: "How secure is DocuTech?",
    answer:
      "Security is our top priority! We use end-to-end encryption, multi-factor authentication, and compliance with industry standards like SOC-2 and GDPR.",
  },
  {
    question: "Can I use DocuTech for business contracts?",
    answer:
      "Absolutely! DocuTech is designed for both personal and business use, providing secure and legally binding digital signatures for contracts of all kinds.",
  },
  {
    question: "Can I use DocuTech for business contracts?",
    answer:
      "Absolutely! DocuTech is designed for both personal and business use, providing secure and legally binding digital signatures for contracts of all kinds.",
  },
];

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-12 px-6 w-[1190px] mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">FAQs</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            id={openIndex === index ? "planSection" : ""}
            key={index}
            className="shadow-lg"
          >
            <button
              className={`w-full rounded-[20px] bg-Start flex justify-between items-center p-4 text-lg font-semibold transition ${
                openIndex === index ? "text-white" : "text-white"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
            </button>
            {openIndex === index && (
              <div
                className=" text-center p-4 text-gray-700 border-Dark border-b-1 border-r-1 border-l-1 rounded-b-lg"
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;
