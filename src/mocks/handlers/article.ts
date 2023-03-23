import { createItems } from "@/__fixtures__/Articles";
import { randomFail, MockHandler } from "./helper";

export const getArticles: MockHandler = async (req, res, ctx) => {
  const session = req.cookies["SESSION"];
  if (!session) {
    return res(ctx.status(401));
  }
  if (randomFail(5)) {
    return res(ctx.status(500));
  }
  const articles = createItems(100);
  return res(
    ctx.delay(1000),
    ctx.status(200),
    ctx.json({
      articles,
    }),
    ctx.cookie("SESSION", session, {
      httpOnly: true,
      expires: new Date(Date.now() + 30 * 60 * 60 * 1000),
    })
  );
};
