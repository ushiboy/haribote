import axios from "axios";

import "@/drivers/axios";
import { LOGIN_API } from "@/constants/endpoints";

export type LoginParam = {
  email: string;
  password: string;
};

export const login = async ({ email, password }: LoginParam) => {
  const res = await axios.post(LOGIN_API, {
    email,
    password,
  });
  return res.status === 200;
};
