import Vue from 'vue';
import { ZMenu, ZIcon, ZCard, ZList, ZListGroup, ZListItem, ZListItemContent, ZListItemIcon, ZListItemTitle, ZListItemGroup } from '../../../components';
import "../../../../src/zui/components/ZAdmin/styles/ZDefaultMenus.scss";
import { MainNavMode } from '../../options';
export const ZDefaultMenus = Vue.extend({
  name: 'z-default-menus',
  props: {
    items: {
      type: Array,

      default() {
        return [];
      }

    },
    iconLeft: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      open: ['public'],
      tree: [],
      menuData: [],
      listIndex: 0
    };
  },

  computed: {
    iconSize() {
      return this.$themeStore.denseMode ? 20 : 24;
    }

  },

  created() {
    /* 监听异步菜单，创建App时异步设置菜单 */
    this.$menu.onUpdateMenus(this.renderMenus);
    /* 监听同步菜单，创建App时已设置的菜单 */

    const menus = this.$menu.menusData;

    if (menus && menus.length > 0) {
      this.renderMenus(menus);
    }
  },

  destroyed() {
    this.$menu.offUpdateMenus(this.renderMenus);
  },

  mounted() {
    this.$router.beforeEach((to, from, next) => {
      next();

      if (to.redirectedFrom && this.$themeStore.mainNavMode === MainNavMode.Visible) {
        this.$menu.resetStatus();
        this.$menu.activeByRoute();
      }
    });
  },

  methods: {
    renderMenus(menus) {
      if (this.$themeStore.mainNavMode === MainNavMode.Flex) {
        this.$menu.resetStatus();
      }

      if (this.$themeStore.mainNavMode === MainNavMode.Visible) {
        this.$menu.activeByRoute();
      }

      this.menuData = menus;
    },

    genFloatMenus(h, type, item) {
      let content = null;

      switch (type) {
        case 'group':
          {
            const listItems = [];

            if (item.children) {
              item.children.forEach(i => {
                listItems.push(h(ZListItem, {}, [h(ZListItemIcon, {
                  staticClass: 'mr-4'
                }, [h(ZIcon, {
                  staticClass: '',
                  props: {
                    size: 16
                  }
                }, [i.icon])]), h(ZListItemContent, [h(ZListItemTitle, {
                  staticClass: ''
                }, [i.name])])]));
              });
            }

            content = h(ZList, {
              staticClass: '',
              props: {
                dense: true,
                subheader: true,
                minWidth: 160
              }
            }, [h(ZListItemGroup, {}, [listItems])]);
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

      const card = h(ZCard, {
        props: {
          flat: true,
          outlined: true,
          minWidth: 160,
          minHeight: 40
        }
      }, [content]);
      return h(ZMenu, {
        props: {
          activator: `[menukey=${item.key}]`,
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
    genHrefMenu(h, item, children) {
      return [h(ZListItem, {
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
    genPathMenu(h, item, children) {
      return [h(ZListItem, {
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
          click: () => {
            if (!item.active) {
              // 取消已选中的菜单激活状态
              const lastSelectedMenu = this.$menu.selectedMenu;

              if (lastSelectedMenu) {
                lastSelectedMenu.active = false;
              }

              item.active = true; // 设置新的激活菜单

              this.$menu.selectedMenu = item;
            }
          }
        }
      }, children)];
    },

    /**
     * 生成静态菜单
     */
    genStaticMenu(h, item, children) {
      return [h(ZListItem, {
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
    genGroupMenu(h, item, children) {
      const activatorSlot = h('template', {
        slot: 'activator'
      }, children);
      const mainNavMiniMode = this.$themeStore.mainNavMiniMode;
      const childrenNodeList = [];
      /* 如果是mini模式，不渲染子菜单 */

      if (!mainNavMiniMode) {
        item.children && item.children.forEach(child => {
          childrenNodeList.push(...this.genMenu(h, child));
        });
      }

      return [h(ZListGroup, {
        attrs: {
          menuKey: item.key
        },
        props: {
          value: item.active,
          noAction: false,
          disabled: mainNavMiniMode
        },
        on: {
          click: () => {
            this.$nextTick(() => {
              const active = item.active; // 展开或关闭当前节点

              item.active = !item.active;

              if (!active) {
                // 如果可展开多个时，不执行关闭兄弟
                if (this.$themeStore.mainMenuExpandMode) {
                  return;
                } // 关闭兄弟接节点


                this.$menu.closeSiblingMenus(item);
              }
            });
          }
        }
      }, [activatorSlot, ...childrenNodeList])];
    },

    /**
     * 生成菜单
     */
    genMenu(h, item) {
      /* 如果是隐藏的 */
      if (item.visible) {
        return [];
      }

      const level = item.level || 0;
      const iconSize = level > 0 ? this.iconSize - 4 : this.iconSize;
      const iconName = item.icon || 'mdi-circle-medium';
      const titleOptions = {
        staticClass: `mr-${level === 0 ? '3' : level * 4 + 3}`,
        style: {}
      };

      if (!this.iconLeft) {
        const justify = level === 0 ? '' : 'justify-end';
        titleOptions.staticClass = `mr-${level === 0 ? '3' : '1'} ${justify}`;
        titleOptions.style = {
          width: level === 0 ? false : `${32 + 28 * level}px !important`
        };
      }

      const isActive = this.$menu.checkActivatedChildren(item);
      const activeClass = isActive ? 'primary--text' : '';
      const titleNodes = [h(ZListItemIcon, titleOptions, [h(ZIcon, {
        staticClass: activeClass,
        props: {
          size: iconSize
        }
      }, [iconName])]), h(ZListItemContent, [h(ZListItemTitle, {
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

  render(h) {
    const list = [];
    const staticClass = ['z-default-main-menu'];
    this.menuData.forEach(item => {
      list.push(...this.genMenu(h, item));
    });
    return h(ZList, {
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
export default ZDefaultMenus;
//# sourceMappingURL=ZDefaultMenus.js.map