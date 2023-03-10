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
};
