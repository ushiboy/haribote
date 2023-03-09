import { useCallback, useState } from "react";

import { Article } from "@/domains/models";

/**
 * 記事一覧フック
 */
export const useArticles = (articles: Article[]) => {
  const [isEditing, setEditing] = useState(false);
  const [selected, setSelected] = useState<Set<Article>>(new Set());
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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

  const clearSelect = useCallback(() => setSelected(new Set()), [setSelected]);

  const startEdit = useCallback(() => {
    setEditing(true);
  }, [setEditing]);

  const endEdit = useCallback(() => {
    setEditing(false);
  }, [setEditing]);

  const from = page * rowsPerPage;
  const to = page * rowsPerPage + rowsPerPage;

  return {
    isEditing,
    selected,
    page,
    rowsPerPage,
    rows: articles.slice(from, to),
    toggleSelect,
    changePage,
    changeRowsPerPage,
    resetPage,
    startEdit,
    endEdit,
    clearSelect,
  };
};
