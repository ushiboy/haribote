import { screen, act, renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter, Route, Routes } from "react-router";

import { useError } from "./useError";

import { WebApiException } from "@/domains/errors";

describe("useError", () => {
  const client = new QueryClient();
  const hooks = () =>
    renderHook(() => useError(), {
      wrapper: ({ children }) => (
        <MemoryRouter initialEntries={["/test"]}>
          <QueryClientProvider client={client}>
            <Routes>
              <Route index element={<div data-testid="fakeLogin" />} />
            </Routes>
            {children}
          </QueryClientProvider>
        </MemoryRouter>
      ),
    });

  describe("WebApiExceptionの場合", () => {
    describe("401ステータスの場合", () => {
      test(`ログインに飛ばす`, async () => {
        const r = hooks();
        const error = new WebApiException(401, "");

        expect(screen.queryByTestId("fakeLogin")).toBeNull();

        act(() => r.result.current.setError(error));

        await waitFor(() =>
          expect(screen.getByTestId("fakeLogin")).toBeInTheDocument(),
        );
      });
    });
  });
});
