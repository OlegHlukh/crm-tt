import data from './data.json';
import { Router } from '../types/router.ts';

export const getRoutes = async (): Promise<Router[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
};
