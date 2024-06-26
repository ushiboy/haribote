import { useContext } from "react";

import { context } from "./context";

export const useUserSession = () => useContext(context);
