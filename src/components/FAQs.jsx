import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqDataArray = [
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
    question: "What file formats does DocuTech support?",
    answer:
      "DocuTech supports PDFs, Word documents, and various image formats like PNG and JPG for uploading and signing documents.",
  },
];

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-12 px-6 max-w-4xl w-full mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">FAQs</h2>
      <div className="space-y-4">
        {faqDataArray.map((faq, index) => (
          <div
            key={index}
            id={openIndex === index ? "planSection" : ""}
            className="shadow-lg border border-gray-300 rounded-lg"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-lg font-semibold bg-Start text-white rounded-t-lg"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-700 border-t border-gray-300 rounded-b-lg">
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
