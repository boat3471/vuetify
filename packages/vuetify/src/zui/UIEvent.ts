import Vue from 'vue'

export type DefaultUIEventType =
    'changeDark'
    | 'changeTheme'
    | 'changePrimaryColor'
    | 'changeThemeColors'
    | 'initMenus'
    | 'menuViewComplete'
    | string;

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
