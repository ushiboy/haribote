import { useState } from "react";

import { Article } from "@/domains/models";

/**
 * 記事編集フック
 */
export const useArticleEdit = (article: Article) => {
  const [title, setTitle] = useState(article.title);

  return {
    title,
    setTitle,
  };
};
