import { createContext } from "react";

import { RepositoryComposition } from "@/repositories";

type ContextState = RepositoryComposition;

export const context = createContext(Object.create(null) as ContextState);
