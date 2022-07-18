export class ZIconLoader {
  constructor() {
    this.defaultIcon = '';
    this.defaultOpacity = 1;
  }
  /**
   * 格式化图标名，如果存在不合法的字符，则进行处理后返回
   * @param iconName
   */


  format(iconName) {
    return iconName;
  }
  /**
   * 检查图标是否需要加载
   * @param iconName
   */


  check(iconName) {
    return false;
  }
  /**
   * 加载图标
   * @param vm
   * @param iconName
   * @param fileName
   */


  load(vm, iconName, fileName) {
    return Promise.resolve(iconName);
  }

}
//# sourceMappingURL=ZIconLoader.js.map