import "@/drivers/axios";
import { apiConfig } from "@/drivers";
import { AuthApi, Auth } from "@/drivers/api";

/**
 * ログイン
 */
export const login = async ({ email, password }: Auth): Promise<boolean> => {
  const auth = new AuthApi(apiConfig);
  const res = await auth.loginPost({
    email,
    password,
  });
  return res.status === 200;
};
