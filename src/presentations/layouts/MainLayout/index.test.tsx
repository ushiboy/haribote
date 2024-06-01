import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import { MainLayout } from ".";

import { i18n } from "@/i18n/config";

describe("MainLayout", () => {
  const output = () =>
    render(<MainLayout />, {
      wrapper: ({ children }) => <MemoryRouter>{children}</MemoryRouter>,
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
