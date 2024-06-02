import { render, waitFor } from "@testing-library/react";
import { QueryClient } from "react-query";
import { MemoryRouter } from "react-router";

import { ArticlesPage } from ".";

import { article1 } from "@/__fixtures__/Articles";
import { WebApiWrap } from "@/__fixtures__/testHelper";
import { NetworkException } from "@/domains/errors";
import { i18n } from "@/i18n/config";
import { GetArticles } from "@/repositories";

describe("ArticlePage", () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  const getArticlesOk: GetArticles = async () => [article1];

  const getArticlesNg: GetArticles = async () => {
    throw new NetworkException("error");
  };

  const output = (getArticles: GetArticles) =>
    render(<ArticlesPage />, {
      wrapper: ({ children }) => (
        <MemoryRouter>
          <WebApiWrap
            client={client}
            overrideRepositories={{
              article: {
                getArticles,
              },
            }}
          >
            {children}
          </WebApiWrap>
        </MemoryRouter>
      ),
    });

  beforeEach(() => {
    i18n.changeLanguage("ja");
    client.clear();
  });

  describe("記事一覧の取得に成功した場合", () => {
    test("取得した記事一覧データを表示する", async () => {
      const r = output(getArticlesOk);

      await waitFor(() => client.isFetching());

      // 記事タイトルが表示される
      expect(r.getByText(article1.title)).toBeInTheDocument();
    });
  });

  describe("記事一覧の取得に失敗した場合", () => {
    test("エラーを表示する", async () => {
      const r = output(getArticlesNg);

      await waitFor(() => client.isFetching());

      // エラーが表示される
      await waitFor(() =>
        expect(r.getByTestId("articlesErrorToast")).toBeInTheDocument(),
      );
    });
  });
});
