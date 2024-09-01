import axios from "axios";
import { ApiUrl } from "./config/config";

export const httpAxios = axios.create({
  baseURL: ApiUrl,
  withCredentials: true,
});
