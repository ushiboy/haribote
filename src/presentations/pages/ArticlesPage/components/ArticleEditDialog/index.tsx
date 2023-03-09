import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import React from "react";
import { useTranslation } from "react-i18next";

import { useArticleEdit } from "./hooks";
import * as S from "./style";

import { Article } from "@/domains/models";
import {
  CancelButton,
  SaveButton,
} from "@/presentations/sharedComponents/buttons";

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
        <SaveButton onClick={onClose} />
        <CancelButton onClick={onClose} />
      </DialogActions>
    </Dialog>
  );
};
