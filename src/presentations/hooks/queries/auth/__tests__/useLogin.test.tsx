import { jest } from "@jest/globals";
import { renderHook, act, waitFor } from "@testing-library/react";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "react-query";

import { useLogin } from "../useLogin";

import { LOGIN_API } from "@/constants/endpoints";
import { NetworkException, WebApiException } from "@/domains/errors";

type Mocked = jest.Mocked<typeof axios.post>;
jest.mock("axios");

describe("useLogin", () => {
  const client = new QueryClient();
  const Wrap: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <QueryClientProvider client={client}>{children}</QueryClientProvider>
  );
  const hooks = () =>
    renderHook(() => useLogin(), {
      wrapper: Wrap,
    });

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

      const r = hooks();
      act(() =>
        r.result.current.mutate({
          email,
          password,
        })
      );
      await waitFor(() => r.result.current.isSuccess);
      expect(axios.post).toHaveBeenCalledWith(LOGIN_API, {
        email,
        password,
      });
      expect(r.result.current.data).toBe(true);
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

      const r = hooks();
      act(() =>
        r.result.current.mutate({
          email,
          password,
        })
      );
      await waitFor(() => r.result.current.isError);
      expect(r.result.current.error).toBeInstanceOf(WebApiException);
    });
  });

  describe("レスポンスが取得できない場合", () => {
    beforeEach(() => {
      (axios.post as Mocked).mockRejectedValue({});
    });

    test(`NetworkExceptionを発生させる`, async () => {
      const email = "test@example.com";
      const password = "xxxxx";

      const r = hooks();
      act(() =>
        r.result.current.mutate({
          email,
          password,
        })
      );
      await waitFor(() => r.result.current.isError);
      expect(r.result.current.error).toBeInstanceOf(NetworkException);
    });
  });
});
