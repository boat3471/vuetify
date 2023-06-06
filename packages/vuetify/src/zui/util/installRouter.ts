import Vue from 'vue'
import VueRouter from 'vue-router'

export function installRouter (): void {
  const installVueRouter = VueRouter.install as any
  if (installVueRouter.installed !== true) {
    try {
      Vue.use(VueRouter)
    } catch (e) {
      // ignore
    }
  }
}

export { VueRouter }
