import mixins from '../../util/mixins'
import { ZSnackbar } from '../VSnackbar/ZSnackbar'
import { ZMessageItem } from './ZMessageItem'

export const ZMessage = mixins(ZSnackbar).extend({
  name: 'z-message',
  props: {
    offsetTop: {
      type: Number,
      default: 8,
    },
    itemGap: {
      type: Number,
      default: 8,
    },
    itemHeight: {
      type: Number,
      default: 42,
    },
    top: {
      type: Boolean,
      default: true,
    },
  },
  mounted () {
    const { duration } = this.$props
    const that = this as any
    const list = this.getMessageList()
    const wrapper = this.$refs.wrapper as HTMLDivElement
    wrapper.style.opacity = '1'
    list.push({
      id: that._uid,
      duration: duration <= 0 ? -1 : duration,
      vnode: that,
      el: wrapper,
      index: list.length,
    })
  },
  methods: {
    genWrapper () {
      const list = this.getMessageList()
      const wrapper = (ZSnackbar as any).options.methods.genWrapper.call(this)
      const currentTop = this.offsetTop + (list.length * (this.itemGap + this.itemHeight))
      wrapper.data.style = {
        top: `${currentTop}px`,
      }
      wrapper.data.ref = 'wrapper'
      return wrapper
    },
    setTimeout () {
      const that = this as any
      window.clearTimeout(that.activeTimeout)
      const timeout = Number(that.timeout)
      if (!that.isActive) {
        this.resetLocation()
      }
      if (!that.isActive || [0, -1].includes(timeout)) {
        return
      }

      that.activeTimeout = window.setTimeout(() => {
        this.resetLocation()
      }, timeout)
    },
    resetLocation () {
      const that = this as any
      const list = this.getMessageList() as ZMessageItem[]
      const item = list.find(i => i.id === that._uid)
      if (item) {
        // 从池子中删除当前弹窗
        list.splice(item.index, 1)
        // 设置当前通知透明度为0;
        item.el.style.opacity = '0'
        // 设置当前通知位置，移出界面;
        item.el.style.top = `${this.offsetTop + ((item.index - 1) * (this.itemGap + this.itemHeight))}px`
        // 重置所有通知位置及其索引
        this.resetAll(item.index)
      }

      // 等待动画结束后移除
      setTimeout(() => {
        that.isActive = false
      }, 400)
    },
    resetAll (index = 0) {
      const list = this.getMessageList() as ZMessageItem[]
      list.forEach((item, i) => {
        if (i >= index) {
          const top = this.offsetTop + (i * (this.itemGap + this.itemHeight))
          item.el.style.top = `${top}px`
        }
        item.index = i
      })
    },
  },
  render (createElement) {
    const that = this as any
    if (!that.isActive) {
      return createElement('')
    }
    return createElement('div', {
      staticClass: 'v-snack',
      class: that.classes,
      style: that.styles,
    }, [that.transition !== false ? that.genTransition() : that.genWrapper()])
  },
})

export default ZMessage
