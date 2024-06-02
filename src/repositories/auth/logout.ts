import "@/drivers/axios";
import { deleteLogout } from "@/drivers/api/auth";

export type Logout = () => Promise<boolean>;

/**
 * ログアウト
 */
export const logout: Logout = async (): Promise<boolean> => {
  const res = await deleteLogout();
  return res.status === 200;
};
