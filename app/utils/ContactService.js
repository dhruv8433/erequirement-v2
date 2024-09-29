import { httpAxios } from "../httpAxios";

// take username, email, subject and messages for contact
async function ContactUsController(contactData) {
  const response = await httpAxios.post("/contact", {
    name: contactData.name,
    email: contactData.email,
    subject: contactData.subject,
    message: contactData.message,
  });

  return response.data;
}

export { ContactUsController };
