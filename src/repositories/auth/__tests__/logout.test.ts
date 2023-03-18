import { jest } from "@jest/globals";
import axios from "axios";

import { logout } from "../logout";

type Mocked = jest.Mocked<typeof axios.delete>;
jest.mock("axios");

describe("logout", () => {
  afterEach(() => jest.clearAllMocks());

  describe("正常系", () => {
    beforeEach(() => {
      (axios.delete as Mocked).mockResolvedValue({
        status: 200,
      });
    });

    test(`ログアウトAPIが実行される`, async () => {
      const r = await logout();
      expect(r).toBe(true);
    });
  });
});
