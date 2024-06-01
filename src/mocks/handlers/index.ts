import { http } from "msw";

import {
  ARTICLES_API,
  CURRENT_USER_API,
  LOGIN_API,
  LOGOUT_API,
} from "@/constants/endpoints";

import * as auth from "./auth";
import * as article from "./article";

export const handlers = [
  http.post(LOGIN_API, auth.login),
  http.get(CURRENT_USER_API, auth.getCurrentUser),
  http.delete(LOGOUT_API, auth.logout),
  http.get(ARTICLES_API, article.getArticles),
];
