import { render } from "@testing-library/react";
import { QueryClient } from "react-query";
import { MemoryRouter } from "react-router";

import { AppRoutes } from "./AppRoutes";

import { WebApiWrap } from "@/__fixtures__/testHelper";
import { i18n } from "@/i18n/config";

describe("AppRoutes", () => {
  const client = new QueryClient();
  const output = (path: string) =>
    render(<AppRoutes />, {
      wrapper: ({ children }) => (
        <MemoryRouter initialEntries={[path]}>
          <WebApiWrap client={client}>{children}</WebApiWrap>
        </MemoryRouter>
      ),
    });

  beforeEach(() => i18n.changeLanguage("ja"));

  describe("indexの場合", () => {
    test("ログインページが表示される", () => {
      const r = output("/");
      expect(r.getByTestId("loginPage")).toBeInTheDocument();
    });
  });

  describe("/register/:codeの場合", () => {
    test("登録ページが表示される", () => {
      const r = output("/register/123");
      expect(r.getByTestId("registerPage")).toBeInTheDocument();
    });
  });
});
