import { render } from "@testing-library/react";

import { AboutPage } from ".";

import { i18n } from "@/i18n/config";

describe("AboutPage", () => {
  const output = () => render(<AboutPage />);

  beforeEach(() => i18n.changeLanguage("ja"));

  test("情報ページが表示される", () => {
    const r = output();

    expect(r.getByTestId("aboutPage")).toBeInTheDocument();

    // About
    expect(r.getByText("情報")).toBeInTheDocument();
    // AboutThis
    expect(r.getByText("これはハリボテです。")).toBeInTheDocument();
  });
});
