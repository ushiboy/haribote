import { context } from "./context";

import { CurrentUser } from "@/domains/models";

export const UserSessionContextProvider: React.FC<{
  currentUser: CurrentUser;
  refresh: () => void;
  children: React.ReactNode;
}> = ({ currentUser, children, refresh }) => {
  return (
    <context.Provider
      value={{
        currentUser,
        refresh,
      }}
    >
      {children}
    </context.Provider>
  );
};
