import React from "react";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ total, items, onPaymentSuccess }) => {
  const dispatch = useDispatch();

  // This function will be called when the token is received from Stripe
  const onToken = async (token) => {
    console.log("Payment token:", token);

    try {
      // Make a request to your backend to process the payment
      const response = await axios.post("http://localhost:8000/api/v2/payment/stripe/create-checkout-session", {
        token,
        items, // Send the cart items or order details
        total, // Send the total amount to the backend
      });

      // Handle successful payment response
      if (response.data.success) {
        console.log("Payment Successful");
        onPaymentSuccess(token); // Callback to handle successful payment
        dispatch(clearCart()); // Clear the cart after payment
      } else {
        console.error("Payment failed:", response.data.message);
      }
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  return (
    <StripeCheckout
      label="Payment"
      name="eRequirement"
      description={`Your total is $${total}`} // Show total price
      amount={total * 100} // Stripe expects the amount in cents
      panelLabel="Pay Now"
      token={onToken} // Handle the token returned by Stripe
      stripeKey={process.env.NEXT_PUBLIC_STRIPE_KEY} // Public Stripe API key
    />
  );
};

export default StripeButton;
