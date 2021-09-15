import Vue from 'vue';
import { ZApp } from '../components';
import { ZuiCoreClass } from './ZuiCore';
import { ZRouterClass } from './ZRouter';
import { createZui } from './createZui';
/**
 * 创建主程序
 * @param createElement
 * @param options
 */

function createMain(createElement, options) {
  options = options || {};
  const children = [];
  const appHome = options.appHome ? createElement(options.appHome) : null;

  if (!appHome) {
    if (options.componentOptions && options.componentOptions.router) {
      children.push(createElement(Vue.component('RouterView')));
    }
  } else {
    children.push(appHome);
  }

  return createElement( // 主视图
  options.appMain || ZApp, // 主视图配置选项
  {
    staticClass: `z-app ${options.appClass || ''}`,
    props: {
      id: options.appId || 'app'
    }
  }, // 子元素列表
  children);
}
/**
 * 创建APP, 基于@zwd/z-ui
 * @param options
 */


export function createApp(options) {
  if (!options) {
    options = options || {};
  } // 安装 zui-core


  Vue.use(ZuiCoreClass, options);
  const {
    $theme
  } = ZuiCoreClass.genInstance();
  const presetOptions = $theme.getDefaultPreset(options.presetOptions);
  const componentOptions = options.componentOptions || {};
  const ui = createZui(presetOptions, options.useOptions);
  componentOptions.router && (ZRouterClass.router = componentOptions.router);
  ZuiCoreClass.settingVuetify(ui.framework);
  ZuiCoreClass.$app = new Vue({
    el: options.appId || '#app',
    vuetify: ui,

    render(createElement) {
      return createMain(createElement, options);
    },

    ...componentOptions
  });
  return ZuiCoreClass.$app;
}
//# sourceMappingURL=createApp.js.map