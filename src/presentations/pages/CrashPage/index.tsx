import { Container } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

/**
 * 致命的なエラーページ
 */
export const CrashPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container data-testid="crashPage">
      <h1>{t("CrashError")}</h1>
    </Container>
  );
};
