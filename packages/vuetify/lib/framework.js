import * as components from './components';
import * as directives from './directives';
import { install } from './install'; // Services

import * as services from './services';
export class Zui {
  constructor(userPreset = {}) {
    this.framework = {
      isHydrating: false
    };
    this.installed = [];
    this.preset = {};
    this.userPreset = {};
    this.userPreset = userPreset;
    this.use(services.Presets);
    this.use(services.Application);
    this.use(services.Breakpoint);
    this.use(services.Goto);
    this.use(services.Icons);
    this.use(services.Lang);
    this.use(services.Theme);
  } // Called on the new vuetify instance
  // bootstrap in install beforeCreate
  // Exposes ssrContext if available


  init(root, ssrContext) {
    this.installed.forEach(property => {
      const service = this.framework[property];
      service.framework = this.framework;
      service.init(root, ssrContext);
    }); // rtl is not installed and
    // will never be called by
    // the init process

    this.framework.rtl = Boolean(this.preset.rtl);
  } // Instantiate a VuetifyService


  use(Service) {
    const property = Service.property;
    if (this.installed.includes(property)) return; // TODO maybe a specific type for arg 2?

    this.framework[property] = new Service(this.preset, this);
    this.installed.push(property);
  }

}
Zui.installed = false;
Zui.version = "2.5.824-beta.9";
Zui.config = {
  silent: false
};
Zui.Components = {};

Zui.install = (IVue, options) => {
  install.call(Zui, IVue, {
    components,
    directives,
    ...options
  });
};

Zui.Components = components;
export default Zui;
//# sourceMappingURL=framework.js.map