import React from "react";

const ServiceFaqs = ({ service }) => {
  return (
    <div>
      <div className="border border-gray-400 p-4 rounded-2xl mb-4">
        <h2 className="text-xl font-bold mb-2 primary-text">
          FAQs
        </h2>
        {service.Faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold">
              Q{index + 1}. {faq.question}
            </h3>
            <p>A. {faq.answer}</p>
          </div>
        ))}
      </div>
      <div className="border border-gray-400 p-4 rounded-2xl">
        <h2 className="text-xl font-bold mb-2 primary-text">
          Tags
        </h2>
        <div className="flex flex-wrap space-x-2">
          {service.Tags.map((tag, index) => (
            <span
              key={index}
              className="tag primary-text font-semibold px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceFaqs;
