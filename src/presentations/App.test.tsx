import { render } from "@testing-library/react";

import { App } from "./App";

import { i18n } from "@/i18n/config";

describe("App", () => {
  const output = () => render(<App />);

  beforeEach(() => i18n.changeLanguage("ja"));

  test("デフォルトでログインページが表示される", () => {
    const r = output();
    expect(r.getByTestId("loginPage")).toBeInTheDocument();
  });
});
