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

export const createItems = (size: number): Article[] => {
  return Array.from(new Array(size)).map((_, i) => {
    const no: number = i + 1;
    return {
      id: 100 + no,
      title: `title${no}`,
      createdAt: new Date(Date.now() - i * 86400000),
      modifiedAt: new Date(Date.now() - i * 86400000),
    };
  });
};
