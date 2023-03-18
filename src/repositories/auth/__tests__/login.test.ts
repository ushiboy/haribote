import { jest } from "@jest/globals";
import axios from "axios";

import { login } from "../login";

type Mocked = jest.Mocked<typeof axios.post>;
jest.mock("axios");

describe("login", () => {
  afterEach(() => jest.clearAllMocks());

  describe("正常系", () => {
    beforeEach(() => {
      (axios.post as Mocked).mockResolvedValue({
        status: 200,
      });
    });

    test(`ログインAPIが実行される`, async () => {
      const email = "test@example.com";
      const password = "xxxxx";

      const r = await login({
        email,
        password,
      });
      expect(r).toBe(true);
    });
  });
});
