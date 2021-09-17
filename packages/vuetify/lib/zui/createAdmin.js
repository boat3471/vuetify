import Vue from 'vue';
import VueRouter from 'vue-router';
import { ZAdminApp } from './components/ZAdmin';
import { ZuiCoreClass } from './ZuiCore';
import { createZui } from './createZui';
import { ZRouterClass } from './ZRouter';
/**
 * 创建主程序
 * @internal
 */

function createMain(h, options, appHome) {
  return h(ZAdminApp, {
    staticClass: `z-app ${options.appClass || ''}`,
    props: {
      id: options.appId || 'app'
    }
  }, // 子元素列表
  [appHome ? h(appHome) : '']);
}
/**
 * 创建Admin, 基于 @zwd/z-ui
 * @param options
 */


export function createAdmin(options) {
  options = options || {};
  ZuiCoreClass.type = 'admin'; // 安装 vue-router

  Vue.use(VueRouter); // 安装 zui-core

  Vue.use(ZuiCoreClass, options);
  const {
    $menu,
    $theme,
    $auth
  } = ZuiCoreClass.genInstance(); // 设置认证

  $auth.setting(options.auth || {}); // 设置菜单

  $menu.settingMenus(options.menus || [], false); // 设置 vuetify and zui

  const presetOptions = $theme.getDefaultPreset(options.presetOptions);
  const ui = createZui(presetOptions, options.useOptions);
  ZuiCoreClass.settingVuetify(ui.framework);
  const componentOptions = options.componentOptions || {};
  const adminRouter = ZRouterClass.adminRouter || ZRouterClass.genAdminRouter({
    appMain: options.appMain,
    appHome: options.appHome,
    redirect: options.redirect
  });
  let router = componentOptions.router;
  let appHome;

  if (adminRouter) {
    router = adminRouter.getRouter();
    appHome = adminRouter.appHome;
  }

  if (router) {
    componentOptions.router = router;
    ZRouterClass.router = router;
  } // 生成 vue 选项


  const vueOptions = {
    el: options.appId || '#app',
    vuetify: ui,

    mounted() {},

    render(h) {
      return createMain(h, options, appHome || options.appHome);
    },

    ...componentOptions
  };
  ZuiCoreClass.$app = new Vue(vueOptions);
  return ZuiCoreClass.$app;
}
//# sourceMappingURL=createAdmin.js.map