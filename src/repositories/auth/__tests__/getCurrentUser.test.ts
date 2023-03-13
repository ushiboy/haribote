import { jest } from "@jest/globals";
import { AxiosResponse } from "axios";

import { getCurrentUser } from "../getCurrentUser";

import { currentUser } from "@/__fixtures__/CurrentUser";
import { CURRENT_USER_API } from "@/constants/endpoints";
import { AuthApi } from "@/drivers/api";

describe("getCurrentUser", () => {
  afterEach(() => jest.clearAllMocks());

  describe("正常系", () => {
    let spy: jest.SpiedFunction<typeof AuthApi.prototype.currentUserGet>;

    beforeEach(() => {
      spy = jest.spyOn(AuthApi.prototype, "currentUserGet").mockResolvedValue({
        status: 200,
        data: {
          ...currentUser,
        },
      } as AxiosResponse);
    });

    test(`${CURRENT_USER_API}にGETリクエストが送信される`, async () => {
      const r = await getCurrentUser();
      expect(spy).toHaveBeenCalled();
      expect(r).toEqual(currentUser);
    });
  });
});
