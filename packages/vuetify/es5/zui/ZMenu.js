"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZMenu = exports.ZMenuClass = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _ZRouter = require("./ZRouter");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function filterMenusData(list) {
  var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (list && list.length > 0) {
    var menus = [];
    list.forEach(function (item) {
      item.level = level;

      if (item.visible === false) {
        return;
      }

      var parents = parent ? [].concat(_toConsumableArray(parent.parents), [parent]) : [];
      var parentPaths = parent ? [].concat(_toConsumableArray(parent.parentPaths || []), [parent.path || '']) : [];
      var info = {
        path: item.path,
        name: item.name,
        children: item.children,
        redirect: item.redirect,
        alias: item.alias,
        meta: item.meta,
        title: item.title || item.name,
        icon: item.icon,
        roles: item.roles,
        href: item.href,
        target: item.target,
        visible: item.visible,
        query: item.query,
        level: item.level,
        active: false,
        key: (item.path || '').replace(/\//g, '-'),
        parent: parent,
        parents: parents,
        parentPaths: parentPaths
      };

      if (info.path && info.path.indexOf('/') !== 0) {
        var parentPath = parent ? parent.path : '';
        info.path = "".concat(parentPath, "/").concat(info.path);
        info.path = info.path.replace(/\/{2,}/g, '/');
      } // const parentPaths = [...info.parentPaths, (info.path || '')]


      info.children = filterMenusData(item.children || [], level + 1, info);
      delete info.component;
      menus.push(info);
    });
    return menus;
  }

  return [];
}
/**
 * 根据指定路径获取所有需要展开和选中的菜单
 * @param menus 菜单列表
 * @param path 指定的路径
 */


function findMenuByUrl(menus) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (!path) {
    return null;
  }

  var menu = null;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = menus[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if (item.path === path) {
        menu = item;
        break;
      }

      if (item.children && item.children.length > 0) {
        var child = findMenuByUrl(item.children, path);
        child && (menu = child);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return menu;
}
/**
 * 重置所有选中的菜单，不包含可展开节点
 * @param menus
 */


function _resetSelectedStatus(menus) {
  menus.forEach(function (m) {
    if (m.children && m.children.length > 0) {
      _resetSelectedStatus(m.children);
    } else {
      m.active && (m.active = false);
    }
  });
}

var __events = new _vue.default();

var instance;

var ZMenuClass =
/*#__PURE__*/
function () {
  function ZMenuClass() {
    _classCallCheck(this, ZMenuClass);

    this.selectedMenu = null;

    if (!instance) {
      instance = this;
    }

    return instance;
  }

  _createClass(ZMenuClass, [{
    key: "settingMenus",
    value: function settingMenus(menus) {
      var autoGenRoute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (menus && menus.length > 0) {
        if (autoGenRoute) {
          this.$router.addRoutesByMenus(menus);
        }

        var menusData = filterMenusData(menus);
        ZMenuClass.__menusData = menusData;

        __events.$emit('update-menus', menusData);
      }
    }
  }, {
    key: "resetStatus",
    value: function resetStatus(menus) {
      var _this = this;

      var list = menus || this.menusData || [];
      list.forEach(function (item) {
        item.active = false;

        if (item.children && item.children.length > 0) {
          _this.resetStatus(item.children);
        }
      });
    }
  }, {
    key: "resetSelectedStatus",
    value: function resetSelectedStatus() {
      _resetSelectedStatus(this.menusData || []);
    }
  }, {
    key: "activeByRoute",
    value: function activeByRoute(route) {
      route = route || this.$router.currentRoutePath;
      var menu = null;

      if (typeof route === 'string') {
        menu = findMenuByUrl(this.menusData, route || this.$router.currentRoutePath);
      } else {
        menu = route;
      }

      if (menu) {
        menu.active = true;

        if (menu.parents) {
          menu.parents.forEach(function (p) {
            p.active = true;
          });
        }

        this.selectedMenu = menu;
      }
    }
  }, {
    key: "closeSiblingMenus",
    value: function closeSiblingMenus(menu) {
      var siblings = menu.parent ? menu.parent.children || [] : this.menusData;
      siblings.forEach(function (m) {
        if (m.path !== menu.path && m.children && m.children.length > 0) {
          m.active = false;
        }
      });
    }
    /**
     * 子级是否有选中的菜单
     * @param menu
     */

  }, {
    key: "checkActivatedChildren",
    value: function checkActivatedChildren(menu) {
      var _this2 = this;

      if (!menu.children || menu.children.length === 0) {
        return menu.active || false;
      }

      var active = false;
      menu.children.forEach(function (m) {
        if (!m.children || m.children.length === 0) {
          active = m.active || false;
        } else {
          active = _this2.checkActivatedChildren(m);
        }
      });
      return active;
    }
  }, {
    key: "onUpdateMenus",
    value: function onUpdateMenus(callback) {
      __events.$on('update-menus', callback);
    }
  }, {
    key: "offUpdateMenus",
    value: function offUpdateMenus(callback) {
      __events.$off('update-menus', callback);
    }
  }, {
    key: "menusData",
    get: function get() {
      return ZMenuClass.__menusData;
    }
  }, {
    key: "$router",
    get: function get() {
      return _ZRouter.ZRouterClass.genInstance();
    }
  }], [{
    key: "genInstance",
    value: function genInstance() {
      if (!instance) {
        instance = new ZMenuClass();
      }

      return instance;
    }
  }]);

  return ZMenuClass;
}();

exports.ZMenuClass = ZMenuClass;
ZMenuClass.__menusData = [];
var ZMenu = ZMenuClass.genInstance();
exports.ZMenu = ZMenu;
//# sourceMappingURL=ZMenu.js.map