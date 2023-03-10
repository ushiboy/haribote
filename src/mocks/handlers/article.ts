import { createItems } from "@/__fixtures__/Articles";
import { sleep, randomFail, MockHandler } from "./helper";

export const getArticles: MockHandler = async (req, res, ctx) => {
  const session = req.cookies["SESSION"];
  if (!session) {
    return res(ctx.status(401));
  }
  await sleep(1000);
  if (randomFail(5)) {
    return res(ctx.status(500));
  }
  const articles = createItems(100);
  return res(
    ctx.status(200),
    ctx.json({
      articles,
    })
  );
};
