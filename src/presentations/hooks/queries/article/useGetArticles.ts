import { useQuery, UseQueryOptions } from "react-query";

import { ARTICLES_API } from "@/constants/endpoints";
import { ApplicationException } from "@/domains/errors";
import { Article } from "@/domains/models";
import { getArticles } from "@/repositories";

/**
 * 記事一覧取得
 */
export const useGetArticles = (
  option?: Omit<
    UseQueryOptions<Article[], ApplicationException, Article[]>,
    "queryFn"
  >
) => useQuery(ARTICLES_API, getArticles, option);
