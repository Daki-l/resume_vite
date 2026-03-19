/** 获取 URL search 参数对象 */
export const getSearchObj = (): Record<string, string> => {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const result: Record<string, string> = {};
  params.forEach((v, k) => { result[k] = v; });
  return result;
};