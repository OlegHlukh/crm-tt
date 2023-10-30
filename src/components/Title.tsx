import { FC } from 'react';
import { useTitle } from '../hooks/useTitle.ts';

interface TitleProps {
  title: string;
}

export const Title: FC<TitleProps> = ({ title }) => {
  useTitle(title);

  return null;
};
