import { currentUser, adminUser } from "@/__fixtures__/CurrentUser";
import { CurrentUser } from "@/domains/models";
import { randomFail, MockHandler } from "./helper";

const users = new Map<string, CurrentUser>();
users.set(currentUser.email, currentUser);
users.set(adminUser.email, adminUser);

export const login: MockHandler = async (req, res, ctx) => {
  const { email, password } = await req.json();
  if (randomFail(5)) {
    return res(ctx.status(500));
  }
  if (!users.has(email) || password !== "hoge123!") {
    return res(ctx.status(401));
  }
  return res(
    ctx.delay(1000),
    ctx.status(200),
    ctx.cookie("SESSION", email, {
      httpOnly: true,
      expires: new Date(Date.now() + 30 * 60 * 60 * 1000),
    })
  );
};

export const getCurrentUser: MockHandler = async (req, res, ctx) => {
  const session = req.cookies["SESSION"];
  if (!session) {
    return res(ctx.status(401));
  }
  if (randomFail(5)) {
    return res(ctx.status(500));
  }
  return res(
    ctx.delay(1000),
    ctx.status(200),
    ctx.json(users.get(session)),
    ctx.cookie("SESSION", session, {
      httpOnly: true,
      expires: new Date(Date.now() + 30 * 60 * 60 * 1000),
    })
  );
};

export const logout: MockHandler = async (req, res, ctx) => {
  const session = req.cookies["SESSION"];
  if (randomFail(5)) {
    return res(ctx.status(500));
  }
  return res(
    ctx.status(200),
    ctx.cookie("SESSION", session, {
      httpOnly: true,
      expires: new Date(Date.now() - 86400),
    })
  );
};
