import Vue from 'vue';
import VueRouter from 'vue-router';
export function installRouter() {
  const installVueRouter = VueRouter.install;
  installVueRouter.installed !== true || Vue.use(VueRouter);
}
export { VueRouter };
//# sourceMappingURL=installRouter.js.map