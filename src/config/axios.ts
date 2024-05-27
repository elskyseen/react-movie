import axios from "axios";
import { apiKey, baseUrl } from "../variable";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

export { axiosInstance };
