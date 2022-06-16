export class ZIconLoader {
  constructor() {
    this.defaultIcon = '';
    this.defaultOpacity = 1;
  }

  isLoad(iconName) {
    return false;
  }

  load(vm, iconName) {
    return Promise.resolve();
  }

}
//# sourceMappingURL=ZIconLoader.js.map