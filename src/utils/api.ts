import axios from "axios";

axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`;
axios.defaults.headers.post["Content-Type"] = "application/json";

const http = async <T>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  data?: any,
  url?: string
): Promise<T> => {
  try {
    const response = await axios({
      method,
      data,
      url,
    });

    return response.data;
  } catch (error: any) {
    if (error.request) {
      // Network error
      console.error("Network error:", error.request);
    }

    throw error;
  }
};

export default http;
