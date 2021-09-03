import Vue, { CreateElement, VNode } from 'vue'
import {
  ZForm,
  ZBtn,
  ZCard,
  ZCardActions, ZCardSubtitle, ZCardTitle, ZContainer, ZRow,
  ZTextField, ZCheckbox, ZCardText,
} from '../../../components'
import { getSlot } from '../../../util/helpers'

import './styles/ZDefaultLogin.scss'

export const ZDefaultLogin = Vue.extend({
  name: 'z-default-login',
  data () {
    return {
      projectDisplayName: this.$ui.appName || 'Admin Project Name',
      username: '',
      rules: {
        required: (v: string) => !!v || 'Name is required',
        username: (v: string) => (v && v.length >= 4 && v.length <= 20) || '用户名至少4个字符，最多20个字符',
        password: (v: string) => (v && v.length >= 4 && v.length <= 20) || '密码至少6个字符，最多20个字符',
      },
      password: '',
      remember: false,
      loginPd: true,
      loginError: false,
      disabled: false,
      errorShake: false,
      errorMessage: '',
    }
  },
  mounted () {
  },
  destroyed () {
  },
  methods: {
    login () {
      const { loginForm } = this.$refs
      if ((loginForm as any).validate()) {
        this.disabled = true
        if (this.$auth.login) {
          this.$auth.login({
            username: this.username,
            password: this.password,
            remember: this.remember,
          }).then(res => {
            if (this.$auth.verifyLogin && this.$auth.verifyLogin(res)) {
              // console.info('login success', res)
            } else {
              this.disabled = false
            }
          }).catch(e => {
            // console.info('login failed', e)
            this.disabled = false
          })
        } else {
          this.$router.replace({ path: '/' })
        }
      }
    },
    genTitle (h: CreateElement): VNode {
      const title = getSlot(this, 'title') || this.projectDisplayName
      return h(ZCardTitle, {
        staticClass: 'headline',
      }, [title])
    },
    genSubTitle (h: CreateElement): VNode {
      const subtitle = getSlot(this, 'subtitle')
      return h(ZCardSubtitle, {}, [subtitle])
    },
    genUsername (h: CreateElement): VNode[] {
      const title = h(ZRow, { props: { noGutters: true } }, [
        h('b', { style: { lineHeight: '30px' } }, 'Username'),
      ])
      const input = h(ZRow, { props: { noGutters: true } }, [
        h(ZTextField, {
          staticClass: 'z-default-login-input',
          props: {
            value: this.username,
            autofocus: true,
            required: true,
            outlined: true,
            l: true,
            persistentHint: true,
            hideDetails: false,
            rules: [
              this.rules.required,
              this.rules.username,
            ],
          },
          on: {
            keyup: (event: KeyboardEvent) => {
              if (event.key === 'Enter') {
                this.login()
              }
            },
          },
        }),
      ])
      return [title, input]
    },
    genPassword (h: CreateElement): VNode[] {
      const title = h(ZRow, { props: { noGutters: true } }, [
        h('b', { style: { lineHeight: '30px' } }, 'Password'),
      ])
      const input = h(ZRow, { props: { noGutters: true } }, [
        h(ZTextField, {
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
            rules: [
              this.rules.required,
              this.rules.password,
            ],
          },
          on: {
            'click:append': () => {
              this.loginPd = !this.loginPd
            },
            keyup: (event: KeyboardEvent): void => {
              if (event.key === 'Enter') {
                this.login()
              }
              return undefined
            },
          },
        }),
      ])
      return [title, input]
    },
    genRemember (h: CreateElement): VNode {
      return h(ZRow, { props: { noGutters: true } }, [
        h(ZCheckbox, {
          attrs: {
            tabIndex: -1,
          },
          props: {
            value: this.remember,
            dense: true,
            label: 'Remember me',
            tabIndex: -1,
          },
          on: {
            input: (val: boolean) => {
              this.remember = val
            },
          },
        }),
      ])
    },
    genText (h: CreateElement): VNode {
      const form = h(ZForm, {
        ref: 'loginForm',
        props: {
          lazyValidation: true,
        },
      }, [
        // 用户名
        ...this.genUsername(h),
        ...this.genPassword(h),
        this.genRemember(h),
      ])
      return h(ZCardText, [form])
    },
    genActions (h: CreateElement): VNode {
      return h(ZCardActions, {
        staticClass: 'pa-4',
      }, [
        h(ZRow, { props: { justify: 'end', noGutters: true } }, [
          h(ZBtn, {
            props: {
              m: true,
              color: '',
              disabled: this.disabled,
            },
            on: {
              click: (event: MouseEvent) => {
                event.stopPropagation()
                this.login()
              },
            },
          }, [
            'Sign in',
          ]),
        ]),
      ])
    },
  },

  render (h): VNode {
    const card = h(ZCard, {
      props: {
        elevation: 5,
        width: 300,
      },
      style: {
        marginTop: '-10vh',
      },
    }, [
      this.genTitle(h),
      this.genSubTitle(h),
      this.genText(h),
      this.genActions(h),
    ])
    const row = h(ZRow, {
      staticClass: 'z-default-login-body',
      props: {
        align: 'center',
        justify: 'center',
      },
    }, [card])
    return h(ZContainer, { staticClass: 'z-default-login' }, [row])
  },
})

export default ZDefaultLogin
