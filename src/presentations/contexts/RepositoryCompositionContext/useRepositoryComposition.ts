import { useContext } from "react";

import { context } from "./context";

export const useRepositoryComposition = () => useContext(context);
