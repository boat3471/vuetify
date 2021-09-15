"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZDefaultMenus = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _components = require("../../../components");

require("../../../../src/zui/components/ZAdmin/styles/ZDefaultMenus.scss");

var _options = require("../../options");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var ZDefaultMenus = _vue.default.extend({
  name: 'z-default-menus',
  props: {
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    iconLeft: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      open: ['public'],
      tree: [],
      menuData: [],
      listIndex: 0
    };
  },
  computed: {
    iconSize: function iconSize() {
      return this.$themeStore.denseMode ? 20 : 24;
    }
  },
  created: function created() {
    /* 监听异步菜单，创建App时异步设置菜单 */
    this.$menu.onUpdateMenus(this.renderMenus);
    /* 监听同步菜单，创建App时已设置的菜单 */

    var menus = this.$menu.menusData;

    if (menus && menus.length > 0) {
      this.renderMenus(menus);
    }
  },
  destroyed: function destroyed() {
    this.$menu.offUpdateMenus(this.renderMenus);
  },
  mounted: function mounted() {},
  methods: {
    renderMenus: function renderMenus(menus) {
      if (this.$themeStore.mainNavMode === _options.MainNavMode.Flex) {
        this.$menu.resetStatus();
      }

      if (this.$themeStore.mainNavMode === _options.MainNavMode.Visible) {
        this.$menu.activeByRoute();
      }

      this.menuData = menus;
    },
    genFloatMenus: function genFloatMenus(h, type, item) {
      var content = null;

      switch (type) {
        case 'group':
          {
            var listItems = [];

            if (item.children) {
              item.children.forEach(function (i) {
                listItems.push(h(_components.ZListItem, {}, [h(_components.ZListItemIcon, {
                  staticClass: 'mr-4'
                }, [h(_components.ZIcon, {
                  staticClass: '',
                  props: {
                    size: 16
                  }
                }, [i.icon])]), h(_components.ZListItemContent, [h(_components.ZListItemTitle, {
                  staticClass: ''
                }, [i.name])])]));
              });
            }

            content = h(_components.ZList, {
              staticClass: '',
              props: {
                dense: true,
                subheader: true,
                minWidth: 160
              }
            }, [h(_components.ZListItemGroup, {}, [listItems])]);
            break;
          }

        case 'path':
        case 'href':
        case 'static':
        default:
          content = h('div', {
            staticClass: 'd-flex px-3 align-center subtitle-2',
            style: {
              minHeight: '38px'
            }
          }, [item.title]);
          break;
      }

      var card = h(_components.ZCard, {
        props: {
          flat: true,
          outlined: true,
          minWidth: 160,
          minHeight: 40
        }
      }, [content]);
      return h(_components.ZMenu, {
        props: {
          activator: "[menukey=".concat(item.key, "]"),
          openOnHover: true,
          transition: 'slide-x-transition',
          offsetX: true,
          nudgeRight: 13,
          closeDelay: 300,
          contentClass: 'z-default-main-float-menu'
        }
      }, [card]);
    },

    /**
     * 生成带链接的菜单
     */
    genHrefMenu: function genHrefMenu(h, item, children) {
      return [h(_components.ZListItem, {
        attrs: {
          menuKey: item.key
        },
        props: {
          value: item.name,
          href: item.href,
          target: item.target || '_blank'
        },
        on: {}
      }, children)];
    },

    /**
     * 生成带路由的菜单
     */
    genPathMenu: function genPathMenu(h, item, children) {
      var _this = this;

      return [h(_components.ZListItem, {
        attrs: {
          menuKey: item.key
        },
        props: {
          value: item.name,
          to: {
            path: item.path,
            query: item.query
          }
        },
        on: {
          click: function click() {
            if (!item.active) {
              // 取消已选中的菜单激活状态
              var lastSelectedMenu = _this.$menu.selectedMenu;

              if (lastSelectedMenu) {
                lastSelectedMenu.active = false;
              }

              item.active = true; // 设置新的激活菜单

              _this.$menu.selectedMenu = item;
            }
          }
        }
      }, children)];
    },

    /**
     * 生成静态菜单
     */
    genStaticMenu: function genStaticMenu(h, item, children) {
      return [h(_components.ZListItem, {
        attrs: {
          menuKey: item.key
        },
        props: {
          value: item.name
        },
        on: {}
      }, children)];
    },

    /**
     * 生成菜单组
     */
    genGroupMenu: function genGroupMenu(h, item, children) {
      var _this2 = this;

      var activatorSlot = h('template', {
        slot: 'activator'
      }, children);
      var mainNavMiniMode = this.$themeStore.mainNavMiniMode;
      var childrenNodeList = [];
      /* 如果是mini模式，不渲染子菜单 */

      if (!mainNavMiniMode) {
        item.children && item.children.forEach(function (child) {
          childrenNodeList.push.apply(childrenNodeList, _toConsumableArray(_this2.genMenu(h, child)));
        });
      }

      return [h(_components.ZListGroup, {
        attrs: {
          menuKey: item.key
        },
        props: {
          value: item.active,
          noAction: false,
          disabled: mainNavMiniMode
        },
        on: {
          click: function click() {
            _this2.$nextTick(function () {
              if (!item.active) {
                _this2.$menu.closeSiblingMenus(item);
              }

              item.active = !item.active;
            });
          }
        }
      }, [activatorSlot].concat(childrenNodeList))];
    },

    /**
     * 生成菜单
     */
    genMenu: function genMenu(h, item) {
      /* 如果是隐藏的 */
      if (item.visible) {
        return [];
      }

      var level = item.level || 0;
      var iconSize = level > 0 ? this.iconSize - 4 : this.iconSize;
      var iconName = item.icon || 'mdi-circle-medium';
      var titleOptions = {
        staticClass: "mr-".concat(level === 0 ? '3' : level * 4 + 3),
        style: {}
      };

      if (!this.iconLeft) {
        var justify = level === 0 ? '' : 'justify-end';
        titleOptions.staticClass = "mr-".concat(level === 0 ? '3' : '1', " ").concat(justify);
        titleOptions.style = {
          width: level === 0 ? false : "".concat(32 + 28 * level, "px !important")
        };
      }

      var isActive = this.$menu.checkActivatedChildren(item);
      var activeClass = isActive ? 'primary--text' : '';
      var titleNodes = [h(_components.ZListItemIcon, titleOptions, [h(_components.ZIcon, {
        staticClass: activeClass,
        props: {
          size: iconSize
        }
      }, [iconName])]), h(_components.ZListItemContent, [h(_components.ZListItemTitle, {
        staticClass: activeClass
      }, [item.name])])];
      /* 有子菜单优先渲染子菜单 */

      if (item.children && item.children.length > 0) {
        return this.genGroupMenu(h, item, titleNodes);
      }
      /* 没有子菜单时，如果存在href，则优先绘制href */


      if (item.href) {
        return this.genHrefMenu(h, item, titleNodes);
      }
      /* 路由菜单 */


      if (item.path) {
        return this.genPathMenu(h, item, titleNodes);
      }
      /* 静态菜单 */


      return this.genStaticMenu(h, item, titleNodes);
    }
  },
  render: function render(h) {
    var _this3 = this;

    var list = [];
    var staticClass = ['z-default-main-menu'];
    this.menuData.forEach(function (item) {
      list.push.apply(list, _toConsumableArray(_this3.genMenu(h, item)));
    });
    return h(_components.ZList, {
      staticClass: staticClass.join(' '),
      props: {
        nav: true,
        shaped: true,
        subheader: false,
        dense: this.$themeStore.denseMode,
        expand: true
      }
    }, list);
  }
});

exports.ZDefaultMenus = ZDefaultMenus;
var _default2 = ZDefaultMenus;
exports.default = _default2;
//# sourceMappingURL=ZDefaultMenus.js.map