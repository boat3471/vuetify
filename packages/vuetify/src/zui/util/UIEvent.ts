import Vue from 'vue'
import { DefaultUIEventType } from '../../../types'

export class UIEvent {
    private events = new Vue();

    emit (event: DefaultUIEventType, ...args: any[]) {
      this.events.$emit(event, ...args)
    }

    on (event: DefaultUIEventType | DefaultUIEventType[], callback: Function) {
      this.events.$on(event, callback)
    }

    once (event: DefaultUIEventType | DefaultUIEventType[], callback: Function) {
      this.events.$once(event, callback)
    }

    off (event?: DefaultUIEventType | DefaultUIEventType[], callback?: Function) {
      this.events.$off(event, callback)
    }
}
