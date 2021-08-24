import Vue, { VNode, VNodeData } from 'vue'
// import mixins from '../../../util/mixins'
import { ZIcon, ZBtn } from '../../../components'
import { ZMessageSingleBase } from './ZMessageSingleBase'

export const ZMessageSingle = Vue.extend({
  name: 'z-global-message',
  props: {
    type: String,
    icon: String,
    message: String,
    duration: {
      type: Number,
      default: 3000,
    },
    customClass: String,
    showClose: {
      type: Boolean,
      default: true,
    },
    itemClass: String,
    onClose: Function,
  },
  data () {
    return {
      visible: true,
    }
  },
  computed: {
    timeout () {
      return this.duration <= 0 ? -1 : this.duration
    },
  },
  mounted () {
    (this.$refs.message as HTMLElement).innerHTML = this.message
  },
  methods: {
    getClasses (): string {
      const list = ['z-message']
      switch (this.type) {
        case 'info':
          list.push('z-message-info')
          break
        case 'success':
          list.push('z-message-success')
          break
        case 'warning':
          list.push('z-message-warning')
          break
        case 'error':
          list.push('z-message-error')
          break
        default:
          break
      }

      if (this.itemClass) {
        list.push(this.itemClass)
      }
      return list.join(' ')
    },
    genIcon (): VNode {
      return this.$createElement(ZIcon, {
        props: {
          small: true,
        },
      }, [this.icon])
    },
    genMessage (): VNode {
      return this.$createElement('div', {
        staticClass: 'text',
        ref: 'message',
      })
    },
    genActionSlot ({ attrs }: VNodeData): VNode | null {
      if (this.showClose) {
        return this.$createElement(ZBtn, {
          slot: 'action',
          attrs: {
            ...attrs,
          },
          props: {
            icon: true,
          },
          on: {
            click: () => {
              this.visible = false
            },
          },
        }, [this.message])
      }
      return null
    },
    genBody (): any {
      return this.$createElement(ZMessageSingleBase,
        {
          staticClass: this.getClasses(),
          props: {
            value: this.visible,
            timeout: this.timeout,
            color: this.type,
          },
        }, [
          this.icon ? this.genIcon() : null,
          this.genMessage(),
        ])
    },
  },
  render (h): any {
    return this.genBody()
  },
})

export default ZMessageSingle
