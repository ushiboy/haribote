import { render } from "@testing-library/react";

import { ErrorToast } from "./ErrorToast";

describe("ErrorToast", () => {
  const output = ({
    show,
    message,
    dataTestId,
  }: {
    show: boolean;
    message: string;
    dataTestId?: string;
  }) =>
    render(
      <ErrorToast show={show} message={message} dataTestId={dataTestId} />,
    );

  describe("dataTestIdプロパティ", () => {
    describe("省略した場合", () => {
      test("デフォルトのdataTestIdが付与される", () => {
        const r = output({
          show: true,
          message: "test",
        });

        expect(r.getByTestId("errorToast")).toBeInTheDocument();
      });
    });

    describe("付与した場合", () => {
      test("dataTestIdが適用される", () => {
        const r = output({
          show: true,
          message: "test",
          dataTestId: "custom",
        });

        expect(r.getByTestId("custom")).toBeInTheDocument();
      });
    });
  });
});
