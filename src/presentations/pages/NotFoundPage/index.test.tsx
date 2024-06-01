import { render } from "@testing-library/react";

import { NotFoundPage } from ".";

describe("NotFoundPage", () => {
  const output = () => render(<NotFoundPage />);

  test("該当なしページが表示される", () => {
    const r = output();

    expect(r.getByTestId("notFoundPage")).toBeInTheDocument();
  });
});
