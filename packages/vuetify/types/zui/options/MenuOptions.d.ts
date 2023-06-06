import {
  NavigationGuard,
  PathToRegexpOptions,
  RedirectOption,
  RoutePropsFunction,
} from 'vue-router/types/router'
import { RouteConfig } from 'vue-router'

/**
 * 菜单选项
 */
export interface ZMenuOption {
  path?: string
  name?: string
  children?: ZMenuOption[]
  redirect?: RedirectOption
  alias?: string | string[]
  meta?: any
  beforeEnter?: NavigationGuard
  caseSensitive?: boolean
  pathToRegexpOptions?: PathToRegexpOptions
  component?: any
  props?: boolean | Object | RoutePropsFunction

  title?: string
  icon?: string
  roles?: string[]
  href?: string
  target?: string
  visible?: boolean
  query?: any
  active?: boolean
  level?: number
  parent?: ZMenuOption | null
  parents?: ZMenuOption[]
  parentPaths?: string[]
  key?: string
}

export interface MenuMeta {
  title?: string
  icon?: string
  roles?: string[]
  target?: string
  visible?: boolean
  query?: any
  active?: boolean
  level?: number
  parent?: ZMenuOption | null
  parents?: ZMenuOption[]
  parentPaths?: string[]
  key?: string
  [metaPropName: string]: any
}

/**
 * 菜单选项
 */
export interface ZMenuOptionNew {
  /** 菜单名 */
  name: string

  /** 菜单图标，如果没有，则会尝试使用 route.meta.icon */
  icon?: string

  /** 菜单路径 */
  path?: string

  /** 菜单顺序 */
  order?: number

  /** 子菜单 */
  children?: ZMenuOption[]

  /** 是否隐藏菜单 */
  hideMenu?: boolean

  /** 路由选项 */
  routeOption?: RouteConfig
}
