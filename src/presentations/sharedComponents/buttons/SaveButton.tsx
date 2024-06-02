import { Save } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

/**
 * 保存ボタン
 */
export const SaveButton: React.FC<{
  disabled?: boolean;
  onClick: () => void;
}> = ({ disabled, onClick }) => {
  const { t } = useTranslation();
  return (
    <Button
      data-testid="saveButton"
      variant="contained"
      disabled={disabled}
      startIcon={<Save />}
      onClick={onClick}
    >
      {t("Save")}
    </Button>
  );
};
