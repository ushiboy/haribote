import { currentUser } from "@/__fixtures__/CurrentUser";
import { sleep, randomFail, MockHandler } from "./helper";

export const login: MockHandler = async (req, res, ctx) => {
  const { email, password } = await req.json();
  await sleep(1000);
  if (randomFail(5)) {
    return res(ctx.status(500));
  }
  if (email !== "test@example.com" || password !== "hoge123!") {
    return res(ctx.status(401));
  }
  return res(
    ctx.status(200),
    ctx.cookie("SESSION", "xxxx", {
      httpOnly: true,
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
  await sleep(1000);
  return res(ctx.status(200), ctx.json(currentUser));
};

export const logout: MockHandler = async (req, res, ctx) => {
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
};
