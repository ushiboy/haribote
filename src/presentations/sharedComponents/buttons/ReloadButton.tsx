import { Refresh } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export const ReloadButton: React.FC<{ onClick: () => void }> = ({
  onClick,
}) => {
  const { t } = useTranslation();
  return (
    <Button startIcon={<Refresh />} onClick={onClick}>
      {t("Reload")}
    </Button>
  );
};
