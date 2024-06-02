import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SelectSection } from ".";

describe("SelectSection", () => {
  const output = () => render(<SelectSection />);

  test("カテゴリを選択できる", async () => {
    const r = output();
    const user = userEvent.setup();

    await user.click(
      r.getByTestId("selectCategory").querySelector("[role=button]")!,
    );

    await waitFor(() =>
      expect(r.getByTestId("menuItem-Category1")).toBeInTheDocument(),
    );
    await user.click(r.getByTestId("menuItem-Category1"));
  });
});
