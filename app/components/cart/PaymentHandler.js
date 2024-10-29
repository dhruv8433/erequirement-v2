import { createPaypalOrder } from "@/app/utils/createOrder";
import { PlaceOrder } from "@/app/utils/OrderService";
import axios from "axios";
import toast from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";
import { httpAxios } from "@/app/httpAxios";

// Function to initialize and handle Stripe payment
export const PaymentHandler = async (paymentType, cartData, userId, cartId) => {
  if (paymentType === "Stripe") {
    console.log("Initiating Stripe...");
    try {
      // Create a checkout session by calling your backend API
      const { data } = await httpAxios.post(
        "/payment/stripe/create-checkout-session",
        {
          cartData,
          paymentMethod: "stripe",
          metadata: {
            userId,
            cartId,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Load Stripe and create an instance
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

      if (stripe) {
        const result = await stripe.redirectToCheckout({ sessionId: data.id });
        if (result.error) {
          console.error("Stripe Checkout error:", result.error.message);
        }
      } else {
        console.error("Stripe is not available.");
      }
    } catch (error) {
      console.error("Error creating checkout session:", error.message);
    }
  }

  // PayPal Payment handling
  if (paymentType === "Paypal") {
    try {
      console.log("Initializing PayPal...");
      const response = await createPaypalOrder(cartData);
      const orderId = response;
      const paypalEnvironment =
        "https://www.sandbox.paypal.com/checkoutnow?token=";
      const approvalUrl = `${paypalEnvironment}${orderId}`;
      window.location.href = approvalUrl;
    } catch (error) {
      console.error("Error handling PayPal payment:", error);
    }
  }

  // Cash on Delivery (COD) Payment handling
  if (paymentType === "cod") {
    try {
      console.log("userID", userId);
      const response = await PlaceOrder(cartData._id, userId, "cod");
      toast.success(response.message);
      console.log("COD response:", response);
    } catch (error) {
      console.log("Error handling COD payment:", error);
    }
  }
};
