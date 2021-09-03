import VueRouter, { RouteConfig } from 'vue-router'
import { RouterOptions } from 'vue-router/types/router'
import { ZMenuOption, ZRouterOptions } from '../../types'
import { ZRouterDescription } from '../../types/zui/ZRouter'
import { genRoutesByOptions } from './util/generatorRouter'

let instance: ZRouterClass

export class ZRouterClass implements ZRouterDescription {
  get currentRouter (): VueRouter {
    return ZRouterClass.router
  }

  get currentRoutePath (): string {
    return ZRouterClass.router.currentRoute.path
  }

  getRouter (): VueRouter {
    return ZRouterClass.router
  }

  addRoutesByMenus (menus: ZMenuOption[] = []) {
    const router = this.currentRouter
    if (router) {
      const options = ZRouterClass.options || {}
      ZRouterClass.menus = menus = menus || []

      const routes: RouteConfig[] = genRoutesByOptions(options, menus)
      const routerOptions: RouterOptions = options.options || Object.create(null)
      routerOptions.routes = routes

      const newRouter = new VueRouter(routerOptions);

      (router as any).matcher = (newRouter as any).matcher

      // 强制刷新当前路由
      const route = router.currentRoute
      router.replace({ path: route.path, query: { ...route.query, t: Date.now() + '' } }).then()
      router.replace({ path: route.path, query: { ...route.query } }).then()
    }
  }

  /**
   * 设置路由器
   * @internal
   */
  setting (options: ZRouterOptions, menus: ZMenuOption[]): VueRouter {
    ZRouterClass.options = options = options || {}
    ZRouterClass.menus = menus = menus || []

    const routes: RouteConfig[] = genRoutesByOptions(options, menus)
    const routerOptions: RouterOptions = options.options || Object.create(null)
    routerOptions.routes = routes

    const router = new VueRouter(routerOptions)
    ZRouterClass.router = router
    return router
  }

  constructor () {
    if (!instance) {
      instance = this
    }
    return instance
  }

  static menus?: ZMenuOption[]
  static options?: ZRouterOptions
  static router: VueRouter

  static genInstance (): ZRouterClass {
    if (!instance) {
      instance = new ZRouterClass()
    }
    return instance
  }
}

export const ZRouter = ZRouterClass.genInstance()
