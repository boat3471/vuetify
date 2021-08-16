import { VNode } from 'vue'

export interface ZMessageItem {
  id: number
  duration: number
  index: number
  vnode: VNode
  el: HTMLDivElement
}
