"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ZMessage = require("./ZMessage");

Object.keys(_ZMessage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ZMessage[key];
    }
  });
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
//# sourceMappingURL=index.js.map