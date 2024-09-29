import { MyCardBox, MyServiceCard } from "@/app/custom/MyBox";
import { useTranslations } from "next-intl";
import React from "react";

const ServiceFaqs = ({ service }) => {
  const t = useTranslations("service");
  return (
    <div>
      <MyCardBox
        className="border border-gray-400 p-4 rounded-2xl mb-4"
        data-aos="fade-up"
      >
        <h2 className="text-xl font-bold mb-2 primary-text" data-aos="fade-up">
          {t("faqs")}
        </h2>
        {service.Faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold" data-aos="fade-up">
              Q{index + 1}. {faq.question}
            </h3>
            <p data-aos="fade-up">A. {faq.answer}</p>
          </div>
        ))}
      </MyCardBox>
      <MyCardBox
        className="border border-gray-400 p-4 rounded-2xl"
        data-aos="fade-up"
      >
        <h2 data-aos="fade-up" className="text-xl font-bold mb-2 primary-text">
          {t("tags")}
        </h2>
        <div className="flex flex-wrap space-x-2" data-aos="fade-up">
          {service.Tags.map((tag, index) => (
            <MyServiceCard key={index} className="px-3 py-1 rounded-full" data-aos="fade-up">
              <span
                data-aos="fade-up"
                className="primary-text font-semibold  text-sm"
              >
                {tag}
              </span>
            </MyServiceCard>
          ))}
        </div>
      </MyCardBox>
    </div>
  );
};

export default ServiceFaqs;
