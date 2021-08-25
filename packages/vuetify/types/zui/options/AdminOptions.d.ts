import { ComponentOptions } from 'vue'
import { ZuiOptions } from './UIOptions'
import { ZAuthOptions } from './AuthOptions'

/**
 * 创建Admin选项
 */
export interface ZAdminOptions extends ZuiOptions {
    /**
     * 配置Vue选项
     */
    componentOptions: ComponentOptions<any>

    /**
     * 认证
     */
    auth?: ZAuthOptions

    /**
     * 打开首页
     */
    openHome: () => void

    /**
     * 打开登录页面
     */
    openLogin: () => void
}
