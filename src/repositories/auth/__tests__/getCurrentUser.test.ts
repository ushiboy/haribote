import axios from "axios";
import { vi } from "vitest";

import { getCurrentUser } from "../getCurrentUser";

import { currentUser } from "@/__fixtures__/CurrentUser";

vi.mock("axios");
const mocked = vi.mocked(axios.get);

describe("getCurrentUser", () => {
  afterEach(() => vi.clearAllMocks());

  describe("正常系", () => {
    beforeEach(() => {
      mocked.mockResolvedValue({
        status: 200,
        data: {
          ...currentUser,
        },
      });
    });

    test(`ログインユーザーの情報が取得できる`, async () => {
      const r = await getCurrentUser();
      expect(r).toEqual(currentUser);
    });
  });
});
