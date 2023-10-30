import { FC, ReactNode } from 'react';
import { AppRouteContext } from './app-route-context.ts';
import { useRouters } from '../hooks/useRouters.ts';

interface AppRouteProviderProps {
  children: ReactNode;
}

export const AppRouteProvider: FC<AppRouteProviderProps> = ({ children }) => {
  const appRouterValue = useRouters();

  return (
    <AppRouteContext.Provider value={appRouterValue}>
      {children}
    </AppRouteContext.Provider>
  );
};
