import { RequestParams } from "@/types";
import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`;
axios.defaults.headers.post["Content-Type"] = "application/json";

const http = async (
  method: "GET" | "POST" | "PUT" | "DELETE",
  data?: any,
  params?: RequestParams
): Promise<AxiosResponse> => {
  try {
    const response = await axios({
      method,
      data,
      params,
    });

    return response;
  } catch (error: any) {
    if (error.request) {
      // Network error
      console.error("Network error:", error.request);
    }

    throw error;
  }
};

export default http;
