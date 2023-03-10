import { rest } from "msw";

import {
  ARTICLES_API,
  CURRENT_USER_API,
  LOGIN_API,
  LOGOUT_API,
} from "@/constants/endpoints";

import * as auth from "./auth";
import * as article from "./article";

export const handlers = [
  rest.post(LOGIN_API, auth.login),
  rest.get(CURRENT_USER_API, auth.getCurrentUser),
  rest.delete(LOGOUT_API, auth.logout),
  rest.get(ARTICLES_API, article.getArticles),
];
