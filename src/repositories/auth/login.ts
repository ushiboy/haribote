import { Auth } from "@/drivers/api";
import { authApi } from "@/drivers/apiClient";

/**
 * ログイン
 */
export const login = async ({ email, password }: Auth): Promise<boolean> => {
  const res = await authApi.loginPost({
    email,
    password,
  });
  return res.status === 200;
};
