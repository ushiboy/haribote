import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { RegisterPage } from ".";

import { i18n } from "@/i18n/config";

describe("RegisterPage", () => {
  const output = () => render(<RegisterPage />);

  beforeEach(() => i18n.changeLanguage("ja"));

  test("登録ページが表示される", () => {
    const r = output();

    expect(r.getByTestId("registerPage")).toBeInTheDocument();
  });

  test("Registerボタンでsubmitできる", async () => {
    const r = output();
    const submitButton = r.getByTestId("submitButton");

    const user = userEvent.setup();
    await user.click(submitButton);
  });
});
