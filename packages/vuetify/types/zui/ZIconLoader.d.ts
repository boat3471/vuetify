export class ZIconLoader {
  defaultIcon: string;
  defaultOpacity: number;
  isLoad(iconName: string): boolean;
  load(vm: any, iconName: string): Promise<any>
}
