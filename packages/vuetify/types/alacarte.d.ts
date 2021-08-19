declare module '@zwd/z-ui/es5/install' {
  import { VueConstructor } from 'vue'

  const install: (Vue: VueConstructor, args: {}) => void

  export { install }
}
declare module '@zwd/z-ui/es5/components/Vuetify' {
  import Vuetify from '@zwd/z-ui'

  export default Vuetify
}

declare module '@zwd/z-ui/es5/components/*' {
  import { ComponentOrPack } from '@zwd/z-ui'
  import { VueConstructor } from 'vue'

  const VuetifyComponent: {
    default: ComponentOrPack & VueConstructor
    [key: string]: ComponentOrPack & VueConstructor
  }

  export = VuetifyComponent
}

declare module '@zwd/z-ui/es5/directives' {
  import { DirectiveOptions } from 'vue'

  const ClickOutside: DirectiveOptions
  const Intersect: DirectiveOptions
  const Mutate: DirectiveOptions
  const Resize: DirectiveOptions
  const Ripple: DirectiveOptions
  const Scroll: DirectiveOptions
  const Touch: DirectiveOptions

  export {
    ClickOutside,
    Intersect,
    Mutate,
    Ripple,
    Resize,
    Scroll,
    Touch,
  }
}
