import * as article from "./article";
import * as auth from "./auth";

export const repositoryComposition = {
  article,
  auth,
} as const;

export type RepositoryComposition = typeof repositoryComposition;
