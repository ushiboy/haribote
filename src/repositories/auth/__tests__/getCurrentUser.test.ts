import { jest } from "@jest/globals";
import axios from "axios";

import { getCurrentUser } from "../getCurrentUser";

import { currentUser } from "@/__fixtures__/CurrentUser";

type Mocked = jest.Mocked<typeof axios.get>;
jest.mock("axios");

describe("getCurrentUser", () => {
  afterEach(() => jest.clearAllMocks());

  describe("正常系", () => {
    beforeEach(() => {
      (axios.get as Mocked).mockResolvedValue({
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
