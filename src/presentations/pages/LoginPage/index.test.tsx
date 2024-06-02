import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient } from "react-query";
import { MemoryRouter, Route, Routes } from "react-router";

import { LoginPage } from ".";

import { currentUser } from "@/__fixtures__/CurrentUser";
import { WebApiWrap } from "@/__fixtures__/testHelper";
import { NetworkException } from "@/domains/errors";
import { i18n } from "@/i18n/config";
import { GetCurrentUser, Login } from "@/repositories";

describe("LoginPage", () => {
  const client = new QueryClient();

  const loginOk: Login = async () => true;
  const loginNg: Login = async () => {
    throw new NetworkException("error");
  };

  const getCurrentUserOk: GetCurrentUser = async () => currentUser;

  const output = (login: Login) =>
    render(<LoginPage />, {
      wrapper: ({ children }) => (
        <WebApiWrap
          client={client}
          overrideRepositories={{
            auth: {
              login,
              getCurrentUser: getCurrentUserOk,
            },
          }}
        >
          <MemoryRouter initialEntries={["/"]}>
            <Routes>
              <Route index element={children} />
              <Route path="/articles" element={<div data-testid="fake" />} />
            </Routes>
          </MemoryRouter>
        </WebApiWrap>
      ),
    });

  beforeEach(() => i18n.changeLanguage("ja"));

  test("ログインページが表示される", () => {
    const r = output(loginOk);

    expect(r.getByTestId("loginPage")).toBeInTheDocument();

    // SignIn
    expect(
      r.getByText("ログイン", {
        selector: "button",
      }),
    ).toBeInTheDocument();
    // Email
    expect(r.getByText("メールアドレス")).toBeInTheDocument();
    // Password
    expect(r.getByText("パスワード")).toBeInTheDocument();
  });

  describe("ログイン成功した場合", () => {
    test("記事一覧へ遷移する", async () => {
      const r = output(loginOk);

      const user = userEvent.setup();

      await user.click(r.getByTestId("signInButton"));

      await waitFor(() => client.isMutating());

      await waitFor(() => expect(r.getByTestId("fake")).toBeInTheDocument());
    });
  });

  describe("ログインでエラーが起きた場合", () => {
    test("エラーメッセージが表示される", async () => {
      const r = output(loginNg);

      const user = userEvent.setup();

      await user.click(r.getByTestId("signInButton"));

      await waitFor(() => client.isMutating());

      expect(r.getByTestId("loginErrorMessage")).toBeInTheDocument();
    });
  });
});
