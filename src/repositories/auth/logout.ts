import axios from "axios";

import "@/drivers/axios";
import { LOGOUT_API } from "@/constants/endpoints";

export const logout = async (): Promise<boolean> => {
  const res = await axios.delete(LOGOUT_API);
  return res.status === 200;
};
