import { jest } from "@jest/globals";
import { AxiosResponse } from "axios";

import { login } from "../login";

import { AuthApi } from "@/drivers/api";

describe("login", () => {
  afterEach(() => jest.clearAllMocks());

  describe("正常系", () => {
    let spy: jest.SpiedFunction<typeof AuthApi.prototype.loginPost>;

    beforeEach(() => {
      spy = jest.spyOn(AuthApi.prototype, "loginPost").mockResolvedValue({
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
