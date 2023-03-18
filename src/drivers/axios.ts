import axios, { AxiosError } from "axios";

import { NetworkException, WebApiException } from "@/domains/errors";

axios.defaults.baseURL = "/haribote/api";
axios.interceptors.response.use(null, (error: AxiosError) => {
  if (error.response) {
    throw new WebApiException(error.response.status, error.response.statusText);
  } else {
    throw new NetworkException(error.message);
  }
});

export default axios;
