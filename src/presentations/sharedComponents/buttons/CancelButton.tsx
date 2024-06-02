import { Button } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

/**
 * キャンセルボタン
 */
export const CancelButton: React.FC<{
  disabled?: boolean;
  onClick: () => void;
}> = ({ disabled, onClick }) => {
  const { t } = useTranslation();
  return (
    <Button data-testid="cancelButton" disabled={disabled} onClick={onClick}>
      {t("Cancel")}
    </Button>
  );
};
