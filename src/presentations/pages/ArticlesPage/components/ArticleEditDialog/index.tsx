import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import React from "react";
import { useTranslation } from "react-i18next";

import { useArticleEdit } from "./hooks";
import * as S from "./style";

import { Article } from "@/domains/models";

export const ArticleEditDialog: React.FC<{
  article: Article;
  onClose: () => void;
}> = ({ article, onClose }) => {
  const { t } = useTranslation();
  const { title, setTitle } = useArticleEdit(article);
  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>{t("EditArticle")}</DialogTitle>
      <S.DialogContent>
        <TextField
          autoFocus
          label={t("ArticleTitle")}
          type="text"
          fullWidth
          variant="standard"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
      </S.DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{t("Save")}</Button>
        <Button onClick={onClose}>{t("Cancel")}</Button>
      </DialogActions>
    </Dialog>
  );
};
