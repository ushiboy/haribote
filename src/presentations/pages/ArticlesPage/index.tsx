import React from "react";

import { ArticleList } from "./components/ArticleList";

import { useGetArticles } from "@/presentations/hooks/queries/article";
import { useError } from "@/presentations/hooks/shared";
import { ErrorToast } from "@/presentations/sharedComponents/toasts";

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
      {error && (
        <ErrorToast
          show
          message={errorHandle.toMessageFromError(error)}
          onClose={errorHandle.clearError}
        />
      )}
    </>
  );
};
