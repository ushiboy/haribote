import "@/drivers/axios";
import { apiConfig } from "@/drivers";
import { AuthApi } from "@/drivers/api";

/**
 * ログアウト
 */
export const logout = async (): Promise<boolean> => {
  const auth = new AuthApi(apiConfig);
  const res = await auth.logoutDelete();
  return res.status === 200;
};
