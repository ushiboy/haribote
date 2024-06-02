/* eslint-disable @typescript-eslint/ban-ts-comment */
import { QueryClient, QueryClientProvider } from "react-query";

import { RepositoryCompositionContextProvider } from "@/presentations/contexts";
import { RepositoryComposition, repositoryComposition } from "@/repositories";

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

type OverrideRepositories = DeepPartial<RepositoryComposition>;

type WebApiWrapProps = {
  client: QueryClient;
  children: React.ReactNode;
  overrideRepositories?: OverrideRepositories;
};

export const WebApiWrap: React.FC<WebApiWrapProps> = ({
  client,
  children,
  overrideRepositories,
}) => {
  const override = overrideRepositories || {};
  const merged: RepositoryComposition = Object.keys(override).reduce(
    (ret, key) => {
      // @ts-ignore
      if (key in override) {
        // @ts-ignore
        ret[key] = {
          // @ts-ignore
          ...ret[key],
          // @ts-ignore
          ...override[key],
        };
      }
      return ret;
    },
    { ...repositoryComposition },
  );
  return (
    <QueryClientProvider client={client}>
      <RepositoryCompositionContextProvider repositoryComposition={merged}>
        {children}
      </RepositoryCompositionContextProvider>
    </QueryClientProvider>
  );
};
