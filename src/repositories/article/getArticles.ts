import axios from "axios";

import "@/drivers/axios";
import { ARTICLES_API } from "@/constants/endpoints";
import { Article } from "@/domains/models";

export const getArticles = async (): Promise<Article[]> => {
  const res = await axios.get(ARTICLES_API);
  return res.data.articles || [];
};
