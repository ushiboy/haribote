import React from "react";
import { Route, Routes } from "react-router";

import { AboutPage, ArticlesPage } from "../pages";

import { MainLayout } from "@/presentations/layouts";

export const ProtectedRoutes: React.FC = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="articles" element={<ArticlesPage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </MainLayout>
  );
};
