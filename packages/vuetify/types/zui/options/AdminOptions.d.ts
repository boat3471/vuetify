import { ComponentOptions } from 'vue'
import { UIOptions } from './UIOptions'
import { NavigationGuard, RedirectOption, RouteConfig, RouterOptions } from 'vue-router/types/router'

/**
 * Admin端路由定制
 */
export interface AdminRouterOptions {
    options?: RouterOptions
    menus?: AdminMainMenuOption[]
    adminHome?: RouteConfig
    adminLogin?: RouteConfig
    admin403?: RouteConfig
    admin404?: RouteConfig
    admin500?: RouteConfig
}

/**
 * Admin端菜单选项
 */
export interface AdminMenuOption {
    path?: string
    redirect?: RedirectOption

    name?: string
    meta?: any
    alias?: string | string[]

    component?: any
    beforeEnter?: NavigationGuard
    children?: AdminMenuOption[]

    title?: string
    role?: string[]
    href?: string
    target?: string

    visible?: boolean
    query?: any
}

export interface AdminLoginOptions {
    username: string
    password: string
    remember: boolean
}

/**
 * Admin端认证选项
 */
export interface AdminAuthOptions {
    /**
     * 登录接口
     * @param data
     */
    login?: (data: AdminLoginOptions) => Promise<any>

    /**
     * 登出接口
     */
    logout?: () => Promise<any>

    /**
     * 验证登录, 返回true登录成功，返回false登录失败
     * @param data
     */
    verifyLogin?: (data: any) => boolean

    /**
     * 验证登录状态, 返回true已登录, 返回false为未登录
     */
    verifyLoginStatus?: () => boolean

    /**
     * 验证权限, 返回true验证成功, 返回false为验证失败
     * @param key
     */
    verifyPermission?: (key: string) => boolean
}

/**
 * Admin端菜单选项
 */
export interface AdminMainMenuOption extends AdminMenuOption {
    icon?: string
}

/**
 * 创建Admin选项
 */
export interface AdminOptions extends UIOptions {
    /**
     * 配置Vue选项
     */
    componentOptions: ComponentOptions<any>

    /**
     * 认证
     */
    auth?: AdminAuthOptions

    /**
     * 打开首页
     */
    openHome: () => void

    /**
     * 打开登录页面
     */
    openLogin: () => void
}
