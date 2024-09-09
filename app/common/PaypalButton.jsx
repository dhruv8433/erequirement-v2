import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { createOrder, onPaypalApprove } from "../utils/createOrder";

// Renders errors or successfull transactions on the screen.
function Message({ content }) {
  return <p>{content}</p>;
}

function PaypalButton() {
  const initialOptions = {
    "client-id":
      "AdFJY6e6fUgoZYqHZWexL1o9x26yAexQd9JnOkIJzZmXTMYl2JujjCOgP0AzgifLjQhd8aNi_vKKRe8e",
    "enable-funding": "venmo",
    "disable-funding": "",
    "data-page-type": "product-details",
    components: "buttons",
    "data-sdk-integration-source": "developer-studio",
  };

  const [message, setMessage] = useState("");

  return (
    <div className="App">
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{
            shape: "rect",
            layout: "vertical",
            color: "gold",
            label: "paypal",
          }}
          createOrder={() =>createOrder("paypal")}
          onApprove={onPaypalApprove}
        />
      </PayPalScriptProvider>
      <Message content={message} />
    </div>
  );
}

export default PaypalButton;
