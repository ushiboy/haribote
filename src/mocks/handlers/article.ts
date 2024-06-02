import { createItems } from "@/__fixtures__/Articles";
import {
  MockHandler,
  randomFail,
  respondJsonWithSession,
  responseError,
} from "./helper";
import { delay } from "msw";

export const getArticles: MockHandler = async ({ cookies }) => {
  const { SESSION } = cookies;
  if (!SESSION) {
    return responseError.unauthorized();
  }

  if (randomFail(5)) {
    return responseError.internalServerError();
  }

  await delay(1000);
  const articles = createItems(100);
  return respondJsonWithSession({
    body: { articles },
    session: SESSION,
  });
};
