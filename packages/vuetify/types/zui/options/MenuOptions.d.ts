import {
  NavigationGuard,
  PathToRegexpOptions,
  RedirectOption,
  RoutePropsFunction,
} from 'vue-router/types/router'

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
}
