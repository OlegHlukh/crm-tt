import { createContext } from 'react';
import { Router } from '../types/router.ts';

interface AppRouteContext {
  routes: Router[];
  error: string;
  isLoading: boolean;
}

export const AppRouteContext = createContext<AppRouteContext>(
  {} as AppRouteContext,
);
