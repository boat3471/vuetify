import Vue from 'vue';
import VueRouter from 'vue-router';
export function installRouter() {
  const installVueRouter = VueRouter.install;

  if (installVueRouter.installed !== true) {
    try {
      Vue.use(VueRouter);
    } catch (e) {// ignore
    }
  }
}
export { VueRouter };
//# sourceMappingURL=installRouter.js.map