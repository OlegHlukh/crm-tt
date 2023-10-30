import { Navigate, Route, Routes } from 'react-router-dom';
import { FC, useMemo } from 'react';
import { TabContent } from './TabContent.tsx';
import { useAppRoute } from '../hooks/useAppRoute.ts';
import { Layout } from './layout/Layout.tsx';
import { Loader } from './ui/Loader.tsx';
import styled from 'styled-components';

export const AppRoutes: FC = () => {
  const { routes, isLoading } = useAppRoute();

  const defaultRouter = useMemo(() => {
    if (!routes.length) {
      return;
    }

    return routes.find((el) => el.order === 0);
  }, [routes]);
  return (
    <>
      {isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <Routes>
          <Route path={'/'} element={<Layout />}>
            {routes.map((router) => (
              <Route
                key={router.path}
                path={router.path}
                element={<TabContent id={router.id} title={router.title} />}
              />
            ))}
            <Route
              index
              element={<Navigate to={defaultRouter?.path || '/'} />}
            />
          </Route>
        </Routes>
      )}
    </>
  );
};

const LoaderWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  place-items: center;
`;
