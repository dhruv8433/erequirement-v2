import axios from "axios";
import { ApiUrl, LocalUrl } from "./config/config";

const isProduction = process.env.NEXT_PUBLIC_PRODUCTION === "true";

export const httpAxios = axios.create({
  baseURL: isProduction ? ApiUrl : LocalUrl,
  withCredentials: true,
});
