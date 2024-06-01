import { render } from "@testing-library/react";

import { AdminPage } from ".";

import { i18n } from "@/i18n/config";

describe("AdminPage", () => {
  const output = () => render(<AdminPage />);

  beforeEach(() => i18n.changeLanguage("ja"));

  test("管理ページが表示される", () => {
    const r = output();

    expect(r.getByTestId("adminPage")).toBeInTheDocument();

    // Admin
    expect(r.getByText("管理")).toBeInTheDocument();
  });
});
