import axios from "axios";

import "@/drivers/axios";
import { CURRENT_USER_API } from "@/constants/endpoints";
import { CurrentUser } from "@/domains/models";

/**
 * ログインユーザーの情報取得
 */
export const getCurrentUser = async (): Promise<CurrentUser> => {
  const res = await axios.get(CURRENT_USER_API);
  return res.data;
};
