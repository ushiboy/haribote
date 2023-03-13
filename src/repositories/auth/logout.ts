import { authApi } from "@/drivers/apiClient";

/**
 * ログアウト
 */
export const logout = async (): Promise<boolean> => {
  const res = await authApi.logoutDelete();
  return res.status === 200;
};
