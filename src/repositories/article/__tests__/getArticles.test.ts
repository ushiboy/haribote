import { jest } from "@jest/globals";
import axios from "axios";

import { getArticles } from "../getArticles";

import { article1, articleRaw1 } from "@/__fixtures__/Articles";

type Mocked = jest.Mocked<typeof axios.get>;
jest.mock("axios");

describe("getArticles", () => {
  afterEach(() => jest.clearAllMocks());

  describe("正常系", () => {
    beforeEach(() => {
      (axios.get as Mocked).mockResolvedValue({
        status: 200,
        data: {
          articles: [articleRaw1],
        },
      });
    });

    test(`レスポンスがドメインモデルに変換される`, async () => {
      const r = await getArticles();
      expect(r).toEqual([article1]);
    });
  });
});
