import { parseISO } from "date-fns";

import "@/drivers/axios";
import { Article } from "@/domains/models";
import { apiConfig } from "@/drivers";
import { ArticleApi } from "@/drivers/api";

/**
 * 記事一覧取得
 */
export const getArticles = async (): Promise<Article[]> => {
  const article = new ArticleApi(apiConfig);
  const res = await article.articlesGet();
  return res.data.articles.map((r) => ({
    ...r,
    createdAt: parseISO(r.createdAt),
    modifiedAt: parseISO(r.modifiedAt),
  }));
};
