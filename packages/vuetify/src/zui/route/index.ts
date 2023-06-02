import Vue from 'vue'
import { RouteConfig } from 'vue-router'
import { RouteComponent } from '../../../types'
import { ZView403, ZView404, ZView500, ZDefaultLogin } from '../components/ZAdmin'

export function genComp (usr: RouteComponent | boolean | undefined, def: RouteComponent): RouteComponent | undefined {
  if (typeof usr === 'boolean') {
    return usr ? def : undefined
  }
  return usr || def
}

export function genDefaultLoginRoute (userLogin: any): RouteConfig {
  return { name: 'login', path: '/login', component: genComp(userLogin, ZDefaultLogin) }
}

export function genDefaultHome () {
  return Vue.extend({
    name: 'z-admin-default-home',
    render (h) {
      return h('div', { staticClass: 'z-admin-default-home' })
    },
  })
}

/** 生成异常路由 */
export function genExceptionRoutes (name = '', path = ''): RouteConfig[] {
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
 * 生成完整路径
 * @param path
 * @param parentPath
 */
export function genFullPathByMenu (path: string, parentPath?: string): string {
  if (path.indexOf('/') !== 0) {
    return `/${parentPath || ''}/${path}`.replace(/\/+/g, '/')
  }
  return path
}

export function parseUsrRoutes (routes: RouteConfig[], parentPath: string): RouteConfig[] {
  const list: RouteConfig[] = []
  routes.forEach(route => {
    if (route) {
      route.path = genFullPathByMenu(route.path)
      route.name = route.name || `usr-${route.path.replace(/\//g, '-')}`
      list.push(route)
    }
  })
  return list
}
