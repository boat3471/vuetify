import Vue from 'vue';
export class UIEvent {
  constructor() {
    this.events = new Vue();
  }

  emit(event, ...args) {
    this.events.$emit(event, ...args);
  }

  on(event, callback) {
    this.events.$on(event, callback);
  }

  once(event, callback) {
    this.events.$once(event, callback);
  }

  off(event, callback) {
    this.events.$off(event, callback);
  }

}
//# sourceMappingURL=UIEvent.js.map