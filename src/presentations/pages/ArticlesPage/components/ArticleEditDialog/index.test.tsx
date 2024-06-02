import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

import { ArticleEditDialog } from ".";

import { article1 } from "@/__fixtures__/Articles";
import { Article } from "@/domains/models";
import { i18n } from "@/i18n/config";

describe("ArticleEditDialog", () => {
  const onClose = vi.fn();

  const output = (article: Article) =>
    render(<ArticleEditDialog article={article} onClose={onClose} />);

  beforeEach(() => i18n.changeLanguage("ja"));

  describe("初期表示", () => {
    test("編集対象の記事タイトルが初期値となる", () => {
      const r = output(article1);

      expect(r.getByTestId("articleTitleInput")).toHaveValue(article1.title);
    });
  });

  describe("記事タイトル", () => {
    test("記事タイトルを編集できる", async () => {
      const r = output(article1);
      const textField = r.getByTestId("articleTitleInput");
      expect(textField).toHaveValue(article1.title);

      const user = userEvent.setup();
      await user.click(textField);
      await user.clear(textField);
      await user.type(textField, "test");

      expect(textField).toHaveValue("test");
    });
  });

  describe("onClose", () => {
    test("保存ボタンのクリックで実行される", async () => {
      expect(onClose).not.toHaveBeenCalled();

      const r = output(article1);
      const user = userEvent.setup();

      await user.click(r.getByTestId("saveButton"));

      expect(onClose).toHaveBeenCalled();
    });

    test("キャンセルボタンのクリックで実行される", async () => {
      expect(onClose).not.toHaveBeenCalled();

      const r = output(article1);
      const user = userEvent.setup();

      await user.click(r.getByTestId("cancelButton"));

      expect(onClose).toHaveBeenCalled();
    });
  });
});
