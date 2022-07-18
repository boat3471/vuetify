export class ZIconLoader {
  defaultIcon: string;
  defaultOpacity: number;

  /**
   * 格式化图标名，如果存在不合法的字符，则进行处理后返回
   * @param iconName
   */
  format(iconName: string): string;

  /**
   * 检查图标是否需要加载
   * @param iconName
   */
  check(iconName: string): boolean;

  /**
   * 加载图标
   * @param vm
   * @param iconName
   * @param fileName
   */
  load(vm: any, iconName: string, fileName: string): Promise<any>;
}
