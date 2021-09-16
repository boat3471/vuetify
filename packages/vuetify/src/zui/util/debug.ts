export function log (...args: any[]) {
  return window.console.log('[ZUI]', ...args)
}

export function info (...args: any[]) {
  return window.console.info('[ZUI]', ...args)
}

export function warn (...args: any[]) {
  return window.console.warn('[ZUI]', ...args)
}

export function error (...args: any[]) {
  return window.console.error('[ZUI]', ...args)
}

export function ignore (...args: any[]) {
  // ignore
}

export default {
  info,
  log,
  warn,
  error,
  ignore,
}
