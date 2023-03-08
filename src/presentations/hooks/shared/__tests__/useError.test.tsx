import { renderHook } from "@testing-library/react";

import { useError } from "../useError";

import "@/i18n/config";
import {
  ApplicationException,
  NetworkException,
  WebApiException,
} from "@/domains/errors";

describe("useError", () => {
  const hooks = () => renderHook(() => useError());

  describe("WebApiExceptionの場合", () => {
    describe("500ステータスの場合", () => {
      const text = "サーバーでエラーが発生しました。";
      test(`"${text}"を返す`, () => {
        const r = hooks();
        const error = new WebApiException(500, "");
        expect(r.result.current.toMessageFromError(error)).toBe(text);
      });
    });
  });

  describe("NetworkExceptionの場合", () => {
    const text = "ネットワーク接続に失敗しました。";
    test(`"${text}"を返す`, () => {
      const r = hooks();
      const error = new NetworkException("");
      expect(r.result.current.toMessageFromError(error)).toBe(text);
    });
  });

  describe("ApplicationExceptionの場合", () => {
    const text = "原因不明のエラーが発生しました。";
    test(`"${text}"を返す`, () => {
      const r = hooks();
      const error = new ApplicationException("");
      expect(r.result.current.toMessageFromError(error)).toBe(text);
    });
  });
});
