import { useCallback, useEffect, useState } from "react";

import { ApplicationException } from "@/domains/errors";
import { Article } from "@/domains/models";
import { useError } from "@/presentations/hooks/shared";

export const useArticles = (
  articles: Article[],
  error: ApplicationException | null
) => {
  const { toMessageFromError } = useError();
  const [isEditing, setEditing] = useState(false);
  const [selected, setSelected] = useState<Set<Article>>(new Set());
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [errorMessage, setErrorMessage] = useState(
    error ? toMessageFromError(error) : ""
  );

  useEffect(() => {
    if (error) {
      setErrorMessage(toMessageFromError(error));
    } else {
      setErrorMessage("");
    }
  }, [error, setErrorMessage, toMessageFromError]);

  const changePage = useCallback(
    (page: number) => {
      setPage(page);
    },
    [setPage]
  );

  const changeRowsPerPage = useCallback(
    (rowsPerPage: number) => {
      setRowsPerPage(rowsPerPage);
      setPage(0);
    },
    [setPage, setRowsPerPage]
  );

  const resetPage = useCallback(() => {
    setPage(0);
  }, [setPage]);

  const toggleSelect = useCallback(
    (article: Article) => {
      if (selected.has(article)) {
        selected.delete(article);
        setSelected(new Set(selected));
      } else {
        selected.add(article);
        setSelected(new Set(selected));
      }
    },
    [selected, setSelected]
  );

  const startEdit = useCallback(() => {
    setEditing(true);
  }, [setEditing]);

  const endEdit = useCallback(() => {
    setEditing(false);
  }, [setEditing]);

  const clearErrorMessage = useCallback(() => {
    setErrorMessage("");
  }, [setErrorMessage]);

  const from = page * rowsPerPage;
  const to = page * rowsPerPage + rowsPerPage;

  return {
    isEditing,
    selected,
    page,
    rowsPerPage,
    errorMessage,
    rows: articles.slice(from, to),
    toggleSelect,
    changePage,
    changeRowsPerPage,
    resetPage,
    startEdit,
    endEdit,
    clearErrorMessage,
  };
};
