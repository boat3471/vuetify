import { ComponentOptions } from 'vue'
import { UIOptions } from './UIOptions'

/**
 * 创建APP选项
 */
export interface CreateAppOptions extends UIOptions {
    /**
     * 配置Vue选项
     */
    componentOptions: ComponentOptions<any>
}
