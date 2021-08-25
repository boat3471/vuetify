import Router, { RouteConfig } from 'vue-router'
import ZViewRoot from './components/ZAdmin/ZViewRoot'
import ZViewLogin from './components/ZAdmin/ZViewLogin'
import ZView404 from './components/ZAdmin/ZView404'
import ZView403 from './components/ZAdmin/ZView403'
import ZView500 from './components/ZAdmin/ZView500'
import { ZMainMenuOption, ZRouterOptions } from '../../types'
import { ZuiToolClass } from './ZuiTool'

/**
 * 生成异常路由
 * @param name
 * @param path
 */
function genExceptionRoute (name = '', path = ''): RouteConfig[] {
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
 * 添加404
 * @param route
 * @param notFound
 */
function addNotFoundRoute (route: RouteConfig, notFound: any): void {
  if (route.children && route.children.length > 0) {
    if (route.path !== '/') {
      route.children.push({ path: '*', component: notFound })
    }
    route.children.forEach(child => addNotFoundRoute(child, notFound))
  }
}

/**
 * 根据菜单生成路由
 * @param menus
 * @param rootList
 * @param parentPath
 */
function genRoutesByMenus (menus: ZMainMenuOption[], rootList: RouteConfig[], parentPath = '/'): RouteConfig[] {
  const list: RouteConfig[] = []
  if (menus) {
    menus.forEach(menu => {
      if (!menu.path && !menu.href && (!menu.children || menu.children.length < 1)) {
        window.console.warn(`菜单配置无法生成路由: \n ${JSON.stringify(menu, null, 4)}`)
        return
      }
      const path = (menu.path || '').indexOf('/') === 0 ? menu.path : `${parentPath}/${menu.path}`
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
        genRoutesByMenus(menu.children, rootList, path)
      }
    })
  }
  return list
}

/**
 * 根据用户路由信息，获取admin系统路由
 * @param router
 */
function genRoutes (router: ZRouterOptions): RouteConfig[] { // eslint-disable-line max-statements
  const routeRoot: RouteConfig = { path: '/', component: ZViewRoot }
  const routeLogin: RouteConfig = { path: '/login', component: ZViewLogin }
  const route500: RouteConfig = { path: '/500', component: ZView500 }
  const route403: RouteConfig = { path: '/403', component: ZView403 }
  const route404: RouteConfig = { path: '/404', component: ZView404 }
  const routeNotFound: RouteConfig = { path: '/*', component: ZView404 }

  const tempRoutes: RouteConfig[] = (router && router.options && router.options.routes) || []
  const otherRoutes: RouteConfig[] = []
  tempRoutes.forEach(route => {
    if (route) {
      switch (route.path) {
        case '/':
          Object.assign(routeRoot, route)
          break
        case '/login':
          Object.assign(routeLogin, route)
          break
        case '/500':
          Object.assign(route500, route)
          break
        case '/403':
          Object.assign(route403, route)
          break
        case '/404':
          Object.assign(route404, route)
          break
        case '/*':
          Object.assign(routeNotFound, route)
          break
        default:
          otherRoutes.push(route)
          break
      }
    }
  })

  const routes: RouteConfig[] = [
    routeLogin,
    route500,
    route403,
    route404,
    ...otherRoutes,
    routeRoot,
    routeNotFound,
  ]

  addNotFoundRoute(routeRoot, route404.component)
  otherRoutes.forEach(other => addNotFoundRoute(other, route404.component))

  // 根据菜单生成路由
  const menus = (router && router.menus) || []
  if (menus && menus.length > 0) {
    const redirect = router.adminHome ? router.adminHome.redirect : '/home'
    const children: RouteConfig[] = [{
      name: '--empty',
      path: '',
      redirect,
    }]
    children.push(...genRoutesByMenus(menus, children, '/'))
    children.push(...genExceptionRoute())
    routeRoot.children = children
  }

  router.adminHome && Object.assign(routeRoot, router.adminHome)
  router.adminLogin && Object.assign(routeLogin, router.adminLogin)
  router.admin500 && Object.assign(route500, router.admin500)
  router.admin403 && Object.assign(route403, router.admin403)
  router.admin404 && Object.assign(route404, router.admin404)
  router.admin404 && Object.assign(routeNotFound, router.admin404)
  return routes
}

/**
 * 创建路由
 * @param adminRouterOptions
 */
export function createAdminRouter (adminRouterOptions: ZRouterOptions): Router | null {
  const routes: RouteConfig[] = genRoutes(adminRouterOptions)
  const routerOptions = Object.create(null)
  const router = new Router({
    ...(adminRouterOptions ? (adminRouterOptions.options || routerOptions) : routerOptions),
    routes,
  })
  ZuiToolClass.settingMenus(adminRouterOptions ? (adminRouterOptions.menus || []) : [])
  return router
}
