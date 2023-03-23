import React from "react";
import { Route, Routes } from "react-router";

import { AboutPage, AdminPage, ArticlesPage, NotFoundPage } from "../pages";

import { useAppState } from "@/presentations/AppStateContext";
import { MainLayout, SubLayout } from "@/presentations/layouts";

/**
 * 認証保護されたルーティング定義
 */
export const ProtectedRoutes: React.FC = () => {
  const { isAdmin } = useAppState();
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="articles" element={<ArticlesPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
      {isAdmin && (
        <Route path="/" element={<SubLayout />}>
          <Route path="admin" element={<AdminPage />} />
        </Route>
      )}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
