import Vue from 'vue'
import { ZMenuOption } from '../../types'
import { ZMenuDescription } from '../../types/zui/ZMenu'
import { ZRouterClass } from './ZRouter'

function filterMenusData (list: ZMenuOption[], level = 0, parent: ZMenuOption | null = null): ZMenuOption[] {
  if (list && list.length > 0) {
    const menus: ZMenuOption[] = []
    list.forEach(item => {
      item.level = level
      if (item.visible === false) {
        return
      }
      const parents = parent ? [...parent.parents, parent] : []
      const parentPaths: string[] = parent ? [...(parent.parentPaths || []), (parent.path || '')] : []
      const info: ZMenuOption = {
        path: item.path,
        name: item.name,
        children: item.children,
        redirect: item.redirect,
        alias: item.alias,
        meta: item.meta,
        title: item.title || item.name,
        icon: item.icon,
        roles: item.roles,
        href: item.href,
        target: item.target,
        visible: item.visible,
        query: item.query,
        level: item.level,
        active: false,
        key: (item.path || '').replace(/\//g, '-'),
        parent,
        parents,
        parentPaths,
      }

      if (info.path && info.path.indexOf('/') !== 0) {
        const parentPath = parent ? parent.path : ''
        info.path = `${parentPath}/${info.path}`
        info.path = info.path.replace(/\/{2,}/g, '/')
      }
      // const parentPaths = [...info.parentPaths, (info.path || '')]
      info.children = filterMenusData(item.children || [], level + 1, info)
      delete info.component
      menus.push(info)
    })
    return menus
  }
  return []
}

/**
 * 根据指定路径获取所有需要展开和选中的菜单
 * @param menus 菜单列表
 * @param path 指定的路径
 */
function findMenuByUrl (menus: ZMenuOption[], path = ''): ZMenuOption | null {
  if (!path) {
    return null
  }
  let menu: ZMenuOption | null = null
  for (const item of menus) {
    if (item.path === path) {
      menu = item
      break
    }

    if (item.children && item.children.length > 0) {
      const child = findMenuByUrl(item.children, path)
      child && (menu = child)
    }
  }
  return menu
}

/**
 * 重置所有选中的菜单，不包含可展开节点
 * @param menus
 */
function resetSelectedStatus (menus: ZMenuOption[]) {
  menus.forEach(m => {
    if (m.children && m.children.length > 0) {
      resetSelectedStatus(m.children)
    } else {
      m.active && (m.active = false)
    }
  })
}

const __events = new Vue()
let instance: ZMenuClass

export class ZMenuClass implements ZMenuDescription {
  selectedMenu: ZMenuOption | null = null
  isRender = false;

  get menusData (): ZMenuOption[] {
    return ZMenuClass.__menusData
  }

  get $router (): ZRouterClass {
    return ZRouterClass.genInstance()
  }

  settingMenus (menus: ZMenuOption[], autoGenRoute = true): void {
    this.isRender = (menus ? menus.length > 0 : false)
    if (menus && menus.length > 0) {
      if (autoGenRoute) {
        this.$router.addRoutesByMenus(menus)
      }
      const menusData = filterMenusData(menus)
      ZMenuClass.__menusData = menusData
      __events.$emit('update-menus', menusData)
    }
  }

  resetStatus (menus?: ZMenuOption[]) {
    const list = menus || this.menusData || []
    list.forEach(item => {
      item.active = false
      if (item.children && item.children.length > 0) {
        this.resetStatus(item.children)
      }
    })
  }

  resetSelectedStatus (): void {
    resetSelectedStatus(this.menusData || [])
  }

  activeByRoute (route?: string | ZMenuOption): void {
    route = route || this.$router.currentRoutePath

    let menu = null
    if (typeof route === 'string') {
      menu = findMenuByUrl(this.menusData, route || this.$router.currentRoutePath)
    } else {
      menu = route
    }
    if (menu) {
      menu.active = true
      if (menu.parents) {
        menu.parents.forEach(p => {
          p.active = true
        })
      }
      this.selectedMenu = menu
    }
  }

  closeSiblingMenus (menu: ZMenuOption): void {
    const siblings = menu.parent ? (menu.parent.children || []) : this.menusData
    siblings.forEach(m => {
      if (m.path !== menu.path && m.children && m.children.length > 0) {
        m.active = false
      }
    })
  }

  /**
   * 子级是否有选中的菜单
   * @param menu
   */
  checkActivatedChildren (menu: ZMenuOption): boolean {
    if (!menu.children || menu.children.length === 0) {
      return menu.active || false
    }
    let active = false
    menu.children.forEach(m => {
      if (!m.children || m.children.length === 0) {
        active = m.active || false
      } else {
        active = this.checkActivatedChildren(m)
      }
    })
    return active
  }

  onUpdateMenus (callback: (menus: ZMenuOption[]) => void) {
    __events.$on('update-menus', callback)
  }

  offUpdateMenus (callback?: Function) {
    __events.$off('update-menus', callback)
  }

  constructor () {
    if (!instance) {
      instance = this
    }
    return instance
  }

  static __menusData: ZMenuOption[] = [];

  static genInstance (): ZMenuClass {
    if (!instance) {
      instance = new ZMenuClass()
    }
    return instance
  }
}

export const ZMenu = ZMenuClass.genInstance()
