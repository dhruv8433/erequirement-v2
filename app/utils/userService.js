import { httpAxios } from "../httpAxios";

// signup user
async function SignupUser(userData) {
  const formData = new FormData();
  formData.append("fullname", userData.fullname);
  formData.append("email", userData.email);
  formData.append("password", userData.password);
  formData.append("phone", userData.phone);

  if (userData.avatar) {
    formData.append("avatar", userData.avatar); // Append the file
  }

  const response = await httpAxios.post("/user/signup", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}

// login user
async function LoginUser(userData) {
  const response = await httpAxios.post("/user/login", {
    email: userData.email,
    password: userData.password,
  });

  return response.data;
}

// singup/login with google
async function SignupWithGoogle(user) {
  const response = await httpAxios.post(
    "/user/google-signup",
    {
      email: user.email,
      avatar: user.photoURL,
      fullname: user.displayName,
    },
    { withCredentials: true }
  );
  return response.data;
}

async function LogoutUser() {
  const response = await httpAxios.post("/user/logout");
  return response.data;
}

export { LoginUser, SignupUser, SignupWithGoogle, LogoutUser };
