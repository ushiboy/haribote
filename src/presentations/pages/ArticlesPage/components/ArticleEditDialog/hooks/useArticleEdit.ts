import { useState } from "react";

import { Article } from "@/domains/models";

export const useArticleEdit = (article: Article) => {
  const [title, setTitle] = useState(article.title);

  return {
    title,
    setTitle,
  };
};
