import mixins from '../../util/mixins';
import { VStepper, VStepperContent, VStepperStep, VStepperHeader, VStepperItems } from './index';
export const ZStepper = mixins(VStepper).extend({
  name: 'z-stepper'
});
export const ZStepperContent = mixins(VStepperContent).extend({
  name: 'z-stepper-content'
});
export const ZStepperStep = mixins(VStepperStep).extend({
  name: 'z-stepper-step'
});
export const ZStepperHeader = mixins(VStepperHeader).extend({
  name: 'z-stepper-header'
});
export const ZStepperItems = mixins(VStepperItems).extend({
  name: 'z-stepper-items'
});
export default {
  $_vuetify_subcomponents: {
    ZStepper,
    ZStepperContent,
    ZStepperStep,
    ZStepperHeader,
    ZStepperItems
  }
};
//# sourceMappingURL=ZStepper.js.map