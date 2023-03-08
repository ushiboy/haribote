import { jest } from "@jest/globals";
import axios from "axios";

import { login } from "../login";

import { LOGIN_API } from "@/constants/endpoints";

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

    test(`${LOGIN_API}にPOSTリクエストが送信される`, async () => {
      const email = "test@example.com";
      const password = "xxxxx";

      const r = await login({
        email,
        password,
      });
      expect(axios.post).toHaveBeenCalledWith(LOGIN_API, {
        email,
        password,
      });
      expect(r).toBe(true);
    });
  });
});
