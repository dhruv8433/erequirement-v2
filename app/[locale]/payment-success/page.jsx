import ErrorBoundary from "@/app/common/ErrorBoundary";
import PaymentSuccess from "@/app/components/cart/PaymentSuccess";
import React from "react";

const page = () => {
  return (
    <ErrorBoundary>
      <PaymentSuccess />
    </ErrorBoundary>
  );
};

export default page;
