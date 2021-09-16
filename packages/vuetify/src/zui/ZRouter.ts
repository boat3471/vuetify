import VueRouter, { RouteConfig } from 'vue-router'
import { RouterOptions } from 'vue-router/types/router'
import { CreateAdminRouterOptions, CreateAppRouterOptions, RouteComponent, ZMenuOption } from '../../types'
import { ZRouterDescription } from '../../types/zui/ZRouter'
import { createRoutesByMenus, genFullPath, genRoutesByOptions } from './util/generatorRouter'
import { ZAdmin, ZApp } from '../components'
import { ZView403, ZView404, ZView500, ZDefaultLogin } from './components/ZAdmin'
import Vue from 'vue'

let instance: ZRouterClass

export class ZAppRouter {
  protected _router: VueRouter | null = null
  appHome?: RouteComponent
  appMain?: RouteComponent
  appLogin?: RouteComponent
  appNotAccess?: RouteComponent
  appNotFound?: RouteComponent
  appServerError?: RouteComponent

  isRenderRouterView = false

  routerOptions?: RouterOptions

  genRoute (path: string, comp: RouteComponent | boolean | undefined, def: RouteComponent): RouteConfig[] {
    if (comp === true) {
      return [{ path, component: def }]
    }
    if (comp) {
      return [{ path, component: comp }]
    }
    return []
  }

  getRouter (): VueRouter {
    if (this._router) {
      return this._router
    }
    this._router = new VueRouter(this.routerOptions)
    return this._router
  }

  setting (options: CreateAppRouterOptions) {
    if (options) {
      this.isRenderRouterView = !options.appMain && !options.appHome

      this.appHome = options.appHome
      this.appMain = options.appMain || ZApp

      const routerOptions: RouterOptions = options.routerOptions || Object.create(null)
      const routes = routerOptions.routes || []

      routes.push(...this.genRoute('/login', options.appLogin, ZDefaultLogin))
      routes.push(...this.genRoute('/500', options.appServerError, ZView500))
      routes.push(...this.genRoute('/403', options.appNotAccess, ZView403))
      routes.push(...this.genRoute('*', options.appNotFound, ZView404))

      routerOptions.routes = routes

      this.routerOptions = routerOptions
    }
  }
}

export class ZAdminRouter extends ZAppRouter {
  genComp (usr: RouteComponent | boolean | undefined, def: RouteComponent): RouteComponent | undefined {
    if (typeof usr === 'boolean') {
      return usr ? def : undefined
    }
    return usr || def
  }

  get defaultHome () {
    return Vue.extend({
      name: 'z-admin-default-home',
      render (h) {
        return h('div', { staticClass: 'z-admin-default-home' })
      },
    })
  }

  parseUsrRoutes (routes: RouteConfig[], parentPath: string): RouteConfig[] {
    const list: RouteConfig[] = []
    routes.forEach(route => {
      if (route) {
        route.path = genFullPath(route.path)
        route.name = route.name || `usr-${route.path.replace(/\//g, '-')}`
        list.push(route)
      }
    })
    return list
  }

  setting (options: CreateAdminRouterOptions) {
    const NotFoundElement = this.genComp(options.appNotFound, ZView404)
    const NotFoundRoute = { path: '*', component: NotFoundElement }
    const routeLogin: RouteConfig = { name: 'r__login', path: '/login', component: this.genComp(options.appLogin, ZDefaultLogin) }
    const route500: RouteConfig = { name: 'r__500', path: '/500', component: this.genComp(options.appServerError, ZView500) }
    const route403: RouteConfig = { name: 'r__403', path: '/403', component: this.genComp(options.appNotAccess, ZView403) }
    const route404: RouteConfig = { name: 'r__404', path: '/404', component: NotFoundElement }

    const routeRoot404: RouteConfig = { name: 'r__root_404', path: '*', component: NotFoundElement }
    const routeRoot: RouteConfig = { name: 'r__root', path: '/', component: options.appMain || ZAdmin }
    let routeHome: RouteConfig = { name: 'r__home', path: '/', component: options.appHome || this.defaultHome }

    let beforeChildren: RouteConfig[] = [routeHome]
    const middleChildren: RouteConfig[] = []
    const afterChildren = [NotFoundRoute]

    // 初始化用户自定义重定向路径
    const routerOptions = options.routerOptions || {}
    const usrRoutes = routerOptions.routes || []
    const [usrHome, ...otherHomes] = usrRoutes.filter(i => /^\/?$/.test(i.path))
    if (usrHome) {
      let homeElement = options.appHome || this.defaultHome
      if ('component' in usrHome && usrHome.component) {
        homeElement = usrHome.component
      }
      routeHome = { name: 'r__home', ...usrHome, path: '/', component: homeElement }
      beforeChildren = [routeHome, ...otherHomes]
    }

    const menuRoutes = createRoutesByMenus(options.menus, '')

    middleChildren.push(...this.parseUsrRoutes(usrRoutes, '/'))

    if (options.redirect) {
      routeHome.redirect = options.redirect
    }

    routeRoot.children = [...beforeChildren, ...middleChildren, ...menuRoutes, ...afterChildren]

    routerOptions.routes = [
      routeLogin,
      route500,
      route403,
      route404,
      routeRoot,
      routeRoot404,
    ]
    this.routerOptions = routerOptions
  }
}

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
      const options = ZRouterClass.adminRouter || {}
      ZRouterClass.menus = menus = menus || []

      const routes: RouteConfig[] = genRoutesByOptions(options)
      const routerOptions: RouterOptions = options.routerOptions || Object.create(null)
      routerOptions.routes = routes

      const newRouter = new VueRouter(routerOptions);

      (router as any).matcher = (newRouter as any).matcher

      // 强制刷新当前路由
      const route = router.currentRoute
      router.replace({ path: route.path, query: { ...route.query, t: Date.now() + '' } }).then()
      router.replace({ path: route.path, query: { ...route.query } }).then()
    }
  }

  constructor () {
    if (!instance) {
      instance = this
    }
    return instance
  }

  static appRouter: ZAppRouter;
  static adminRouter: ZAdminRouter;
  static genAppRouter (options: CreateAppRouterOptions): ZAppRouter {
    const appRouter = new ZAppRouter()
    appRouter.setting(options)
    ZRouterClass.appRouter = appRouter
    return appRouter
  }

  static genAdminRouter (options: CreateAdminRouterOptions): ZAdminRouter {
    const adminRouter = new ZAdminRouter()
    adminRouter.setting(options)
    ZRouterClass.adminRouter = adminRouter
    return adminRouter
  }

  static menus?: ZMenuOption[]

  static router: VueRouter

  static genInstance (): ZRouterClass {
    if (!instance) {
      instance = new ZRouterClass()
    }
    return instance
  }
}

export const ZRouter = ZRouterClass.genInstance()
