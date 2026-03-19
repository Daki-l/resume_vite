/**
 * 简单的模板引擎：
 * template('hello, {name}', { name: 'AntV' }); // hello, AntV
 */
export function template(source: string, data?: Record<string, string>): string {
  if (!data) return source;
  return Object.entries(data).reduce(
    (r, [k, v]) => r.replace(new RegExp(`{\\s*${k}\\s*}`, 'g'), v),
    source
  );
}
