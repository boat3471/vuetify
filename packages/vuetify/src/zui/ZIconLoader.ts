export class ZIconLoader {
  defaultIcon = '';
  defaultOpacity = 1;
  isLoad (iconName: string): boolean {
    return false
  }

  load (vm: any, iconName: string): Promise<any> {
    return Promise.resolve()
  }
}
