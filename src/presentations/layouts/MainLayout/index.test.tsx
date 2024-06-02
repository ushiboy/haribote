import { render } from "@testing-library/react";
import { QueryClient } from "react-query";
import { MemoryRouter } from "react-router";

import { MainLayout } from ".";

import { WebApiWrap } from "@/__fixtures__/testHelper";
import { i18n } from "@/i18n/config";

describe("MainLayout", () => {
  const client = new QueryClient();
  const output = () =>
    render(<MainLayout />, {
      wrapper: ({ children }) => (
        <WebApiWrap client={client}>
          <MemoryRouter>{children}</MemoryRouter>
        </WebApiWrap>
      ),
    });

  beforeEach(() => i18n.changeLanguage("ja"));

  test("メインレイアウトが表示される", () => {
    const r = output();

    expect(r.getByTestId("mainLayout")).toBeInTheDocument();
    expect(r.getByTestId("mainLayoutMain")).toBeInTheDocument();
    expect(r.getByTestId("mainLayoutHeader")).toBeInTheDocument();
    expect(r.getByTestId("mainLayoutSideBar")).toBeInTheDocument();
  });
});
