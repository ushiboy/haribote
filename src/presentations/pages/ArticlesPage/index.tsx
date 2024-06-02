import React from "react";

import { ArticleList } from "./components/ArticleList";

import { AppErrorToast } from "@/presentations/domainComponents";
import { useGetArticles } from "@/presentations/hooks/queries/article";
import { useError } from "@/presentations/hooks/shared";

/**
 * 記事一覧ページ
 */
export const ArticlesPage: React.FC = () => {
  const { error, ...errorHandle } = useError();
  const { data, refetch, isFetching } = useGetArticles({
    onError(error) {
      errorHandle.setError(error);
    },
  });
  return (
    <>
      <ArticleList
        articles={data || []}
        onReloadClick={refetch}
        isLoading={isFetching}
      />
      <AppErrorToast
        dataTestId="articlesErrorToast"
        error={error}
        onClose={errorHandle.clearError}
      />
    </>
  );
};
