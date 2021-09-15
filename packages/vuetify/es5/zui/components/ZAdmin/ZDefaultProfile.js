"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZDefaultProfile = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _helpers = require("../../../util/helpers");

var _components = require("../../../components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZDefaultProfile = _vue.default.extend({
  name: 'z-default-profile',
  props: {},
  data: function data() {
    return {
      showProfileMenu: false
    };
  },
  watch: {},
  created: function created() {},
  mounted: function mounted() {},
  methods: {
    logout: function logout() {
      this.showProfileMenu = false;

      if (this.$auth && this.$auth.logout) {
        this.$auth.logout();
      } else {
        window.console.warn('未配置登出');
      }
    },
    genList: function genList() {
      var slotMenus = (0, _helpers.getSlot)(this, 'profile-menus');
      var logoutIcon = this.$createElement(_components.ZListItemIcon, {}, [this.$createElement(_components.ZIcon, {}, ['mdi-logout'])]);
      var logoutContent = this.$createElement(_components.ZListItemContent, {}, [this.$createElement(_components.ZListItemTitle, {}, ['Logout'])]);
      var logoutListItem = this.$createElement(_components.ZListItem, {
        on: {
          click: this.logout
        }
      }, [logoutIcon, logoutContent]);
      return this.$createElement(_components.ZList, {
        props: {
          nav: true,
          dense: true
        }
      }, [slotMenus, logoutListItem]);
    },
    genActivator: function genActivator(props) {
      var photo = (0, _helpers.getSlot)(this, 'profile-photo') || this.$createElement(_components.ZIcon, {
        props: {
          size: 22
        }
      }, ['mdi-account-circle']);
      var avatar = this.$createElement(_components.ZAvatar, {}, [photo]);
      return this.$createElement(_components.ZBtn, {
        staticClass: 'ml-1 mr-0',
        props: {
          icon: true,
          outlined: true
        },
        on: props.on
      }, [avatar]);
    },
    genBody: function genBody() {
      return this.$createElement(_components.ZCard, {
        props: {
          width: 256
        }
      }, [this.$slots.default, this.genList()]);
    }
  },
  render: function render(h) {
    return h(_components.ZMenu, {
      props: {
        left: true,
        nudgeBottom: '36',
        closeOnContentClick: false
      },
      scopedSlots: {
        activator: this.genActivator
      }
    }, [this.genBody()]);
  }
});

exports.ZDefaultProfile = ZDefaultProfile;
var _default = ZDefaultProfile;
exports.default = _default;
//# sourceMappingURL=ZDefaultProfile.js.map