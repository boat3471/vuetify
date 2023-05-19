import Vue from 'vue'
import VueRouter from 'vue-router'

export function installRouter (): void {
  const installVueRouter = VueRouter.install as any
  installVueRouter.installed !== true || Vue.use(VueRouter)
}

export { VueRouter }
