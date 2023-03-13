import { jest } from "@jest/globals";
import { AxiosResponse } from "axios";

import { getArticles } from "../getArticles";

import { article1, articleRaw1 } from "@/__fixtures__/Articles";
import { ArticleApi } from "@/drivers/api";

describe("getArticles", () => {
  afterEach(() => jest.clearAllMocks());

  describe("正常系", () => {
    let spy: jest.SpiedFunction<typeof ArticleApi.prototype.articlesGet>;
    beforeEach(() => {
      spy = jest.spyOn(ArticleApi.prototype, "articlesGet").mockResolvedValue({
        status: 200,
        data: {
          articles: [articleRaw1],
        },
      } as AxiosResponse);
    });

    test(`記事取得APIにリクエストが送信される`, async () => {
      await getArticles();
      expect(spy).toHaveBeenCalled();
    });

    test(`レスポンスがドメインモデルに変換される`, async () => {
      const r = await getArticles();
      expect(r).toEqual([article1]);
    });
  });
});
