import { NavigationGuard, RedirectOption, RouteConfig, RouterOptions } from 'vue-router/types/router'

/**
 * 菜单选项
 */
export interface ZMenuOption {
    path?: string
    redirect?: RedirectOption

    name?: string
    meta?: any
    alias?: string | string[]

    component?: any
    beforeEnter?: NavigationGuard
    children?: ZMenuOption[]

    title?: string
    role?: string[]
    href?: string
    target?: string

    visible?: boolean
    query?: any
}

/**
 * 主菜单选项
 */
export interface ZMainMenuOption extends ZMenuOption {
    icon?: string
}

/**
 * 路由选项
 */
export interface ZRouterOptions {
  options?: RouterOptions
  menus?: ZMainMenuOption[]
  adminHome?: RouteConfig
  adminLogin?: RouteConfig
  admin403?: RouteConfig
  admin404?: RouteConfig
  admin500?: RouteConfig
}
