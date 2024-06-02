import { render } from "@testing-library/react";

import { ErrorMessage } from "./ErrorMessage";

describe("ErrorToast", () => {
  const output = ({
    message,
    dataTestId,
  }: {
    message: string;
    dataTestId?: string;
  }) => render(<ErrorMessage message={message} dataTestId={dataTestId} />);

  describe("dataTestIdプロパティ", () => {
    describe("省略した場合", () => {
      test("デフォルトのdataTestIdが付与される", () => {
        const r = output({
          message: "test",
        });

        expect(r.getByTestId("errorMessage")).toBeInTheDocument();
      });
    });

    describe("付与した場合", () => {
      test("dataTestIdが適用される", () => {
        const r = output({
          message: "test",
          dataTestId: "custom",
        });

        expect(r.getByTestId("custom")).toBeInTheDocument();
      });
    });
  });
});
