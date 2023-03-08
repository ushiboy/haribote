import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { ArticleList } from "..";

import { i18n } from "@/i18n/config";

describe("ArticleList", () => {
  const onReloadClick = jest.fn();

  const out = () =>
    render(
      <ArticleList
        articles={[]}
        isLoading={false}
        error={null}
        onReloadClick={onReloadClick}
      />
    );

  beforeEach(() => {
    i18n.changeLanguage("ja");
  });

  describe("表示項目", () => {
    test("項目名:タイトルが表示される", () => {
      const v = out();
      expect(v.getByText("タイトル")).toBeInTheDocument();
    });
  });
});
