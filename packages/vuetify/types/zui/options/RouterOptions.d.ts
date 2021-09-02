import { RouteConfig, RouterOptions } from 'vue-router/types/router'
import { ZMenuOption } from './MenuOptions'

export interface ZRouterOptions {
  options?: RouterOptions
  // menus?: ZMenuOption[]
  routeHome?: RouteConfig
  routeLogin?: RouteConfig
  route403?: RouteConfig
  route404?: RouteConfig
  route500?: RouteConfig
}
