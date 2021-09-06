import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { RouterOptions } from 'vue-router/types/router'
import { ZMenuOption, ZRouterOptions } from '../../types'
import { genAppRoutesByOptions, genRoutesByOptions } from './util/generatorRouter'

/**
 * 创建路由，可根据菜单生成路由，菜单为可选项
 * @param options
 * @param menus
 */
export function createRouter (options: ZRouterOptions, menus?: ZMenuOption[]): VueRouter {
  Vue.use(VueRouter)
  const routes: RouteConfig[] = genAppRoutesByOptions(options, menus || [])
  const routerOptions: RouterOptions = options.options || Object.create(null)
  routerOptions.routes = routes

  return new VueRouter(routerOptions)
}

/**
 * 创建Admin系统路由，可根据菜单生成路由，菜单为可选项
 * @param options
 * @param menus
 */
export function createAdminRouter (options: ZRouterOptions, menus?: ZMenuOption[]): VueRouter {
  Vue.use(VueRouter)
  const routes: RouteConfig[] = genRoutesByOptions(options, menus || [])
  const routerOptions: RouterOptions = options.options || Object.create(null)
  routerOptions.routes = routes

  return new VueRouter(routerOptions)
}
