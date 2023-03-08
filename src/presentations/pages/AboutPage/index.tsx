import { Container } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <h1>{t("About")}</h1>
      <p>{t("AboutThis")}</p>
    </Container>
  );
};
