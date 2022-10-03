export const getDefaultNumber = (
  v: number | string,
  defaultNumber = 0.0
): number => {
  const n = Number(v);
  return Number.isNaN(n) ? defaultNumber : n;
};
