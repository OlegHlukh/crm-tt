import { useEffect, useMemo, useState } from 'react';
import { getRoutes } from '../mock/get-routes.ts';
import { Router } from '../types/router.ts';

export const useRouters = () => {
  const [routes, setRoutes] = useState<Router[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;

    setLoading(true);

    getRoutes()
      .then((routes) => {
        if (!mounted) {
          return;
        }

        setError('');
        setRoutes(routes);
      })
      .catch((error) => {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Api error');
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const sortedRoutes = useMemo(() => {
    if (!routes.length) {
      return [];
    }

    return routes.sort((a, b) => a.order - b.order);
  }, [routes]);

  return {
    routes: sortedRoutes,
    isLoading,
    error,
  };
};
