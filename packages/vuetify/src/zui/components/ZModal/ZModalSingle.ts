import Vue, { VNode } from 'vue'
import {
  ZDialog, ZCard, ZCardTitle, ZCardText, ZCardActions, ZDivider, ZSpacer, ZRow, ZCol, ZIcon, ZBtn,
} from '../../../components'
import './ZModal.scss'

export const ZModalSingle = Vue.extend({
  name: 'z-global-modal',
  props: {
    type: String,
    icon: String,
    title: String,
    message: String,
    html: {
      type: Boolean,
      default: false,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    showCancel: {
      type: Boolean,
      default: true,
    },
    labelCancel: {
      type: String,
      default: '取消',
    },
    labelSure: {
      type: String,
      default: '确定',
    },
    width: {
      type: Number,
      default: 450,
    },
    top: {
      type: String,
      default: '',
    },
    delay: {
      type: Number,
      default: 0,
    },
  },
  data () {
    const delay = this.$props.delay
    const labelSure = `${this.$props.labelSure}${delay > 0 ? '(' + delay + ')' : ''}`
    return {
      visible: true,
      labelSureDisplay: labelSure,
      delayCount: delay,
      delayTimer: 0,
    }
  },
  computed: {
    color () {
      if (this.type === 'info' || this.type === 'confirm') {
        return 'primary'
      }
      return this.type
    },
    iconColor () {
      if (this.type === 'info') {
        return 'primary'
      }
      if (this.type === 'confirm') {
        return 'warning'
      }
      return this.type
    },
    classes () {
      const list = ['z-modal']
      switch (this.type) {
        case 'info':
          list.push('z-modal-info')
          break
        case 'success':
          list.push('z-modal-success')
          break
        case 'warning':
          list.push('z-modal-warning')
          break
        case 'error':
          list.push('z-modal-error')
          break
        default:
          break
      }
      return list.join(' ')
    },
  },
  mounted () {
    const labelSure = this.labelSure
    let total = this.$props.delay
    if (total > 0) {
      (this as any).delayTimer = setInterval(() => {
        total--
        this.labelSureDisplay = `${labelSure}(${total})`
        if (total === 0) {
          clearInterval(this.delayTimer)
          this.labelSureDisplay = labelSure
          this.delayCount = 0
        }
      }, 1000)
    }
  },
  destroyed () {
    clearInterval(this.delayTimer)
  },
  methods: {
    sure () {
      const fn = (this as any).sureBeforeFun
      const fnResult = fn && fn()
      const isClose = fnResult !== false
      if (isClose) {
        this.visible = false
        clearInterval(this.delayTimer)
      }
    },
    cancel () {
      const fn = (this as any).cancelBeforeFun
      const fnResult = fn && fn('cancel')
      const isClose = fnResult !== false
      if (isClose) {
        this.visible = false
        clearInterval(this.delayTimer)
      }
    },
    close () {
      const fn = (this as any).cancelBeforeFun
      const fnResult = fn && fn('close')
      const isClose = fnResult !== false
      if (isClose) {
        this.visible = false
        clearInterval(this.delayTimer)
      }
    },
    /**
     * 强制关闭函数
     */
    closeForceFun () {
      this.visible = false
      clearInterval(this.delayTimer)
    },
    /**
     * 设置点击确认前函数
     */
    setSureBeforeFun (fn: () => void) {
      if (fn && typeof fn === 'function') {
        (this as any).sureBeforeFun = fn
      }
    },
    /**
     * 设置点击取消或关闭前
     */
    setCancelBeforeFun (fn: (type: string) => void) {
      if (fn && typeof fn === 'function') {
        (this as any).cancelBeforeFun = fn
      }
    },
    genBody (): VNode {
      const titleName = this.$createElement(ZCol, {}, [this.title])
      const titleClose = this.$createElement(ZCol, { props: { cols: 'auto' } }, [
        this.$createElement(ZBtn, { props: { icon: true }, on: { click: this.close } }, [
          this.$createElement(ZIcon, { props: { small: true } }, ['mdi-close']),
        ]),
      ])
      const title = this.title
        ? this.$createElement(ZCardTitle, { staticClass: 'px-3 py-1' }, [
          this.$createElement(ZRow, {}, [
            titleName,
            this.showClose ? titleClose : '',
          ]),
        ]) : null
      const contentIcon = this.icon
        ? this.$createElement(ZCol,
          {
            staticClass: 'd-flex justify-center align-center pr-2',
            props: { cols: 'auto' },
          },
          [this.$createElement(ZIcon, { props: { color: this.iconColor } }, [this.icon])])
        : null
      // eslint-disable-next-line sonarjs/no-all-duplicated-branches
      const contentText = this.html
        ? this.$createElement(ZCol, { domProps: { innerHTML: this.message } }, [])
        : this.$createElement(ZCol, {}, [this.message])
      const content = this.$createElement(ZCardText, { staticClass: 'pt-5' },
        [
          this.$createElement(ZRow, {
            props: {
              align: 'center',
              justify: 'center',
              noGutters: true,
            },
          }, [
            contentIcon,
            contentText,
          ]),
        ])

      // 取消按钮
      const cancelBtn = this.$createElement(ZBtn, {
        props: {
          color: 'secondary',
          outlined: false,
          text: true,
          xs: true,
        },
        on: {
          click: this.cancel,
        },
      }, [this.labelCancel])

      // 确认按钮
      const sureBtn = this.$createElement(ZBtn, {
        props: {
          color: this.color,
          // elevation: 1,
          outlined: false,
          text: true,
          disabled: this.delayCount > 0,
          xs: true,
        },
        on: {
          click: this.sure,
        },
      }, [this.labelSureDisplay])
      const actions = this.$createElement(ZCardActions, {}, [
        this.$createElement(ZSpacer),
        this.showCancel ? cancelBtn : null,
        sureBtn,
      ])
      return this.$createElement(ZCard, {}, [
        this.title ? title : null,
        this.title ? this.$createElement(ZDivider) : null,
        content,
        this.$createElement(ZDivider),
        actions,
      ])
    },
    genDialog (): VNode | null {
      return this.visible ? this.$createElement(ZDialog, {
        props: {
          value: this.visible,
          contentClass: this.classes,
          hideOverlay: false,
          overlayOpacity: 0.2,
          noClickAnimation: false,
          persistent: true,
          width: this.width,
          top: this.top,
        },
      }, [
        this.genBody(),
      ]) : null
    }
    ,
  },
  render (): any {
    return this.genDialog()
  },
})

export default ZModalSingle
