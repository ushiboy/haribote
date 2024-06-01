import { useCallback } from "react";
import { useTranslation } from "react-i18next";

import { ApplicationException, WebApiException } from "@/domains/errors";
import { useAppState } from "@/presentations/AppStateContext";
import { useLogin } from "@/presentations/hooks/queries";
import { useErrorMessage } from "@/presentations/hooks/shared";

/**
 * ログインページフック
 */
export const useLoginPage = () => {
  const { t } = useTranslation();
  const appStateHandle = useAppState();
  const loginHandle = useLogin();
  const errorHandle = useErrorMessage();

  const login = useCallback(
    (form: FormData) => {
      loginHandle.mutate(
        {
          email: form.get("email") as string,
          password: form.get("password") as string,
        },
        {
          onSuccess() {
            appStateHandle.authenticated();
          },
        },
      );
    },
    [loginHandle, appStateHandle],
  );

  const toMessageFromError = useCallback(
    (error: ApplicationException): string => {
      if (error instanceof WebApiException && error.statusCode === 401) {
        return t("LoginError");
      }
      return errorHandle.toMessageFromError(error);
    },
    [errorHandle, t],
  );

  return {
    login,
    error: loginHandle.error,
    isLoading: loginHandle.isLoading,
    toMessageFromError,
  };
};
