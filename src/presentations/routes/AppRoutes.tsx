import React from "react";
import { Route, Routes } from "react-router";

import { LoginPage, RegisterPage } from "../pages";

import { Protect } from "./Protect";
import { ProtectedRoutes } from "./ProtectedRoutes";

/**
 * アプリケーションルーティング定義
 */
export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="/register/:code" element={<RegisterPage />} />
      <Route path="/*" element={<Protect element={<ProtectedRoutes />} />} />
    </Routes>
  );
};
