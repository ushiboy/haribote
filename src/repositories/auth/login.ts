import "@/drivers/axios";
import { Auth, postLogin } from "@/drivers/api/auth";

export type LoginParam = Auth;

/**
 * ログイン
 */
export const login = async ({
  email,
  password,
}: LoginParam): Promise<boolean> => {
  const res = await postLogin({
    email,
    password,
  });
  return res.status === 200;
};
