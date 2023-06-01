import VueRouter, { Route, RouteConfig, RedirectOption, RouterOptions } from 'vue-router'
import { CreateAdminRouterOptions, CreateAppRouterOptions, RouteComponent, ZMenuOption } from '../../types'
import { ZRouterDescription } from '../../types/zui/ZRouter'
import { ZAdmin, ZApp } from '../components'
import { ZView403, ZView404, ZView500, ZDefaultLogin } from './components/ZAdmin'
import Vue from 'vue'

let instance: ZRouterClass

interface CreateAdminRouterOptionsInner extends CreateAdminRouterOptions {
  router?: VueRouter
}

interface CreateAppRouterOptionsInner extends CreateAppRouterOptions {
  router?: VueRouter
}

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

  addNotFoundRoute (route: RouteConfig, notFoundComponent: RouteComponent): void {
    if (route.children && route.children.length > 0) {
      // 如果已经存在，则不添加
      const needed = !(route.children.some(i => i.path === '*') || route.path === '/' || route.path === '*')
      if (needed) {
        route.children.push({ path: '*', component: notFoundComponent })
      }
      route.children.forEach(child => this.addNotFoundRoute(child, notFoundComponent))
    }
  }

  setting (options: CreateAppRouterOptionsInner): void {
    // 如果存在自定义router,则不做任何处理
    const router = options.router
    if (router) {
      this._router = router
      return
    }

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

  /**
   * 生成完整路径
   * @param path
   * @param parentPath
   */
  genFullPathByMenu (path: string, parentPath?: string): string {
    if (path.indexOf('/') !== 0) {
      return `/${parentPath || ''}/${path}`.replace(/\/+/g, '/')
    }
    return path
  }

  parseUsrRoutes (routes: RouteConfig[], parentPath: string): RouteConfig[] {
    const list: RouteConfig[] = []
    routes.forEach(route => {
      if (route) {
        route.path = this.genFullPathByMenu(route.path)
        route.name = route.name || `usr-${route.path.replace(/\//g, '-')}`
        list.push(route)
      }
    })
    return list
  }

  /**
   * 根据菜单生成路由列表
   * @param menus
   * @param rootList
   * @param parentPath
   */
  genRoutesByMenus (menus: ZMenuOption[], rootList: RouteConfig[], parentPath = '/'): RouteConfig[] {
    const list: RouteConfig[] = []
    if (menus) {
      menus.forEach(menu => {
        if (!menu.path && !menu.href && (!menu.children || menu.children.length < 1)) {
          window.console.warn(`菜单配置无法生成路由: \n ${JSON.stringify(menu, null, 4)}`)
          return
        }
        menu.path = menu.path || ''
        let path = (menu.path || '').indexOf('/') === 0 ? menu.path : `${parentPath}/${menu.path}`
        path = path.replace(/\/{2,}/g, '/')
        if (menu.path) {
          const route: RouteConfig = {
            name: menu.name,
            path: path || '',
            component: menu.component,
            meta: {
              name: menu.name || menu.title,
              ...menu.meta,
            },
          }

          if (menu.redirect) {
            route.redirect = menu.redirect
          }

          if (menu.alias) {
            route.alias = menu.alias
          }

          if (menu.beforeEnter) {
            route.beforeEnter = menu.beforeEnter
          }

          route.name = (route.path || '').replace(/\//g, '-')

          rootList.push(route)
        }

        if (menu.children && menu.children.length > 0) {
          this.genRoutesByMenus(menu.children, rootList, path)
        }
      })
    }
    return list
  }

  /** 生成异常路由 */
  genExceptionRoute (name = '', path = ''): RouteConfig[] {
    const list: RouteConfig[] = []
    list.push({
      name: `${name}-403`,
      path: `${path}/403`.replace(/\/\//g, '/'),
      component: ZView403,
    })
    list.push({
      name: `${name}-500`,
      path: `${path}/500`.replace(/\/\//g, '/'),
      component: ZView500,
    })
    list.push({
      name: `${name}-404`,
      path: `${path}/*`.replace(/\/\//g, '/'),
      component: ZView404,
    })
    return list
  }

  /**
   * 根据菜单创建路由列表
   * @param menus
   * @param redirect
   */
  createRoutesByMenus (menus: ZMenuOption[] = [], redirect: RedirectOption = '/home'): RouteConfig[] {
    if (menus && menus.length > 0) {
      const children: RouteConfig[] = []
      children.push(...this.genRoutesByMenus(menus, children, '/'))
      children.push(...this.genExceptionRoute())
      // children.push({ name: '--empty', path: '', redirect })
      return children
    }
    return []
  }

  setting (options: CreateAdminRouterOptionsInner): void {
    // 如果存在自定义router
    const router = options.router
    if (router) {
      this._router = router
      return
    }

    const NotFoundElement = this.genComp(options.appNotFound, ZView404)
    const NotFoundRoute = { path: '*', component: NotFoundElement }
    const route500: RouteConfig = { name: 'r__500', path: '/500', component: this.genComp(options.appServerError, ZView500) }
    const route403: RouteConfig = { name: 'r__403', path: '/403', component: this.genComp(options.appNotAccess, ZView403) }
    const route404: RouteConfig = { name: 'r__404', path: '/404', component: NotFoundElement }

    const routeRoot404: RouteConfig = { name: 'r__root_404', path: '*', component: NotFoundElement }
    const routeRoot: RouteConfig = { path: '/', component: options.appMain || ZAdmin }
    const routeHome: RouteConfig = { path: '', component: options.appHome || this.defaultHome }

    // 跟节点所有前置子节点
    const beforeChildren: RouteConfig[] = [routeHome]
    // 跟节点所有中置子节点
    const middleChildren: RouteConfig[] = []
    // 跟节点所有后置子节点
    const afterChildren: RouteConfig[] = [NotFoundRoute]

    // 给Home设置重定向
    options.redirect && (routeHome.redirect = options.redirect)

    const routerOptions = options.routerOptions || {}
    const userRoutes = routerOptions.routes || []
    let useUserLogin = false
    let userRedirect: any = ''

    userRoutes.forEach(route => {
      switch (route.path) {
        case '':
        case '/': {
          const children = route.children || []
          delete route.children

          if ('component' in route && route.component) {
            routeHome.component = route.component
          }
          // 设置用户自定义的重定向，会忽略options中定义的重定向
          !userRedirect && (userRedirect = route.redirect)

          // 添加所有子组件到跟路由
          middleChildren.push(...children)
          break
        }
        case '/login': {
          useUserLogin = true
          middleChildren.push(route)
          break
        }
        default: {
          middleChildren.push(route)
          break
        }
      }
    })

    userRedirect && (routeHome.redirect = userRedirect)

    const menuRoutes = this.createRoutesByMenus(options.menus, '')

    routeRoot.children = [...beforeChildren, ...middleChildren, ...menuRoutes, ...afterChildren]

    const routes: RouteConfig[] = []
    if (!useUserLogin) {
      // 添加登录路由；
      routes.push({ name: 'r__login', path: '/login', component: this.genComp(options.appLogin, ZDefaultLogin) })
    }

    // 添加异常路由
    routes.push(route500, route403, route404)

    // 添加主视图异常路由
    routes.push(routeRoot, routeRoot404)

    routerOptions.routes = routes

    this.routerOptions = routerOptions
  }
}

export class ZRouterClass implements ZRouterDescription {
  get self (): VueRouter {
    return ZRouterClass.router
  }

  get currentRouter (): VueRouter {
    return ZRouterClass.router
  }

  get currentRoute (): Route {
    return ZRouterClass.router.currentRoute
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

      // todo 待完成，动态添加菜单
      const routes: RouteConfig[] = [] // genRoutesByOptions(options)
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
  static genAppRouter (options: CreateAppRouterOptionsInner): ZAppRouter {
    const appRouter = new ZAppRouter()
    appRouter.setting(options)
    ZRouterClass.appRouter = appRouter
    options && options.router && (ZRouterClass.router = options.router)
    return appRouter
  }

  static genAdminRouter (options: CreateAdminRouterOptionsInner): ZAdminRouter {
    const adminRouter = new ZAdminRouter()
    adminRouter.setting(options)
    ZRouterClass.adminRouter = adminRouter
    options && options.router && (ZRouterClass.router = options.router)
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
