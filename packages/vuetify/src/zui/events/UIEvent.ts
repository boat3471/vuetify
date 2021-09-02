import Vue from 'vue'
import { ZuiEventType } from '../../../types'

export class UIEvent {
  private events = new Vue();

  emit (event: ZuiEventType, ...args: any[]) {
    this.events.$emit(event, ...args)
  }

  on (event: ZuiEventType | ZuiEventType[], callback: Function) {
    this.events.$on(event, callback)
  }

  once (event: ZuiEventType | ZuiEventType[], callback: Function) {
    this.events.$once(event, callback)
  }

  off (event?: ZuiEventType | ZuiEventType[], callback?: Function) {
    this.events.$off(event, callback)
  }
}
