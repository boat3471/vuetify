import { Component } from 'vue'
import { GlobalVuetifyPreset } from '@zwd/z-ui/types/services/presets'

export type DefaultSize = 'xs' | 's' | 'm' | 'l' | 'xl' | '';

export interface UIOptions {
    /**
     * 配置App主DOM节点编号，默认值为：app
     */
    appId?: string

    /**
     * App名称
     */
    appName?: string

    /**
     * 配置App主DOM节点class，默认值为：z-app
     */
    appClass?: string

    /**
     * 配置App主视图，默认值为：ZApp;
     */
    appMain?: Component

    /**
     * 配置App主页，默认值为：null;
     */
    appHome?: Component

    /**
     * 配置UI库全局默认大小;
     */
    defaultSize?: DefaultSize

    /**
     * 配置Tooltip默认颜色;
     */
    defaultTooltipColor?: string

    /**
     * 配置Tooltip默认大小;
     */
    defaultTooltipSize?: string

    /**
     * 自定义Vuetify
     */
    vuetifyOptions?: GlobalVuetifyPreset
}
