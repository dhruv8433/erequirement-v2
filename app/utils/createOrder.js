import toast from "react-hot-toast";
import { httpAxios } from "../httpAxios";
import axios from "axios";
import { PlaceOrder } from "./OrderService";

const createPaypalOrder = async (cartData) => {
  try {
    // Make a request to your backend to create an order
    const response = await httpAxios.post(
      `payment/paypal/create-paypal-order`,
      {
        paymentMethod: "paypal",
        cartData: cartData,
      }
    );
    // it returns one paypal id which we use for approve order
    const orderData = await response.data;

    if (orderData.id) {
      return orderData.id; // Return the order ID from your backend
    } else {
      throw new Error("Order creation failed");
    }
  } catch (error) {
    console.error("Error creating PayPal order:", error);
  }
};

const onPaypalApprove = async (data, actions) => {
  try {
    // Capture the payment on your backend
    const response = await httpAxios.post(
      `/payment/paypal/capture/${data.orderID}`
    );

    const orderData = await response.json();

    if (orderData.status === "COMPLETED") {
      toast.success("Payment captured successfully!");
      console.log("Capture result:", orderData);
    } else {
      throw new Error("Transaction capture failed");
    }
  } catch (error) {
    console.error("Error capturing PayPal order:", error);
    setMessage(
      `Sorry, your transaction could not be processed...${error.message}`
    );
  }
};

const CreateStripeCheckoutSession = async (cartData) => {
  try {
    // Send a POST request to create a Stripe checkout session
    const response = await axios.post(
      `
http://localhost:8000/api/v2/payment/stripe/create-checkout-session`,
      {
        paymentMethod: "stripe",
        cartData,
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error creating Stripe checkout session:", error);
  }
};

export { createPaypalOrder, onPaypalApprove, CreateStripeCheckoutSession };
