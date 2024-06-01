import { currentUser, adminUser } from "@/__fixtures__/CurrentUser";
import { CurrentUser } from "@/domains/models";
import {
  MockHandler,
  randomFail,
  respondJsonWithSession,
  responseError,
} from "./helper";
import { HttpResponse, delay } from "msw";

const users = new Map<string, CurrentUser>();
users.set(currentUser.email, currentUser);
users.set(adminUser.email, adminUser);

export const login: MockHandler<{ email: string; password: string }> = async ({
  request,
}) => {
  if (randomFail(5)) {
    return responseError.internalServerError();
  }

  const { email, password } = await request.json();
  if (!users.has(email) || password !== "hoge123!") {
    return responseError.unauthorized();
  }

  await delay(1000);
  return respondJsonWithSession({ session: email });
};

export const getCurrentUser: MockHandler = async ({ cookies }) => {
  const { SESSION } = cookies;
  if (!SESSION) {
    return responseError.unauthorized();
  }

  if (randomFail(5)) {
    return responseError.internalServerError();
  }

  await delay(1000);
  return respondJsonWithSession({ body: users.get(SESSION), session: SESSION });
};

export const logout: MockHandler = async () => {
  if (randomFail(5)) {
    return responseError.internalServerError();
  }

  await delay(1000);
  const expired = new Date(Date.now() - 86400000).toUTCString();
  return new HttpResponse(null, {
    status: 200,
    headers: {
      "Set-Cookie": `SESSION=; Expires=${expired}`,
    },
  });
};
