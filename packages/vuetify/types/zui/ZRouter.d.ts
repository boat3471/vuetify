import VueRouter, { Route } from 'vue-router'
import { RouteConfig } from 'vue-router/types/router'

export interface ZRouterDescription {
  self: VueRouter

  currentRouter: VueRouter

  currentRoute: Route

  currentRoutePath: string

  getRouter (): VueRouter
}
