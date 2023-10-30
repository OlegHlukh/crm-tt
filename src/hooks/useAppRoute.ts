import { useContext } from 'react';
import { AppRouteContext } from '../context/app-route-context.ts';

export const useAppRoute = () => {
  return useContext(AppRouteContext);
};
