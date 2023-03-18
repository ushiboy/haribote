import { Auth } from "@/drivers/api/auth";
import { authApi } from "@/drivers/apiClient";

export type LoginParam = Auth;

/**
 * ログイン
 */
export const login = async ({
  email,
  password,
}: LoginParam): Promise<boolean> => {
  const res = await authApi.loginPost({
    email,
    password,
  });
  return res.status === 200;
};
