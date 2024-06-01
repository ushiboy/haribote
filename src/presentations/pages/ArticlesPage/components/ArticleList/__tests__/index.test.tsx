/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { fireEvent, render, RenderResult } from "@testing-library/react";
import { vi } from "vitest";

import { ArticleList } from "..";

import { article1, createItems } from "@/__fixtures__/Articles";
import { Article } from "@/domains/models";
import { i18n } from "@/i18n/config";

describe("ArticleList", () => {
  const onReloadClick = vi.fn();

  const out = (articles: Article[]) =>
    render(
      <ArticleList
        articles={articles}
        isLoading={false}
        onReloadClick={onReloadClick}
      />
    );

  beforeEach(() => {
    i18n.changeLanguage("ja");
  });

  describe("表示項目", () => {
    test("列名が表示される", () => {
      const v = out([article1]);
      expect(v.getByText("ID")).toBeInTheDocument();
      expect(v.getByText("タイトル")).toBeInTheDocument();
    });

    test("データが表示される", () => {
      const v = out([article1]);
      expect(v.getByText(`${article1.id}`)).toBeInTheDocument();
      expect(v.getByText(`${article1.title}`)).toBeInTheDocument();
    });
  });

  describe("ページネーション", () => {
    let v: RenderResult;
    describe("ページ移動", () => {
      describe("表示件数が1ページに収まる場合", () => {
        const items = createItems(10);
        beforeEach(() => (v = out(items)));

        test("総数と現在の範囲が表示される", () => {
          expect(v.getByText(`1–10 of ${items.length}`)).toBeInTheDocument();
        });

        test("データがリストに表示される", () => {
          items.forEach((item) => {
            expect(v.getByText(item.title)).toBeInTheDocument();
          });
        });

        test("前ページボタンは無効になる", () => {
          expect(v.container.querySelector('[name="back"]')).toBeDisabled();
        });

        test("次ページボタンは無効になる", () => {
          expect(v.container.querySelector('[name="next"]')).toBeDisabled();
        });
      });

      describe("表示件数が2ページ以上になる場合", () => {
        const items = createItems(21);
        beforeEach(() => (v = out(items)));

        describe("先頭ページ", () => {
          test("総数と現在の範囲が表示される", () => {
            expect(v.getByText(`1–10 of ${items.length}`)).toBeInTheDocument();
          });

          test("データがリストに表示される", () => {
            items.slice(0, 10).forEach((item) => {
              expect(v.getByText(item.title)).toBeInTheDocument();
            });
          });

          test("前ページボタンは無効になる", () => {
            expect(v.container.querySelector('[name="back"]')).toBeDisabled();
          });

          test("次ページボタンは有効になる", () => {
            expect(v.container.querySelector('[name="next"]')).toBeEnabled();
          });
        });

        describe("途中ページ", () => {
          beforeEach(() => {
            fireEvent.click(v.container.querySelector('[name="next"]')!);
          });
          test("総数と現在の範囲が表示される", () => {
            expect(v.getByText(`11–20 of ${items.length}`)).toBeInTheDocument();
          });

          test("データがリストに表示される", () => {
            items.slice(11, 20).forEach((item) => {
              expect(v.getByText(item.title)).toBeInTheDocument();
            });
          });

          test("前ページボタンは有効になる", () => {
            expect(v.container.querySelector('[name="back"]')).toBeEnabled();
          });

          test("次ページボタンは有効になる", () => {
            expect(v.container.querySelector('[name="next"]')).toBeEnabled();
          });
        });

        describe("末尾ページ", () => {
          beforeEach(() => {
            fireEvent.click(v.container.querySelector('[name="next"]')!);
            fireEvent.click(v.container.querySelector('[name="next"]')!);
          });
          test("総数と現在の範囲が表示される", () => {
            expect(v.getByText(`21–21 of ${items.length}`)).toBeInTheDocument();
          });

          test("データがリストに表示される", () => {
            items.slice(21).forEach((item) => {
              expect(v.getByText(item.title)).toBeInTheDocument();
            });
          });

          test("前ページボタンは有効になる", () => {
            expect(v.container.querySelector('[name="back"]')).toBeEnabled();
          });

          test("次ページボタンは無効になる", () => {
            expect(v.container.querySelector('[name="next"]')).toBeDisabled();
          });
        });
      });
    });
  });
});
