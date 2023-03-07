import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import React from "react";

import { useArticleEdit } from "./hooks";
import * as S from "./style";

import { Article } from "@/domains/models";

export const ArticleEditDialog: React.FC<{
  article: Article;
  onClose: () => void;
}> = ({ article, onClose }) => {
  const { title, setTitle } = useArticleEdit(article);
  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>記事編集</DialogTitle>
      <S.DialogContent>
        <TextField
          autoFocus
          label="Title"
          type="text"
          fullWidth
          variant="standard"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
      </S.DialogContent>
      <DialogActions>
        <Button onClick={onClose}>保存</Button>
        <Button onClick={onClose}>キャンセル</Button>
      </DialogActions>
    </Dialog>
  );
};
