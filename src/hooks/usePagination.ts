import { useMemo } from "react";

export const usePagination = (totalPages: number, currentPage: number) => {
  const pagesArr = useMemo(() => {
    const pages: number[] = [];
    if (totalPages > 3) {
      if (currentPage > 2) {
        if (currentPage === totalPages) {
          for (let i = currentPage - 2; i <= currentPage - 2; i += 1) {
            pages.push(i);
            if (i === totalPages) break;
          }
        }
        for (let i = currentPage - 1; i <= currentPage + 1; i += 1) {
          pages.push(i);
          if (i === totalPages) break;
        }
      } else {
        for (let i = 1; i <= 3; i += 1) {
          pages.push(i);
          if (i === totalPages) break;
        }
      }
    } else {
      for (let i = 0; i < totalPages; i += 1) {
        pages.push(i + 1);
      }
    }
    return pages;
  }, [totalPages, currentPage]);
  return pagesArr;
};
