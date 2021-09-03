import Vue, { VNode } from 'vue'
import { ZCard } from '../../../../components'
import { ZMenuOption } from '../../../../../types'

export const ZDefaultFloatMenus = Vue.extend({
  name: 'z-default-float-menus',
  props: {
  },
  data () {
    return {
      visible: false,
      menu: {},
      left: '0',
      top: '0',
      child: {},
      childStyle: {},
      childVisible: false,
      closeTimer: 0,
    }
  },
  watch: {
  },
  created () {
    this.$ui.on('innerCloseFloatMenu', () => {
      this.forceClose()
    })
    this.$ui.on('showFloatMenu', (item: any) => {
      clearTimeout(this.closeTimer)
      this.menu = item.menu
      this.left = (item.left + 3) + 'px'
      this.top = (item.top + (this.$props.dense ? 48 : 64)) + 'px'
      this.visible = true
    })
    this.$ui.on('hideFloatMenu', (menu: any) => {
      this.leave()
    })
  },
  mounted () {
  },
  methods: {
    enter () {
      this.visible = true
      clearTimeout(this.closeTimer)
    },
    leave () {
      this.closeTimer = setTimeout(() => {
        this.visible = false
        this.childVisible = false
      }, 300) as any
    },
    enterChildMenu (event: any, child: any) {
      if (child && child.children && child.children.length > 0) {
        clearTimeout(this.closeTimer)
        this.childStyle = {
          left: (event.target.offsetLeft + event.target.offsetWidth + 3) + 'px',
          top: (event.target.offsetTop) + 'px',
        }
        this.childVisible = true
        this.child = child
      }
    },
    leaveChildMenu () {
      this.closeTimer = setTimeout(() => {
        this.childVisible = false
      }, 300) as any
    },
    enterChildPanel () {
      clearTimeout(this.closeTimer)
    },
    forceClose () {
      this.visible = false
      this.childVisible = false
    },
    forceCloseChild () {
      this.childVisible = false
    },
    to (item: ZMenuOption) {
      this.forceClose()
      if (item.children && item.children.length > 0) {
        return
      }
      if (item.href) {
        window.open(item.href, item.target || '_blank')
        return
      }
      if (this.$route.path !== item.path) {
        this.$router.push({
          path: item.path,
          query: item.query,
        })
      }
    },
  },
  render (h): VNode {
    return h(ZCard, {
      props: {
        flat: true,
        outlined: true,
        minWidth: 200,
        minHeight: 40,
      },
      style: {
        // position: 'fixed',
        // left: this.left,
        // top: this.top,
        // zIndex: 2,
      },
      on: {
        // mouseenter: this.enter,
        // mouseleave: this.leave,
      },
    }, ['asdasd'])
  },
})

export default ZDefaultFloatMenus
