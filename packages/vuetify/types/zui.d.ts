import { VNode } from 'vue'

export class UICore {
  static $app: Vue;

  /**
   * 获取默认主题大小
   */
  get defaultSize (): string

  /**
   * 获取默认的提示背景色
   */
  get defaultTooltipColor (): string

  /**
   * 获取默认的提示背景色
   */
  get defaultTooltipSize (): string
}

export class ZMessageCore {

}

export class ZModalCore {

}

export interface ZMessageItem {
  id: number
  duration: number
  index: number
  vnode: VNode
  el: HTMLDivElement
}
