export interface ColorsOptions {
    primary?: string
    secondary?: string
    accent?: string
    error?: string
    info?: string
    success?: string
    warning?: string
}

export interface ThemeColorsOptions {
    darkColors?: ColorsOptions
    lightColors?: ColorsOptions
}

/**
 * 自定义主题选项
 */
export interface ThemeCustomOptions {
    darkColors?: ColorsOptions
    lightColors?: ColorsOptions

    /**
     * 开启暗色调
     */
    darkStatus?: boolean

    /**
     * 主菜单宽度
     */
    menuWidth?: number

    /**
     * 菜单mini模式:
     * 1. true: 只能将菜单收缩起来, 将出现浮动菜单
     * 2. false: 在顶部栏左侧出现一个按钮控制菜单的显示和隐藏
     */
    miniMenuMode?: boolean

    /**
     * 主菜单显示位置
     * 1. 在顶部栏下方
     * 2. 在顶部栏左侧
     */
    menuDisplayMode?: boolean

    /**
     * 主菜单展开模式
     * 1. true: 允许展开多个
     * 2. false: 只能展开一个
     */
    menuExpandMode?: boolean

    /**
     * 紧凑模式, 将会影响所有组件的紧凑模式
     * 1. true: 开启紧凑模式
     * 2. false: 关闭紧凑模式
     */
    denseMode?: boolean

    /**
     * 菜单是否收起, 只会在mini模式时作用
     */
    miniMenuLayout?: boolean

    /**
     * 菜单是否隐藏, 只会在非mini模式时作用
     */
    menuVisible?: boolean
}
