import { useEffect } from 'react';

export const useTitle = (title: string) => {
  useEffect(() => {
    const initialTitle = document.title;

    document.title = title;

    return () => {
      document.title = initialTitle;
    };
  }, [title]);
};
