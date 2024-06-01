import axios from "axios";
import { vi } from "vitest";

import { login } from "../login";

vi.mock("axios");
const mocked = vi.mocked(axios.post);

describe("login", () => {
  afterEach(() => vi.clearAllMocks());

  describe("正常系", () => {
    beforeEach(() => {
      mocked.mockResolvedValue({
        status: 200,
      });
    });

    test(`ログインAPIが実行される`, async () => {
      const email = "test@example.com";
      const password = "xxxxx";

      const r = await login({
        email,
        password,
      });
      expect(r).toBe(true);
    });
  });
});
