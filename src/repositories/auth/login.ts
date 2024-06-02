import "@/drivers/axios";
import { Auth, postLogin } from "@/drivers/api/auth";

export type LoginParam = Auth;

export type Login = (param: LoginParam) => Promise<boolean>;

/**
 * ログイン
 */
export const login: Login = async ({
  email,
  password,
}: LoginParam): Promise<boolean> => {
  const res = await postLogin({
    email,
    password,
  });
  return res.status === 200;
};
