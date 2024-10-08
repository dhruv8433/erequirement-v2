import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useReviews } from "@/app/hooks/useReviews";
import { MyCardBox, MyServiceCard } from "@/app/custom/MyBox";
import { MyBorderdButton } from "@/app/custom/MyButton";
import ProviderReviews from "../providers/ProviderReviews";
import MyModal from "@/app/custom/MyModal";
import AddReview from "@/app/model/AddReview";

const ServiceFaqs = ({ service }) => {
  const t = useTranslations("service");
  const {
    fetchSingleServiceReviews,
    serviceReviews,
    serviceLoading,
    error,
    setPage,
    page,
  } = useReviews();

  useEffect(() => {
    fetchSingleServiceReviews(service._id);
  }, [page]);

  // open review model
  const [openReview, setOpenReview] = useState(false);

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
            <MyServiceCard
              key={index}
              className="px-3 py-1 rounded-full"
              data-aos="fade-up"
            >
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

      <MyCardBox className="p-4 rounded-2xl my-4">
        <div className="flex justify-between mb-3">
          <h2
            data-aos="fade-up"
            className="text-xl font-bold mb-2 primary-text"
          >
            {t("reviews")}
          </h2>

          <MyBorderdButton
            title={t("add_review")}
            className={"px-2"}
            onClickFunction={() => setOpenReview(true)}
          />
        </div>

        <div className="add-review">
          <ProviderReviews
            reviews={serviceReviews}
            loading={serviceLoading}
            error={error}
            setPage={setPage}
            totalPages={serviceReviews.totalPages}
            offset={serviceReviews.offset}
          />
        </div>
      </MyCardBox>

      <MyModal open={openReview} setOpen={setOpenReview}>
        <MyCardBox className="rounded-2xl" width={{ xs: "300px", md: "400px" }}>
          <AddReview isService={true} serviceId={service._id} />
        </MyCardBox>
      </MyModal>
    </div>
  );
};

export default ServiceFaqs;
