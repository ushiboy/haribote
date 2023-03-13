import "@/drivers/axios";
import { CurrentUser } from "@/domains/models";
import { apiConfig } from "@/drivers";
import { AuthApi } from "@/drivers/api";

/**
 * ログインユーザーの情報取得
 */
export const getCurrentUser = async (): Promise<CurrentUser> => {
  const auth = new AuthApi(apiConfig);
  const res = await auth.currentUserGet();
  return res.data;
};
