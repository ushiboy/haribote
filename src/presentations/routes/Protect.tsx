import React from "react";
import { Navigate, useLocation } from "react-router";

import { UserSessionContextProvider } from "../contexts/UserSessionContext";
import { useGetCurrentUser } from "../hooks/queries";
import { LoadingMask } from "../sharedComponents/utilities";

import { WebApiException } from "@/domains/errors";
import { CrashPage } from "@/presentations/pages";

/**
 * 認証保護されたルート
 */
export const Protect: React.FC<{
  element: React.ReactNode;
}> = ({ element }) => {
  const location = useLocation();
  const { data, error, isFetching, refetch } = useGetCurrentUser();
  if (isFetching) {
    return <LoadingMask show />;
  }

  if (data) {
    return (
      <UserSessionContextProvider currentUser={data} refresh={refetch}>
        {element}
      </UserSessionContextProvider>
    );
  }

  if (error && error instanceof WebApiException && error.statusCode !== 401) {
    return <CrashPage />;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
};
