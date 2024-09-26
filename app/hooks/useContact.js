/**
 * take @params {object} - that contain username, email, subject and message that we want to contat
 */

import { useState } from "react";
import toast from "react-hot-toast";
import { ContactUsController } from "../utils/ContactService";
import { errorMessages } from "../config/config";

export const useContact = () => {
  const [contact, setContact] = useState([]);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const ContactToUs = async () => {
    if (
      !contactData.name ||
      !contactData.email ||
      !contactData.subject ||
      !contactData.message
    ) {
      return toast.error(errorMessages.feildsRequire);
    }
    try {
      const response = await ContactUsController(contactData);
      setContact(response.data);
      toast.success(response.message);
    } catch (error) {
      console.log("error in contact", error);
      toast.error(error?.response?.data?.errors || errorMessages.wentWrong);
    }
  };

  return {
    ContactToUs,
    setContactData,
  };
};
