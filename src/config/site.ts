export const siteConfig = {
  name: 'Istrail Lab',
  // Get base URL from environment or default to '/'
  baseUrl: import.meta.env.BASE_URL || '/',
  // Get site URL from environment or default to GitHub Pages URL
  siteUrl: import.meta.env.SITE || 'https://istrail-laboratory.github.io',
};

// Helper function to ensure consistent base URL formatting
export function normalizeBaseUrl(base: string): string {
  // Ensure base starts with '/' and ends with '/'
  let normalized = base.startsWith('/') ? base : `/${base}`;
  normalized = normalized.endsWith('/') ? normalized : `${normalized}/`;
  return normalized;
}

// Helper function to create absolute URLs
export function createUrl(path: string): string {
  const base = normalizeBaseUrl(siteConfig.baseUrl);
  // Remove leading slash from path if it exists
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}

// Helper function to create absolute URLs including domain
export function createFullUrl(path: string): string {
  const url = new URL(createUrl(path), siteConfig.siteUrl);
  return url.toString();
}
