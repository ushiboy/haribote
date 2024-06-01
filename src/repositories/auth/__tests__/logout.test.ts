import axios from "axios";
import { vi } from "vitest";

import { logout } from "../logout";

vi.mock("axios");
const mocked = vi.mocked(axios.delete);

describe("logout", () => {
  afterEach(() => vi.clearAllMocks());

  describe("正常系", () => {
    beforeEach(() => {
      mocked.mockResolvedValue({
        status: 200,
      });
    });

    test(`ログアウトAPIが実行される`, async () => {
      const r = await logout();
      expect(r).toBe(true);
    });
  });
});
