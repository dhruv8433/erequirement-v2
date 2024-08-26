import { httpAxios } from "../httpAxios";

export async function LoginUser(userData) {
  const response = await httpAxios.post("/users/login", {
    email: userData.email,
    password: userData.password,
  });

  return response.data;
}
