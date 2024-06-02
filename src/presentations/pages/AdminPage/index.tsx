import { Container } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

/**
 * Adminページ
 */
export const AdminPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container data-testid="adminPage">
      <h1>{t("Admin")}</h1>
    </Container>
  );
};
