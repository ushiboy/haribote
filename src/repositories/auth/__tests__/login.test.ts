import { jest } from "@jest/globals";
import { AxiosResponse } from "axios";

import { login } from "../login";

import { authApi } from "@/drivers/apiClient";

describe("login", () => {
  afterEach(() => jest.clearAllMocks());

  describe("正常系", () => {
    let spy: jest.SpiedFunction<typeof authApi.loginPost>;

    beforeEach(() => {
      spy = jest.spyOn(authApi, "loginPost").mockResolvedValue({
        status: 200,
      } as AxiosResponse);
    });

    test(`ログインAPIにリクエストが送信される`, async () => {
      const email = "test@example.com";
      const password = "xxxxx";

      const r = await login({
        email,
        password,
      });
      expect(spy).toHaveBeenCalledWith({
        email,
        password,
      });
      expect(r).toBe(true);
    });
  });
});
