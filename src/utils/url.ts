export function getBaseUrl() {
  return import.meta.env.BASE_URL.replace(/\/$/, '');
}

export function createUrl(path: string) {
  const basePath = getBaseUrl();
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
