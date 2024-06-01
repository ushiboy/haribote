import { useQuery, UseQueryOptions } from "react-query";

import { CURRENT_USER_API } from "@/constants/endpoints";
import { ApplicationException } from "@/domains/errors";
import { CurrentUser } from "@/domains/models";
import { useRepositoryComposition } from "@/presentations/contexts";

/**
 * ログインユーザー情報取得
 */
export const useGetCurrentUser = (
  option: Omit<
    UseQueryOptions<unknown, ApplicationException, CurrentUser>,
    "queryFn"
  >,
) => {
  const {
    auth: { getCurrentUser },
  } = useRepositoryComposition();
  return useQuery(CURRENT_USER_API, getCurrentUser, option);
};
