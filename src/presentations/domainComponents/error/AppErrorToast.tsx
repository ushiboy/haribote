import React from "react";

import { ApplicationException } from "@/domains/errors";
import { useErrorMessage } from "@/presentations/hooks/shared";
import { ErrorToast } from "@/presentations/sharedComponents/toasts";

/**
 * アプリケーションエラートースト
 */
export const AppErrorToast: React.FC<{
  error: ApplicationException | null;
  duration?: number;
  dataTestId?: string;
  onClose?: () => void;
}> = ({ error, duration, dataTestId, onClose }) => {
  const { toMessageFromError } = useErrorMessage();
  if (!error) {
    return null;
  }
  return (
    <ErrorToast
      show
      message={toMessageFromError(error)}
      duration={duration}
      dataTestId={dataTestId || "appErrorToast"}
      onClose={onClose}
    />
  );
};
