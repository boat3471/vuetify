import Vue from 'vue';
import { ZuiCoreClass } from './ZuiCore';
import { ZRouterClass } from './ZRouter';
import { createZui } from './createZui';
import { ZApp } from '../components/VApp/ZApp';
/**
 * 创建主程序
 */

function createMain(h, options, appMain, appHome, isRenderRouterView = false) {
  options = options || {};
  const children = isRenderRouterView ? h('RouterView') : appHome ? h(appHome) : h('');
  return h(appMain || ZApp, {
    staticClass: `z-app ${options.appClass || ''}`,
    props: {
      id: options.appId || 'app'
    }
  }, [children]);
}
/**
 * 创建APP, 基于@zwd/z-ui
 * @param options
 */


export function createApp(options) {
  options = options || {};
  ZuiCoreClass.type = 'app'; // 安装 zui-core

  Vue.use(ZuiCoreClass, options);
  const {
    $theme
  } = ZuiCoreClass.genInstance();
  const presetOptions = $theme.getDefaultPreset(options.presetOptions);
  const ui = createZui(presetOptions, options.useOptions);
  ZuiCoreClass.settingVuetify(ui.framework);
  const componentOptions = options.componentOptions || {};
  const appRouter = ZRouterClass.appRouter;
  let appMain;
  let appHome;
  let isRenderRouterView = false;

  if (appRouter) {
    appMain = appRouter.appMain;
    appHome = appRouter.appHome;
    isRenderRouterView = appRouter.isRenderRouterView;
  } // 如果用户传了自定义的 router


  if (componentOptions.router) {
    ZRouterClass.router = componentOptions.router;
  } else {
    appMain = options.appMain;
    appHome = options.appHome;
    isRenderRouterView = false;
  }

  ZuiCoreClass.$app = new Vue({
    el: options.appId || '#app',
    vuetify: ui,

    render(createElement) {
      return createMain(createElement, options, appMain, appHome, isRenderRouterView);
    },

    ...componentOptions
  });
  return ZuiCoreClass.$app;
}
//# sourceMappingURL=createApp.js.map