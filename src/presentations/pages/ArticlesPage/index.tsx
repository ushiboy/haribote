import React from "react";

import { ArticleList } from "./components/ArticleList";

import { useGetArticles } from "@/presentations/hooks/queries/article";

export const ArticlesPage: React.FC = () => {
  const { data, error, refetch, isFetching } = useGetArticles();
  return (
    <ArticleList
      articles={data || []}
      error={error}
      onReloadClick={refetch}
      isLoading={isFetching}
    />
  );
};
