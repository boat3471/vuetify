import { UIEvent } from './UIEvent'

export class UICore extends UIEvent {
  static $app: Vue;

  /**
   * 获取默认主题大小
   */
  get defaultSize (): string {
    return ''
  }

  /**
   * 获取默认的提示背景色
   */
  get defaultTooltipColor (): string {
    return ''
  }

  /**
   * 获取默认的提示背景色
   */
  get defaultTooltipSize (): string {
    return ''
  }
}
