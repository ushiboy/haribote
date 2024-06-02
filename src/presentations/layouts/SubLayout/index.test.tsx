import { render } from "@testing-library/react";

import { SubLayout } from ".";

describe("SubLayout", () => {
  const output = () => render(<SubLayout />);

  test("サブレイアウトが表示される", () => {
    const r = output();

    expect(r.getByTestId("subLayout")).toBeInTheDocument();
    expect(r.getByTestId("subLayoutMain")).toBeInTheDocument();
    expect(r.getByTestId("subLayoutHeader")).toBeInTheDocument();
  });
});
