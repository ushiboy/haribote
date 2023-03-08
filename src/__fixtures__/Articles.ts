import { Article } from "@/domains/models/Article";
import { ArticleRaw } from "@/repositories";

export const article1: Article = {
  id: 100,
  title: "title1",
  createdAt: new Date("2020-01-01 00:00:00"),
  modifiedAt: new Date("2021-01-01 00:00:00"),
};

export const articleRaw1: ArticleRaw = {
  id: 100,
  title: "title1",
  createdAt: "2020-01-01T00:00:00+09:00",
  modifiedAt: "2021-01-01T00:00:00+09:00",
};
