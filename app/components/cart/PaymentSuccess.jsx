import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router"; // Use next/router here
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import toast from "react-hot-toast";
import { clearCart } from "@/app/reducer/cartReducer";

const PaymentSuccess = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(clearCart());
    toast.success("Payment successful!");

    // Ensure the router push is only done if the component is still mounted
    const timeout = setTimeout(() => {
      if (router) {
        router.push("/");
      }
    }, 3000);

    // Cleanup function to avoid memory leaks or unnecessary re-renders
    return () => clearTimeout(timeout);
  }, [dispatch, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-200 flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white shadow-xl rounded-3xl p-8 md:p-12 max-w-lg text-center"
      >
        <motion.div
          initial={{ rotate: -20 }}
          animate={{ rotate: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-green-500 mb-6"
        >
          <CheckCircle size={72} strokeWidth={1.5} />
        </motion.div>

        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-gray-800"
        >
          Payment Successful!
        </motion.h1>
        <p className="mt-3 text-gray-600">
          Thank you for your order. You’ll be redirected shortly.
        </p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 2 }}
          className="mt-6 h-2 bg-green-400 rounded-full origin-left"
        />
      </motion.div>
    </div>
  );
};

export default PaymentSuccess;
