import { CurrentUser } from "@/domains/models";
import { authApi } from "@/drivers/apiClient";

/**
 * ログインユーザーの情報取得
 */
export const getCurrentUser = async (): Promise<CurrentUser> => {
  const res = await authApi.currentUserGet();
  return res.data;
};
