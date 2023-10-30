import { FC, lazy, Suspense, useMemo } from 'react';
import { Title } from './Title.tsx';
import { Loader } from './ui/Loader.tsx';
import styled from 'styled-components';

const tabs = {
  dummyTable: lazy(() => import('./dummy/dummy-table.tsx')),
  dummyChart: lazy(() => import('./dummy/dummy-chart.tsx')),
  dummyList: lazy(() => import('./dummy/dummy-list.tsx')),
};

interface TabContentProps {
  id: string;
  title: string;
}

export const TabContent: FC<TabContentProps> = ({ title, id }) => {
  const Content = useMemo(() => tabs[id as keyof typeof tabs], [id]);

  return (
    <>
      <Title title={title} />
      <Suspense
        fallback={
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        }
      >
        <Content />
      </Suspense>
    </>
  );
};

const LoaderWrapper = styled.div`
  width: 100vw;
  height: 80vh;

  display: grid;
  place-items: center;
`;
