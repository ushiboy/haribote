import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import {
  ApplicationException,
  NetworkException,
  WebApiException,
} from "@/domains/errors";

export const useError = () => {
  const { t } = useTranslation();
  const [error, setError] = useState<ApplicationException | null>(null);
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
    [t]
  );

  const clearError = useCallback(() => setError(null), [setError]);

  return {
    error,
    setError,
    clearError,
    toMessageFromError,
  };
};
