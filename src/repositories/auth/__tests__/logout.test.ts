import { jest } from "@jest/globals";
import axios from "axios";

import { logout } from "../logout";

import { LOGOUT_API } from "@/constants/endpoints";

type Mocked = jest.Mocked<typeof axios.delete>;
jest.mock("axios");

describe("logout", () => {
  afterEach(() => jest.clearAllMocks());

  describe("正常系", () => {
    beforeEach(() => {
      (axios.delete as Mocked).mockResolvedValue({
        status: 200,
      });
    });

    test(`${LOGOUT_API}にDELETEリクエストが送信される`, async () => {
      const r = await logout();
      expect(axios.delete).toHaveBeenCalledWith(LOGOUT_API);
      expect(r).toBe(true);
    });
  });
});
