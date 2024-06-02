import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient } from "react-query";
import { MemoryRouter, Route, Routes } from "react-router";

import { MainLayoutContextProvider } from "../../context";

import { MenuList } from ".";

import { WebApiWrap } from "@/__fixtures__/testHelper";
import { i18n } from "@/i18n/config";
import { Logout } from "@/repositories";

describe("MenuList", () => {
  const client = new QueryClient();

  const logoutOk: Logout = async () => true;

  const output = (logout: Logout) =>
    render(<MenuList />, {
      wrapper: ({ children }) => (
        <WebApiWrap
          client={client}
          overrideRepositories={{
            auth: {
              logout,
            },
          }}
        >
          <MemoryRouter initialEntries={["/test"]}>
            <Routes>
              <Route index element={<div data-testid="fake" />} />
              <Route
                path="/test"
                element={
                  <MainLayoutContextProvider>
                    {children}
                  </MainLayoutContextProvider>
                }
              />
            </Routes>
          </MemoryRouter>
        </WebApiWrap>
      ),
    });

  beforeEach(() => i18n.changeLanguage("ja"));

  describe("ログアウトを押した場合", () => {
    test("ログアウトを実行しログイン画面へ戻る", async () => {
      const r = output(logoutOk);
      const user = userEvent.setup();

      await user.click(r.getByTestId("logoutMenu"));

      await waitFor(() => expect(r.getByTestId("fake")).toBeInTheDocument());
    });
  });
});
