import { useMutation } from "react-query";

import { ApplicationException } from "@/domains/errors";
import { logout } from "@/repositories";

export const useLogout = () =>
  useMutation<unknown, ApplicationException>(logout);
