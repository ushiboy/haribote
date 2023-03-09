import axios from "axios";

import "@/drivers/axios";
import { LOGIN_API } from "@/constants/endpoints";

/**
 * ログインリクエストパラメータ
 */
export type LoginParam = {
  email: string;
  password: string;
};

/**
 * ログイン
 */
export const login = async ({
  email,
  password,
}: LoginParam): Promise<boolean> => {
  const res = await axios.post(LOGIN_API, {
    email,
    password,
  });
  return res.status === 200;
};
