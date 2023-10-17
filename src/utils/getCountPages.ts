export const getCountPages = (totalCount: number, limit: number): number =>
  Math.ceil(totalCount / limit);
