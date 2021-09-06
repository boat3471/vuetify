import { RouteConfig, RouterOptions } from 'vue-router/types/router'
import { ZMenuOption } from './MenuOptions'
import { ComponentOptions } from 'vue'

export interface ZRouterOptions {
  /**
   * VueRouter 选项
   */
  options?: RouterOptions

  /**
   * 定制首页路由，路径为 / 的路由信息
   */
  routeHome?: RouteConfig

  /**
   * 定制登录路由，路径为 /login
   */
  routeLogin?: RouteConfig

  /**
   * 定制403路由
   */
  route403?: RouteConfig

  /**
   * 定制404路由
   */
  route404?: RouteConfig

  /**
   * 定制500路由
   */
  route500?: RouteConfig
}
