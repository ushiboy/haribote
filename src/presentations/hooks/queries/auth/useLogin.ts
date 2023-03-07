import { useMutation } from "react-query";

import { ApplicationException } from "@/domains/errors";
import { login, LoginParam } from "@/repositories";

export const useLogin = () =>
  useMutation<unknown, ApplicationException, LoginParam, unknown>(login);
