import { parseISO } from "date-fns";

import "@/drivers/axios";
import { Article } from "@/domains/models";
import { getArticles as _getArticles } from "@/drivers/api/article";

/**
 * 記事一覧取得
 */
export const getArticles = async (): Promise<Article[]> => {
  const res = await _getArticles();
  return res.data.articles.map((r) => ({
    ...r,
    createdAt: parseISO(r.createdAt),
    modifiedAt: parseISO(r.modifiedAt),
  }));
};
