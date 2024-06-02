import { render } from "@testing-library/react";

import { CrashPage } from ".";

import { i18n } from "@/i18n/config";

describe("CrashPage", () => {
  const output = () => render(<CrashPage />);

  beforeEach(() => i18n.changeLanguage("ja"));

  test("クラッシュページが表示される", () => {
    const r = output();

    expect(r.getByTestId("crashPage")).toBeInTheDocument();

    // CrashError
    expect(
      r.getByText(
        "エラーが発生しました。しばらくしてからもう一度お試しください。",
      ),
    ).toBeInTheDocument();
  });
});
