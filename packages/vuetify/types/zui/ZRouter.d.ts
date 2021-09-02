import VueRouter from 'vue-router'
import { RouteConfig } from 'vue-router/types/router'

export interface ZRouterDescription {
  currentRouter: VueRouter

  currentRoutePath: string

  getRouter (): VueRouter

  addRoute (route: RouteConfig): void
}
