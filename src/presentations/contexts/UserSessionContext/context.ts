import { createContext } from "react";

import { CurrentUser } from "@/domains/models";

type ContextState = {
  currentUser: CurrentUser;
  refresh: () => void;
};

export const context = createContext(Object.create(null) as ContextState);
