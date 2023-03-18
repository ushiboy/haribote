import "@/drivers/axios";
import { deleteLogout } from "@/drivers/api/auth";

/**
 * ログアウト
 */
export const logout = async (): Promise<boolean> => {
  const res = await deleteLogout();
  return res.status === 200;
};
