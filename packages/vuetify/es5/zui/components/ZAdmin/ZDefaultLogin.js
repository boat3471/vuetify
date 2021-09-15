"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZDefaultLogin = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _components = require("../../../components");

var _helpers = require("../../../util/helpers");

require("../../../../src/zui/components/ZAdmin/styles/ZDefaultLogin.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var ZDefaultLogin = _vue.default.extend({
  name: 'z-default-login',
  data: function data() {
    return {
      projectDisplayName: this.$ui.appName || 'Admin Project Name',
      username: '',
      rules: {
        required: function required(v) {
          return !!v || 'Name is required';
        },
        username: function username(v) {
          return v && v.length >= 4 && v.length <= 20 || '用户名至少4个字符，最多20个字符';
        },
        password: function password(v) {
          return v && v.length >= 4 && v.length <= 20 || '密码至少6个字符，最多20个字符';
        }
      },
      password: '',
      remember: false,
      loginPd: true,
      loginError: false,
      disabled: false,
      errorShake: false,
      errorMessage: ''
    };
  },
  mounted: function mounted() {},
  destroyed: function destroyed() {},
  methods: {
    login: function login() {
      var _this = this;

      var loginForm = this.$refs.loginForm;

      if (loginForm.validate()) {
        this.disabled = true;

        if (this.$auth.login) {
          this.$auth.login({
            username: this.username,
            password: this.password,
            remember: this.remember
          }).then(function (res) {
            if (_this.$auth.verifyLogin && _this.$auth.verifyLogin(res)) {// console.info('login success', res)
            } else {
              _this.disabled = false;
            }
          }).catch(function (e) {
            // console.info('login failed', e)
            _this.disabled = false;
          });
        } else {
          this.$router.replace({
            path: '/'
          });
        }
      }
    },
    genTitle: function genTitle(h) {
      var title = (0, _helpers.getSlot)(this, 'title') || this.projectDisplayName;
      return h(_components.ZCardTitle, {
        staticClass: 'headline'
      }, [title]);
    },
    genSubTitle: function genSubTitle(h) {
      var subtitle = (0, _helpers.getSlot)(this, 'subtitle');
      return h(_components.ZCardSubtitle, {}, [subtitle]);
    },
    genUsername: function genUsername(h) {
      var _this2 = this;

      var title = h(_components.ZRow, {
        props: {
          noGutters: true
        }
      }, [h('b', {
        style: {
          lineHeight: '30px'
        }
      }, 'Username')]);
      var input = h(_components.ZRow, {
        props: {
          noGutters: true
        }
      }, [h(_components.ZTextField, {
        staticClass: 'z-default-login-input',
        props: {
          value: this.username,
          autofocus: true,
          required: true,
          outlined: true,
          l: true,
          persistentHint: true,
          hideDetails: false,
          rules: [this.rules.required, this.rules.username]
        },
        on: {
          keyup: function keyup(event) {
            if (event.key === 'Enter') {
              _this2.login();
            }
          }
        }
      })]);
      return [title, input];
    },
    genPassword: function genPassword(h) {
      var _this3 = this;

      var title = h(_components.ZRow, {
        props: {
          noGutters: true
        }
      }, [h('b', {
        style: {
          lineHeight: '30px'
        }
      }, 'Password')]);
      var input = h(_components.ZRow, {
        props: {
          noGutters: true
        }
      }, [h(_components.ZTextField, {
        staticClass: 'z-default-login-input',
        props: {
          value: this.password,
          required: true,
          outlined: true,
          l: true,
          persistentHint: true,
          hideDetails: false,
          appendIcon: this.loginPd ? 'mdi-eye' : 'mdi-eye-off',
          type: this.loginPd ? 'password' : 'text',
          rules: [this.rules.required, this.rules.password]
        },
        on: {
          'click:append': function clickAppend() {
            _this3.loginPd = !_this3.loginPd;
          },
          keyup: function keyup(event) {
            if (event.key === 'Enter') {
              _this3.login();
            }

            return undefined;
          }
        }
      })]);
      return [title, input];
    },
    genRemember: function genRemember(h) {
      var _this4 = this;

      return h(_components.ZRow, {
        props: {
          noGutters: true
        }
      }, [h(_components.ZCheckbox, {
        attrs: {
          tabIndex: -1
        },
        props: {
          value: this.remember,
          dense: true,
          label: 'Remember me',
          tabIndex: -1
        },
        on: {
          input: function input(val) {
            _this4.remember = val;
          }
        }
      })]);
    },
    genText: function genText(h) {
      var form = h(_components.ZForm, {
        ref: 'loginForm',
        props: {
          lazyValidation: true
        }
      }, [].concat(_toConsumableArray(this.genUsername(h)), _toConsumableArray(this.genPassword(h)), [this.genRemember(h)]));
      return h(_components.ZCardText, [form]);
    },
    genActions: function genActions(h) {
      var _this5 = this;

      return h(_components.ZCardActions, {
        staticClass: 'pa-4'
      }, [h(_components.ZRow, {
        props: {
          justify: 'end',
          noGutters: true
        }
      }, [h(_components.ZBtn, {
        props: {
          m: true,
          color: '',
          disabled: this.disabled
        },
        on: {
          click: function click(event) {
            event.stopPropagation();

            _this5.login();
          }
        }
      }, ['Sign in'])])]);
    }
  },
  render: function render(h) {
    var card = h(_components.ZCard, {
      props: {
        elevation: 5,
        width: 300
      },
      style: {
        marginTop: '-10vh'
      }
    }, [this.genTitle(h), this.genSubTitle(h), this.genText(h), this.genActions(h)]);
    var row = h(_components.ZRow, {
      staticClass: 'z-default-login-body',
      props: {
        align: 'center',
        justify: 'center'
      }
    }, [card]);
    return h(_components.ZContainer, {
      staticClass: 'z-default-login'
    }, [row]);
  }
});

exports.ZDefaultLogin = ZDefaultLogin;
var _default = ZDefaultLogin;
exports.default = _default;
//# sourceMappingURL=ZDefaultLogin.js.map