import { renderHook } from "@testing-library/react";

import { useErrorMessage } from "./useErrorMessage";

import {
  ApplicationException,
  NetworkException,
  WebApiException,
} from "@/domains/errors";
import { i18n } from "@/i18n/config";

describe("useErrorMessage", () => {
  const hooks = () => renderHook(() => useErrorMessage());

  beforeEach(() => {
    i18n.changeLanguage("ja");
  });

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
