import { useMutation } from "react-query";

import { ApplicationException } from "@/domains/errors";
import { useRepositoryComposition } from "@/presentations/contexts";

/**
 * ログアウト
 */
export const useLogout = () => {
  const {
    auth: { logout },
  } = useRepositoryComposition();
  return useMutation<unknown, ApplicationException>(logout);
};
