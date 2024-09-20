import { MyCardBox } from "@/app/custom/MyBox";
import { useTranslations } from "next-intl";
import React from "react";

const ServiceFaqs = ({ service }) => {
  const t = useTranslations("service");
  return (
    <div>
      <MyCardBox className="border border-gray-400 p-4 rounded-2xl mb-4">
        <h2 className="text-xl font-bold mb-2 primary-text">{t("faqs")}</h2>
        {service.Faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold">
              Q{index + 1}. {faq.question}
            </h3>
            <p>A. {faq.answer}</p>
          </div>
        ))}
      </MyCardBox>
      <MyCardBox className="border border-gray-400 p-4 rounded-2xl">
        <h2 className="text-xl font-bold mb-2 primary-text">{t("tags")}</h2>
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
      </MyCardBox>
    </div>
  );
};

export default ServiceFaqs;
