export class ZIconLoader {
  defaultIcon = '';
  defaultOpacity = 1;

  /**
   * 格式化图标名，如果存在不合法的字符，则进行处理后返回
   * @param iconName
   */
  format (iconName: string): string {
    return iconName;
  }

  /**
   * 检查图标是否需要加载
   * @param iconName
   */
  check (iconName: string): boolean {
    return false
  }

  /**
   * 加载图标
   * @param vm
   * @param iconName
   * @param fileName
   */
  load (vm: any, iconName: string, fileName: string): Promise<any> {
    return Promise.resolve(iconName);
  }
}
