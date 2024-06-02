import { renderHook } from "@testing-library/react";
import { QueryClient } from "react-query";
import { MemoryRouter } from "react-router";

import { useLoginPage } from "./useLoginPage";

import { WebApiWrap } from "@/__fixtures__/testHelper";
import { WebApiException } from "@/domains/errors";
import { i18n } from "@/i18n/config";

describe("useLoginPage", () => {
  const client = new QueryClient();

  const hooks = () =>
    renderHook(() => useLoginPage(), {
      wrapper: ({ children }) => (
        <WebApiWrap client={client}>
          <MemoryRouter>{children}</MemoryRouter>
        </WebApiWrap>
      ),
    });

  beforeEach(() => i18n.changeLanguage("ja"));

  describe("toMessageFromError", () => {
    describe("401エラーの場合", () => {
      test(`"メールアドレスまたはパスワードが誤っています。"を返す`, () => {
        const r = hooks();
        expect(
          r.result.current.toMessageFromError(new WebApiException(401, "")),
        ).toBe("メールアドレスまたはパスワードが誤っています。");
      });
    });
  });
});
