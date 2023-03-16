import React from "react";
import { Navigate, useLocation } from "react-router";

import { ApplicationException, WebApiException } from "@/domains/errors";
import { useErrorMessage } from "@/presentations/hooks/shared";
import { ErrorToast } from "@/presentations/sharedComponents/toasts";

/**
 * アプリケーションエラートースト
 */
export const AppErrorToast: React.FC<{
  error: ApplicationException | null;
  duration?: number;
  onClose?: () => void;
}> = ({ error, duration, onClose }) => {
  const location = useLocation();
  const { toMessageFromError } = useErrorMessage();
  if (!error) {
    return null;
  }
  if (error instanceof WebApiException && error.statusCode === 401) {
    // セッション切れの場合ログインに飛ばす
    return (
      <Navigate
        to={`/?redirectUrl=${encodeURIComponent(location.pathname)}`}
        replace
      />
    );
  }
  return (
    <ErrorToast
      show
      message={toMessageFromError(error)}
      duration={duration}
      onClose={onClose}
    />
  );
};
