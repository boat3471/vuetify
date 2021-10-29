"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ZMessageContainer = require("./ZMessageContainer");

Object.keys(_ZMessageContainer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ZMessageContainer[key];
    }
  });
});

var _ZMessageSingle = require("./ZMessageSingle");

Object.keys(_ZMessageSingle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ZMessageSingle[key];
    }
  });
});
//# sourceMappingURL=index.js.map