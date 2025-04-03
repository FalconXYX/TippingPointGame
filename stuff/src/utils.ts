export const getImageUrl = (path: string): string => {
  return new URL(`./assets/${path}`, import.meta.url).href;
};
export const getJSONUrl = (path: string): string => {
  return new URL(`./assets/${path}`, import.meta.url).href;
};
