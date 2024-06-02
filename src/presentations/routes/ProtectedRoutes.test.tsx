import { render } from "@testing-library/react";
import { QueryClient } from "react-query";
import { MemoryRouter } from "react-router";
import { vi } from "vitest";

import { UserSessionContextProvider } from "../contexts/UserSessionContext";

import { ProtectedRoutes } from "./ProtectedRoutes";

import { adminUser, currentUser } from "@/__fixtures__/CurrentUser";
import { WebApiWrap } from "@/__fixtures__/testHelper";
import { CurrentUser } from "@/domains/models";
import { i18n } from "@/i18n/config";

describe("ProtectedRoutes", () => {
  const refresh = vi.fn();
  const client = new QueryClient();

  const output = (user: CurrentUser, path: string) =>
    render(<ProtectedRoutes />, {
      wrapper: ({ children }) => (
        <MemoryRouter initialEntries={[path]}>
          <WebApiWrap client={client}>
            <UserSessionContextProvider currentUser={user} refresh={refresh}>
              {children}
            </UserSessionContextProvider>
          </WebApiWrap>
        </MemoryRouter>
      ),
    });

  beforeEach(() => i18n.changeLanguage("ja"));

  describe("一般ユーザーの場合", () => {
    test("管理ページは表示できない", () => {
      const r = output(currentUser, "/admin");
      expect(r.getByTestId("notFoundPage")).toBeInTheDocument();
    });
  });

  describe("管理ユーザーの場合", () => {
    test("管理ページが表示できる", () => {
      const r = output(adminUser, "/admin");
      expect(r.getByTestId("adminPage")).toBeInTheDocument();
    });
  });
});
