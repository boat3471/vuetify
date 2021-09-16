"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log = log;
exports.info = info;
exports.warn = warn;
exports.error = error;
exports.ignore = ignore;
exports.default = void 0;

function log() {
  var _window$console;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (_window$console = window.console).log.apply(_window$console, ['[ZUI]'].concat(args));
}

function info() {
  var _window$console2;

  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return (_window$console2 = window.console).info.apply(_window$console2, ['[ZUI]'].concat(args));
}

function warn() {
  var _window$console3;

  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  return (_window$console3 = window.console).warn.apply(_window$console3, ['[ZUI]'].concat(args));
}

function error() {
  var _window$console4;

  for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }

  return (_window$console4 = window.console).error.apply(_window$console4, ['[ZUI]'].concat(args));
}

function ignore() {// ignore
}

var _default = {
  info: info,
  log: log,
  warn: warn,
  error: error,
  ignore: ignore
};
exports.default = _default;
//# sourceMappingURL=debug.js.map