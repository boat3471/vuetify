import { ZMenuOption } from './options'

export interface ZMenuDescription {
  /**
   * 当前选中的菜单
   */
  selectedMenu: ZMenuOption | null

  /**
   * 菜单数据
   */
  menusData: ZMenuOption[]

  /**
   * 设置菜单配置信息
   * @param menus
   * @param autoGenRoute 默认会自动添加路由
   */
  settingMenus (menus: ZMenuOption[], autoGenRoute: boolean): void

  /**
   * 重置菜单所有状态，包含选中和展开状态
   * @param menus 菜单列表
   */
  resetStatus (menus?: ZMenuOption[]): void

  /**
   * 重置所有菜单选中状态
   */
  resetSelectedStatus (): void

  /**
   * 激活并展开和 routePath 一致的菜单
   * @param route route 路径 默认为当前 route 路径
   */
  activeByRoute (route?: string | ZMenuOption): void

  /**
   * 检查子菜单是否有选中的
   * @param menu
   */
  checkActivatedChildren(menu: ZMenuOption): boolean

  /**
   * 关闭兄弟菜单
   * @param menu
   */
  closeSiblingMenus(menu: ZMenuOption): void

  /**
   * 监听菜单变化事件
   * @param callback
   */
  onUpdateMenus (callback: (menus: ZMenuOption[]) => void): void

  /**
   * 取消菜单变化
   * @param callback
   */
  offUpdateMenus (callback?: Function): void
}
