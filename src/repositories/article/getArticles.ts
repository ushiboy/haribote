import axios from "axios";
import { parseISO } from "date-fns";

import { ArticleRaw } from "./type";

import "@/drivers/axios";
import { ARTICLES_API } from "@/constants/endpoints";
import { Article } from "@/domains/models";

export const getArticles = async (): Promise<Article[]> => {
  const res = await axios.get<{ articles: ArticleRaw[] }>(ARTICLES_API);
  return (res.data.articles || []).map((r) => ({
    ...r,
    createdAt: parseISO(r.createdAt),
    modifiedAt: parseISO(r.modifiedAt),
  }));
};
