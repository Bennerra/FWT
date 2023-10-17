export const getStorageValue = (key: string, defaultValue: string) => {
  const saved = localStorage.getItem(key);
  const initial = saved ? JSON.parse(saved) : null;

  return initial || defaultValue;
};
