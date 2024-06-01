import { useCallback } from "react";
import { useTranslation } from "react-i18next";

import {
  ApplicationException,
  NetworkException,
  WebApiException,
} from "@/domains/errors";

/**
 * エラーメッセージ変換
 */
export const useErrorMessage = () => {
  const { t } = useTranslation();
  const toMessageFromError = useCallback(
    (error: ApplicationException): string => {
      if (error instanceof WebApiException) {
        switch (error.statusCode) {
          case 500: {
            return t("ServerError");
          }
        }
      } else if (error instanceof NetworkException) {
        return t("NetworkError");
      }
      return t("UnknownError");
    },
    [t],
  );

  return {
    toMessageFromError,
  };
};
