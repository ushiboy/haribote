import { useMutation } from "react-query";

import { ApplicationException } from "@/domains/errors";
import { useRepositoryComposition } from "@/presentations/contexts";
import { LoginParam } from "@/repositories";

/**
 * ログイン
 */
export const useLogin = () => {
  const {
    auth: { login },
  } = useRepositoryComposition();
  return useMutation<unknown, ApplicationException, LoginParam, unknown>(login);
};
