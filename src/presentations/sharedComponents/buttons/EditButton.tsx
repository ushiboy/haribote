import { Edit } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

/**
 * 編集ボタン
 */
export const EditButton: React.FC<{
  disabled?: boolean;
  onClick: () => void;
}> = ({ disabled, onClick }) => {
  const { t } = useTranslation();
  return (
    <Button disabled={disabled} startIcon={<Edit />} onClick={onClick}>
      {t("Edit")}
    </Button>
  );
};
