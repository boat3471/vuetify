"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZExpansionPanelContent = exports.ZExpansionPanelHeader = exports.ZExpansionPanel = exports.ZExpansionPanels = void 0;

var _mixins = _interopRequireDefault(require("../../util/mixins"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZExpansionPanels = (0, _mixins.default)(_index.VExpansionPanels).extend({
  name: 'z-expansion-panels'
});
exports.ZExpansionPanels = ZExpansionPanels;
var ZExpansionPanel = (0, _mixins.default)(_index.VExpansionPanel).extend({
  name: 'z-expansion-panel'
});
exports.ZExpansionPanel = ZExpansionPanel;
var ZExpansionPanelHeader = (0, _mixins.default)(_index.VExpansionPanelHeader).extend({
  name: 'z-expansion-panel-header'
});
exports.ZExpansionPanelHeader = ZExpansionPanelHeader;
var ZExpansionPanelContent = (0, _mixins.default)(_index.VExpansionPanelContent).extend({
  name: 'z-expansion-panel-content'
});
exports.ZExpansionPanelContent = ZExpansionPanelContent;
var _default = {
  $_vuetify_subcomponents: {
    ZExpansionPanels: ZExpansionPanels,
    ZExpansionPanel: ZExpansionPanel,
    ZExpansionPanelHeader: ZExpansionPanelHeader,
    ZExpansionPanelContent: ZExpansionPanelContent
  }
};
exports.default = _default;
//# sourceMappingURL=ZExpansionPanel.js.map