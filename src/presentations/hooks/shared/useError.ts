import { useCallback, useState } from "react";
import { useQueryClient } from "react-query";
import { useLocation, useNavigate } from "react-router";

import { ApplicationException, WebApiException } from "@/domains/errors";

/**
 * エラー管理
 */
export const useError = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const location = useLocation();
  const [error, _setError] = useState<ApplicationException | null>(null);

  const setError = useCallback(
    (error: ApplicationException) => {
      if (error instanceof WebApiException && error.statusCode === 401) {
        queryClient.clear();
        // セッション切れの場合ログインに飛ばす
        navigate("/", { state: { from: location }, replace: true });
      }
      _setError(error);
    },
    [location, queryClient, navigate, _setError],
  );

  const clearError = useCallback(() => _setError(null), [_setError]);

  return {
    error,
    setError,
    clearError,
  };
};
