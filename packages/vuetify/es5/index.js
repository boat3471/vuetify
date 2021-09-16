"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _framework = require("./framework");

var _createApp = require("./zui/createApp");

var _createAdmin = require("./zui/createAdmin");

var _createMenus = require("./zui/createMenus");

var _createRouter = require("./zui/createRouter");

var _ZuiCore = require("./zui/ZuiCore");

if (typeof window !== 'undefined') {
  window.Vue && window.Vue.use(_framework.Zui);
}

var _default = {
  Zui: _framework.Zui,
  createApp: _createApp.createApp,
  createAdmin: _createAdmin.createAdmin,
  createMenus: _createMenus.createMenus,
  createRouter: _createRouter.createRouter,
  createAdminRouter: _createRouter.createAdminRouter,

  get $zui() {
    return _ZuiCore.ZuiCoreClass.genInstance();
  },

  get ZuiCore() {
    return _ZuiCore.ZuiCoreClass.genInstance();
  },

  get $message() {
    return _ZuiCore.ZuiCoreClass.genInstance().$message;
  },

  get ZMessage() {
    return _ZuiCore.ZuiCoreClass.genInstance().$message;
  },

  get $modal() {
    return _ZuiCore.ZuiCoreClass.genInstance().$modal;
  },

  get ZModal() {
    return _ZuiCore.ZuiCoreClass.genInstance().$modal;
  },

  get $menu() {
    return _ZuiCore.ZuiCoreClass.genInstance().$menu;
  },

  get ZMenu() {
    return _ZuiCore.ZuiCoreClass.genInstance().$menu;
  },

  get $theme() {
    return _ZuiCore.ZuiCoreClass.genInstance().$theme;
  },

  get ZTheme() {
    return _ZuiCore.ZuiCoreClass.genInstance().$theme;
  },

  get $router() {
    return _ZuiCore.ZuiCoreClass.genInstance().$router;
  },

  get ZRouter() {
    return _ZuiCore.ZuiCoreClass.genInstance().$router;
  }

};
exports.default = _default;
//# sourceMappingURL=index.js.map