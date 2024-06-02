import { context } from "./context";

import { RepositoryComposition } from "@/repositories";

export const RepositoryCompositionContextProvider: React.FC<{
  repositoryComposition: RepositoryComposition;
  children: React.ReactNode;
}> = ({ repositoryComposition, children }) => {
  return (
    <context.Provider value={repositoryComposition}>
      {children}
    </context.Provider>
  );
};
