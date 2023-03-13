import { ArticleApi, AuthApi, Configuration } from "./api";

import "@/drivers/axios";

export const config = new Configuration({
  basePath: "/haribote/api",
});

export const authApi = new AuthApi(config);
export const articleApi = new ArticleApi(config);
