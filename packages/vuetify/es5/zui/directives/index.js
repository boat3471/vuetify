"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dragMove = require("./drag-move");

Object.keys(_dragMove).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dragMove[key];
    }
  });
});
//# sourceMappingURL=index.js.map