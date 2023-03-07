import { rest } from "msw";

import {
  ARTICLES_API,
  CURRENT_USER_API,
  LOGIN_API,
  LOGOUT_API,
} from "@/constants/endpoints";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const randomFail = (rate: number): boolean =>
  Math.floor(Math.random() * rate + 1) === 1;

export const handlers = [
  rest.post<Record<string, any>>(LOGIN_API, async (req, res, ctx) => {
    const { email, password } = await req.json();
    await sleep(1000);
    if (randomFail(5)) {
      return res(ctx.status(500));
    }
    if (email !== "test@example.com" || password !== "password") {
      return res(ctx.status(401));
    }
    return res(
      ctx.status(200),
      ctx.cookie("SESSION", "xxxx", {
        httpOnly: true,
      })
    );
  }),
  rest.get(CURRENT_USER_API, async (req, res, ctx) => {
    const session = req.cookies["SESSION"];
    if (!session) {
      return res(ctx.status(401));
    }
    await sleep(1000);
    return res(
      ctx.status(200),
      ctx.json({
        email: "test@exampole.com",
        fullName: "Test User",
      })
    );
  }),
  rest.delete(LOGOUT_API, async (req, res, ctx) => {
    if (randomFail(5)) {
      return res(ctx.status(500));
    }
    return res(
      ctx.status(200),
      ctx.cookie("SESSION", "xxxx", {
        httpOnly: true,
        expires: new Date(Date.now() - 86400),
      })
    );
  }),
  rest.get(ARTICLES_API, async (req, res, ctx) => {
    const session = req.cookies["SESSION"];
    if (!session) {
      return res(ctx.status(401));
    }
    await sleep(1000);
    const articles = Array.from(new Array(100)).map((_, i) => ({
      id: i + 1,
      title: `title${i + 1}`,
      createdAt: new Date(Date.now() - i * 86400000),
      modifiedAt: new Date(Date.now() - i * 86400000),
    }));
    return res(
      ctx.status(200),
      ctx.json({
        articles,
      })
    );
  }),
];
