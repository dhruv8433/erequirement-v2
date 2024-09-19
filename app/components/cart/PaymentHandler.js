import { CreateStripeCheckoutSession } from "@/app/utils/createOrder";

// Function to dynamically load the Stripe script
const loadStripeScript = () => {
  return new Promise((resolve, reject) => {
    // Check if Stripe is already loaded in the window
    if (window.Stripe) {
      // Resolve the promise with the existing Stripe object
      resolve(window.Stripe);
      return;
    }

    // Create a script element to load Stripe.js
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/"; // Source URL for Stripe.js
    script.onload = () => {
      // Check if Stripe is available after the script has loaded
      if (window.Stripe) {
        // Resolve the promise with the Stripe object
        resolve(window.Stripe);
      } else {
        // Reject the promise if Stripe failed to load
        reject(new Error("Stripe library failed to load."));
      }
    };
    script.onerror = () => reject(new Error("Failed to load Stripe script")); // Handle script loading errors
    document.body.appendChild(script); // Append the script to the document body
  });
};

// Function to handle payment through Stripe
export async function PaymentHandler(paymentType, cartData) {
  if (paymentType === "Stripe") {
    // Check if the payment type is Stripe
    try {
      // Extract session ID from the response
      const response = await CreateStripeCheckoutSession(cartData);
      const sessionId = response.id;

      // Load the Stripe script and create a Stripe instance
      const Stripe = await loadStripeScript();
      console.log("stripe test", process.env.NEXT_PUBLIC_STRIPE_KEY);
      const stripe = Stripe(process.env.NEXT_PUBLIC_STRIPE_KEY); // Initialize Stripe with public key

      // Redirect the user to the Stripe checkout page
      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      // Log any errors encountered during the payment process
      console.error("Error handling payment:", error);
    }
  }
}
