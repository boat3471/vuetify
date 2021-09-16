export function log(...args) {
  return window.console.log('[ZUI]', ...args);
}
export function info(...args) {
  return window.console.info('[ZUI]', ...args);
}
export function warn(...args) {
  return window.console.warn('[ZUI]', ...args);
}
export function error(...args) {
  return window.console.error('[ZUI]', ...args);
}
export function ignore(...args) {// ignore
}
export default {
  info,
  log,
  warn,
  error,
  ignore
};
//# sourceMappingURL=debug.js.map