import "@/drivers/axios";
import { CurrentUser } from "@/domains/models";
import { getCurrentUser as _getCurrentUser } from "@/drivers/api/auth";

/**
 * ログインユーザーの情報取得
 */
export const getCurrentUser = async (): Promise<CurrentUser> => {
  const res = await _getCurrentUser();
  return res.data;
};
