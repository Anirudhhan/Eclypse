import { useState } from "react";
import { ArrowDown } from "lucide-react";

interface AccordionSection {
  title: string;
  content: string;
}

export default function ProductAccordion() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  const accordionData: AccordionSection[] = [
    {
      title: "Size & Fit",
      content:
        "Our sizes follow standard sizing charts. For this item, we recommend choosing your regular size. The garment features a relaxed fit through the body with a slightly tapered silhouette. Please refer to the size guide for detailed measurements.",
    },
    {
      title: "Delivery & Returns",
      content:
        "Free standard delivery on all orders. Delivery typically takes 3-5 business days. Returns are accepted within 30 days of purchase with original packaging and tags attached. For international orders, please allow 7-10 business days for delivery.",
    },
    {
      title: "How This Was Made",
      content:
        "This item was crafted using sustainable materials and ethical production methods. The fabric is 100% organic cotton, sourced from certified suppliers. The garment was produced in facilities that ensure fair wages and working conditions for all employees.",
    },
  ];

  return (
    <div className="w-full  mx-auto mt-30">
      {accordionData.map((section, index) => (
        <div key={index} className="border-b border-gray-700 md:pb-4 md:pt-12 pt-8">
          <button
            className="w-full py-6 flex justify-between items-center text-left text-xl text-white focus:outline-none"
            onClick={() => toggleSection(index)}
          >
            <span className="md:text-3xl text-xl font-light">{section.title}</span>
            <ArrowDown
              className={`transform transition-transform font-light duration-300 size-8 md:size-12 cursor-pointer ${
                openSection === index ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openSection === index ? "max-h-96 pb-6" : "max-h-0"
            }`}
          >
            <p className="text-gray-300 text-lg">{section.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
