import axios from "axios";
import { vi } from "vitest";

import { getArticles } from "./getArticles";

import { article1, articleRaw1 } from "@/__fixtures__/Articles";

vi.mock("axios");
const mocked = vi.mocked(axios.get);

describe("getArticles", () => {
  afterEach(() => vi.clearAllMocks());

  describe("正常系", () => {
    beforeEach(() => {
      mocked.mockResolvedValue({
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
