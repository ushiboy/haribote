import { Container } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

/**
 * Aboutページ
 */
export const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container data-testid="aboutPage">
      <h1>{t("About")}</h1>
      <p>{t("AboutThis")}</p>
    </Container>
  );
};
