import { act, renderHook } from "@testing-library/react";

import { useArticles } from "./useArticles";

import { article1 } from "@/__fixtures__/Articles";
import { Article } from "@/domains/models";

describe("useArticles", () => {
  const hooks = (articles: Article[]) =>
    renderHook(() => useArticles(articles));

  describe("初期状態", () => {
    test("編集モードはオフ", () => {
      const r = hooks([]);
      expect(r.result.current.isEditing).toBe(false);
    });

    test("選択行はなし", () => {
      const r = hooks([]);
      expect(r.result.current.selected.size).toBe(0);
    });

    test("ページインデックスは0", () => {
      const r = hooks([]);
      expect(r.result.current.page).toBe(0);
    });

    test("ページごとの件数は10", () => {
      const r = hooks([]);
      expect(r.result.current.rowsPerPage).toBe(10);
    });
  });

  describe("changePage", () => {
    test("指定したページインデックスに変更する", () => {
      const r = hooks([]);
      act(() => r.result.current.changePage(1));

      expect(r.result.current.page).toBe(1);
    });
  });

  describe("changeRowsPerPage", () => {
    test("指定したページごとの件数に変更する", () => {
      const r = hooks([]);
      act(() => r.result.current.changeRowsPerPage(100));

      expect(r.result.current.rowsPerPage).toBe(100);
    });
  });

  describe("resetPage", () => {
    test("ページインデックスを0に戻す", () => {
      const r = hooks([]);
      act(() => r.result.current.changePage(1));
      expect(r.result.current.page).toBe(1);

      act(() => r.result.current.resetPage());
      expect(r.result.current.page).toBe(0);
    });
  });

  describe("toggleSelect", () => {
    test("指定した記事を選択状態・非選択状態にする", () => {
      const r = hooks([article1]);
      expect(r.result.current.selected.has(article1)).toBe(false);

      act(() => r.result.current.toggleSelect(article1));
      expect(r.result.current.selected.has(article1)).toBe(true);

      act(() => r.result.current.toggleSelect(article1));
      expect(r.result.current.selected.has(article1)).toBe(false);
    });
  });

  describe("clearSelect", () => {
    test("記事の選択状態をクリアする", () => {
      const r = hooks([article1]);

      act(() => r.result.current.toggleSelect(article1));
      expect(r.result.current.selected.size).toBe(1);

      act(() => r.result.current.clearSelect());
      expect(r.result.current.selected.size).toBe(0);
    });
  });

  describe("startEdit", () => {
    test("編集モードをオンにする", () => {
      const r = hooks([]);
      act(() => r.result.current.startEdit());
      expect(r.result.current.isEditing).toBe(true);
    });
  });

  describe("endEdit", () => {
    test("編集モードをオフにする", () => {
      const r = hooks([]);
      act(() => r.result.current.startEdit());
      expect(r.result.current.isEditing).toBe(true);

      act(() => r.result.current.endEdit());
      expect(r.result.current.isEditing).toBe(false);
    });
  });
});
