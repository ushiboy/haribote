import { useMutation } from "react-query";

import { ApplicationException } from "@/domains/errors";
import { Auth } from "@/drivers/api";
import { login } from "@/repositories";

/**
 * ログイン
 */
export const useLogin = () =>
  useMutation<unknown, ApplicationException, Auth, unknown>(login);
