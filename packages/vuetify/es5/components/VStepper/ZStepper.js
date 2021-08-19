"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZStepperItems = exports.ZStepperHeader = exports.ZStepperStep = exports.ZStepperContent = exports.ZStepper = void 0;

var _mixins = _interopRequireDefault(require("../../util/mixins"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZStepper = (0, _mixins.default)(_index.VStepper).extend({
  name: 'z-stepper'
});
exports.ZStepper = ZStepper;
var ZStepperContent = (0, _mixins.default)(_index.VStepperContent).extend({
  name: 'z-stepper-content'
});
exports.ZStepperContent = ZStepperContent;
var ZStepperStep = (0, _mixins.default)(_index.VStepperStep).extend({
  name: 'z-stepper-step'
});
exports.ZStepperStep = ZStepperStep;
var ZStepperHeader = (0, _mixins.default)(_index.VStepperHeader).extend({
  name: 'z-stepper-header'
});
exports.ZStepperHeader = ZStepperHeader;
var ZStepperItems = (0, _mixins.default)(_index.VStepperItems).extend({
  name: 'z-stepper-items'
});
exports.ZStepperItems = ZStepperItems;
var _default = {
  $_vuetify_subcomponents: {
    ZStepper: ZStepper,
    ZStepperContent: ZStepperContent,
    ZStepperStep: ZStepperStep,
    ZStepperHeader: ZStepperHeader,
    ZStepperItems: ZStepperItems
  }
};
exports.default = _default;
//# sourceMappingURL=ZStepper.js.map