import { render, waitFor } from "@testing-library/react";
import { QueryClient } from "react-query";
import { MemoryRouter, Route, Routes } from "react-router";

import { Protect } from "./Protect";

import { currentUser } from "@/__fixtures__/CurrentUser";
import { WebApiWrap } from "@/__fixtures__/testHelper";
import { WebApiException } from "@/domains/errors";
import { GetCurrentUser } from "@/repositories";

describe("Protect", () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  const getCurrentUserOk: GetCurrentUser = async () => currentUser;

  const getCurrentUserNg: GetCurrentUser = async () => {
    throw new WebApiException(401, "");
  };

  const getCurrentUserFaitalNg: GetCurrentUser = async () => {
    throw new WebApiException(500, "");
  };

  const output = (getCurrentUser: GetCurrentUser) =>
    render(<Protect element={<div data-testid="fake" />} />, {
      wrapper: ({ children }) => (
        <MemoryRouter initialEntries={["/protected"]}>
          <WebApiWrap
            client={client}
            overrideRepositories={{
              auth: {
                getCurrentUser,
              },
            }}
          >
            <Routes>
              <Route index element={<div data-testid="fakeLogin" />} />
              <Route path="/protected" element={children} />
            </Routes>
          </WebApiWrap>
        </MemoryRouter>
      ),
    });

  beforeEach(() => client.clear());

  describe("ログインユーザーが取得できた場合", () => {
    test("保護対象を描画する", async () => {
      const r = output(getCurrentUserOk);
      await waitFor(() => client.isFetching());

      expect(r.getByTestId("fake")).toBeInTheDocument();
    });
  });

  describe("ログインユーザーの取得で401エラーが起きた場合", () => {
    test('"/"へリダイレクトする', async () => {
      const r = output(getCurrentUserNg);
      await waitFor(() => client.isFetching());

      await waitFor(() =>
        expect(r.getByTestId("fakeLogin")).toBeInTheDocument(),
      );
    });
  });

  describe("ログインユーザーの取得で401以外のAPIエラーが起きた場合", () => {
    test("クラッシュページを表示する", async () => {
      const r = output(getCurrentUserFaitalNg);
      await waitFor(() => client.isFetching());

      await waitFor(() =>
        expect(r.getByTestId("crashPage")).toBeInTheDocument(),
      );
    });
  });
});
