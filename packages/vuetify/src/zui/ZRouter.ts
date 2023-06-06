import VueRouter, { Route, RouteConfig, RedirectOption, RouterOptions } from 'vue-router'
import { CreateAdminRouterOptions, CreateAppRouterOptions, RouteComponent, ZMenuOption } from '../../types'
import { IZRouter } from '../../types/zui/ZRouter'
import { ZAdmin, ZApp } from '../components'
import { ZView403, ZView404, ZView500, ZDefaultLogin } from './components/ZAdmin'
import { genComp, genDefaultHome, genDefaultLoginRoute, genExceptionRoutes } from './route'

let instance: ZRouterCore

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

  /**
   * 根据菜单创建路由列表
   * @param menus
   * @param redirect
   */
  createRoutesByMenus (menus: ZMenuOption[] = [], redirect: RedirectOption = '/home'): RouteConfig[] {
    if (menus && menus.length > 0) {
      const children: RouteConfig[] = []
      children.push(...this.genRoutesByMenus(menus, children, '/'))
      children.push(...genExceptionRoutes())
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

    const NotFoundElement = genComp(options.appNotFound, ZView404)

    const routeRoot: RouteConfig = { path: '/', component: options.appMain || ZAdmin }
    const routeHome: RouteConfig = { path: '', component: options.appHome || genDefaultHome() }

    // 跟节点所有前置子节点
    const beforeChildren: RouteConfig[] = [routeHome]
    // 跟节点所有中置子节点
    const middleChildren: RouteConfig[] = []
    // 跟节点所有后置子节点
    const afterChildren: RouteConfig[] = [{ path: '*', component: NotFoundElement }]

    // 给Home设置重定向
    options.redirect && (routeHome.redirect = options.redirect)

    const routerOptions = options.routerOptions || {}
    const userRoutes = routerOptions.routes || []
    const userMap: any = {
      login: null,
      e500: null,
      e403: null,
      e404: null,
    }
    let userRedirect: any = ''

    userRoutes.forEach(route => {
      const path = route.path
      const name = route.name
      if (path === '' || path === '/') {
        const children = route.children || []
        delete route.children

        if ('component' in route && route.component) {
          routeHome.component = route.component
        }
        // 设置用户自定义的重定向，会忽略options中定义的重定向
        !userRedirect && (userRedirect = route.redirect)

        // 添加所有子组件到跟路由
        middleChildren.push(...children)
      } else if (path === '/login' || name === 'login') {
        userMap.login = route
      } else if (path === '/500') {
        userMap.e500 = route
      } else if (path === '/403') {
        userMap.e403 = route
      } else if (path === '/404') {
        userMap.e404 = route
      } else {
        middleChildren.push(route)
      }
    })

    userRedirect && (routeHome.redirect = userRedirect)

    const menuRoutes = this.createRoutesByMenus(options.menus, '')

    routeRoot.children = [...beforeChildren, ...middleChildren, ...menuRoutes, ...afterChildren]

    const routes: RouteConfig[] = []

    // 添加登录路由；
    routes.push(userMap.login || genDefaultLoginRoute(options.appLogin))

    // 添加异常路由
    routes.push(userMap.e500 || { name: '500', path: '/500', component: genComp(options.appServerError, ZView500) })
    routes.push(userMap.e403 || { name: '403', path: '/403', component: genComp(options.appNotAccess, ZView403) })
    routes.push(userMap.e404 || { name: '404', path: '/404', component: NotFoundElement })

    // 添加主视图路由
    routes.push(routeRoot)

    // 添加主视图404路由, 无法命中时跳转该路由
    routes.push({ name: 'root-not-found', path: '*', component: NotFoundElement })

    routerOptions.routes = routes

    window.console.info(routes)

    this.routerOptions = routerOptions
  }
}

export class ZRouterCore implements IZRouter {
  get self (): VueRouter {
    return ZRouterCore.router
  }

  get currentRouter (): VueRouter {
    return ZRouterCore.router
  }

  get currentRoute (): Route {
    return ZRouterCore.router.currentRoute
  }

  get currentRoutePath (): string {
    return ZRouterCore.router.currentRoute.path
  }

  getRouter (): VueRouter {
    return ZRouterCore.router
  }

  addRoutesByMenus (menus: ZMenuOption[] = []) {
    const router = this.currentRouter
    if (router) {
      const options = ZRouterCore.adminRouter || {}
      ZRouterCore.menus = menus = menus || []

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
    ZRouterCore.appRouter = appRouter
    options && options.router && (ZRouterCore.router = options.router)
    return appRouter
  }

  static genAdminRouter (options: CreateAdminRouterOptionsInner): ZAdminRouter {
    const adminRouter = new ZAdminRouter()
    adminRouter.setting(options)
    ZRouterCore.adminRouter = adminRouter
    options && options.router && (ZRouterCore.router = options.router)
    return adminRouter
  }

  static menus?: ZMenuOption[]

  static router: VueRouter

  static genInstance (): ZRouterCore {
    if (!instance) {
      instance = new ZRouterCore()
    }
    return instance
  }
}

export const ZRouter = ZRouterCore.genInstance()
