import { useQuery, UseQueryOptions } from "react-query";

import { CURRENT_USER_API } from "@/constants/endpoints";
import { ApplicationException } from "@/domains/errors";
import { CurrentUser } from "@/domains/models";
import { getCurrentUser } from "@/repositories";

export const useGetCurrentUser = (
  option: Omit<
    UseQueryOptions<unknown, ApplicationException, CurrentUser>,
    "queryFn"
  >
) => useQuery(CURRENT_USER_API, getCurrentUser, option);
