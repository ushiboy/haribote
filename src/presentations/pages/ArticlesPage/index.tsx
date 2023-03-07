import React from "react";

import { ArticleList } from "./components/ArticleList";

import { useArticles } from "@/presentations/hooks/queries/article";

export const ArticlesPage: React.FC = () => {
  const { data, refetch, isFetching } = useArticles();
  return (
    <ArticleList
      articles={data || []}
      onReloadClick={refetch}
      isLoading={isFetching}
    />
  );
};
