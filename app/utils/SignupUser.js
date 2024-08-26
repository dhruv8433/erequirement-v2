import { httpAxios } from "../httpAxios";

export async function SignupUser(userData) {
  const formData = new FormData();
  formData.append("fullname", userData.fullname);
  formData.append("email", userData.email);
  formData.append("password", userData.password);
  formData.append("phone", userData.phone);
  
  if (userData.avatar) {
    formData.append("avatar", userData.avatar); // Append the file
  }

  const response = await httpAxios.post("/users/signup", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}
