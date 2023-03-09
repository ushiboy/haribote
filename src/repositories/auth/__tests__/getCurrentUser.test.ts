import { jest } from "@jest/globals";
import axios from "axios";

import { getCurrentUser } from "../getCurrentUser";

import { currentUser } from "@/__fixtures__/CurrentUser";
import { CURRENT_USER_API } from "@/constants/endpoints";

type Mocked = jest.Mocked<typeof axios.get>;
jest.mock("axios");

describe("getCurrentUser", () => {
  afterEach(() => jest.clearAllMocks());

  describe("正常系", () => {
    beforeEach(() => {
      (axios.get as Mocked).mockResolvedValue({
        status: 200,
        data: {
          ...currentUser,
        },
      });
    });

    test(`${CURRENT_USER_API}にGETリクエストが送信される`, async () => {
      const r = await getCurrentUser();
      expect(axios.get).toHaveBeenCalledWith(CURRENT_USER_API);
      expect(r).toEqual(currentUser);
    });
  });
});
