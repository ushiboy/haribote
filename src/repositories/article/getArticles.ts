import { parseISO } from "date-fns";

import { Article } from "@/domains/models";
import { articleApi } from "@/drivers/apiClient";

/**
 * 記事一覧取得
 */
export const getArticles = async (): Promise<Article[]> => {
  const res = await articleApi.articlesGet();
  return res.data.articles.map((r) => ({
    ...r,
    createdAt: parseISO(r.createdAt),
    modifiedAt: parseISO(r.modifiedAt),
  }));
};
