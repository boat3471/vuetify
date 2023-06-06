import Vue, { VNode } from 'vue'
import { ZIcon } from '../../../../components'

export const ZDefaultThemeIcon = Vue.extend({
  name: 'z-default-theme-icon',
  props: {
    color: {
      type: String,
      default: '',
    },
  },
  computed: {
    themeIcon (): string {
      return this.$themeStore.darkStatus ? 'mdi-brightness-4' : 'mdi-brightness-7'
    },
  },
  methods: {
    onThemeClick () {
      this.$emit('click:theme')
    },
  },
  render (h): VNode {
    return h(ZIcon, {
      props: { color: this.color, size: 18 },
      on: {
        click: () => {
          this.onThemeClick()
        },
      },
    }, [this.themeIcon])
  },
})

export default ZDefaultThemeIcon
