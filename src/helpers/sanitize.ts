const HTTP_PROTOCOLS = new Set(['http:', 'https:']);
const URL_PROTOCOL_RE = /^[a-z][a-z\d+\-.]*:/i;
const HEX_COLOR_RE = /^#(?:[\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})$/i;

export const normalizeHttpUrl = (value?: string) => {
  const rawUrl = `${value || ''}`.trim();
  if (!rawUrl) return undefined;

  const url = URL_PROTOCOL_RE.test(rawUrl) ? rawUrl : `https://${rawUrl}`;

  try {
    const parsedUrl = new URL(url);
    if (HTTP_PROTOCOLS.has(parsedUrl.protocol) && parsedUrl.hostname) {
      return parsedUrl.href;
    }
  } catch (_) {}

  return undefined;
};

export const openExternalUrl = (value?: string) => {
  const safeUrl = normalizeHttpUrl(value);
  if (!safeUrl) return;

  window.open(safeUrl, '_blank', 'noopener,noreferrer');
};

export const normalizeCssColor = (value: unknown, fallback: string) => {
  if (typeof value !== 'string') return fallback;

  const color = value.trim();
  return HEX_COLOR_RE.test(color) ? color : fallback;
};

export const normalizeAssetUrl = (value?: string) => {
  const rawUrl = `${value || ''}`.trim();
  if (!rawUrl) return undefined;
  if (rawUrl.startsWith('/') || rawUrl.startsWith('./') || rawUrl.startsWith('../')) return rawUrl;
  if (rawUrl.startsWith('//')) return rawUrl;
  if (!URL_PROTOCOL_RE.test(rawUrl)) return rawUrl;

  try {
    const parsedUrl = new URL(rawUrl);
    if (HTTP_PROTOCOLS.has(parsedUrl.protocol) && parsedUrl.hostname) {
      return parsedUrl.href;
    }
  } catch (_) {}

  return undefined;
};
