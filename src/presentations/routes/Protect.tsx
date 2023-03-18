import React from "react";
import { Navigate, useLocation } from "react-router";

import { LoadingMask } from "../sharedComponents/utilities";

import { WebApiException } from "@/domains/errors";
import { useAppState } from "@/presentations/AppStateContext";
import { CrashPage } from "@/presentations/pages";

/**
 * 認証保護されたルート
 */
export const Protect: React.FC<{
  element: React.ReactNode;
}> = ({ element }) => {
  const location = useLocation();
  const { isAuthenticated, initError, isLoading } = useAppState();
  if (isLoading) {
    return <LoadingMask show />;
  } else if (isAuthenticated) {
    return <>{element}</>;
  } else if (
    initError &&
    initError instanceof WebApiException &&
    initError.statusCode !== 401
  ) {
    return <CrashPage />;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
};
