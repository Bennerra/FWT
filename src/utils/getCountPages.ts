export const getCountPages = (totalCount: number, limit: number): number => {
  const pages = Math.ceil(totalCount / limit);

  return pages;
};
