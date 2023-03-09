import React from "react";
import { Route, Routes } from "react-router";

import { AboutPage, ArticlesPage, NotFoundPage } from "../pages";

import { MainLayout } from "@/presentations/layouts";

export const ProtectedRoutes: React.FC = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="articles" element={<ArticlesPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MainLayout>
  );
};
