import { useMemo } from "react";

export const usePagination = (totalPages: number) => {
  const pages: number[] = [];
  const pagesArr = useMemo(() => {
    for (let i = 0; i < totalPages; i++) {
      pages.push(i + 1);
    }
    return pages;
  }, [totalPages]);
  return pagesArr;
};
