import { jest } from "@jest/globals";
import axios from "axios";

import { login } from "../login";

import { LOGIN_API } from "@/constants/endpoints";
import { NetworkException, WebApiException } from "@/domains/errors";

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

  describe("レスポンスステータスが200ではない場合", () => {
    beforeEach(() => {
      (axios.post as Mocked).mockRejectedValue({
        response: {
          status: 400,
          statusText: "bad",
        },
      });
    });

    test(`WebApiExceptionを発生させる`, async () => {
      const email = "test@example.com";
      const password = "xxxxx";

      try {
        await login({
          email,
          password,
        });
      } catch (e) {
        expect(e).toBeInstanceOf(WebApiException);
      }
    });
  });

  // describe("レスポンスが取得できない場合", () => {
  //   beforeEach(() => {
  //     (axios.post as Mocked).mockRejectedValue({});
  //   });

  //   test(`NetworkExceptionを発生させる`, async () => {
  //     const email = "test@example.com";
  //     const password = "xxxxx";

  //     expect(() => {
  //       login({
  //         email,
  //         password,
  //       });
  //     }).rejects.toThrow(NetworkException);
  //   });
  // });
});
