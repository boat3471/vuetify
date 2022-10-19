"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZVirtualTable = exports.ZSimpleTable = exports.ZTableOverflow = exports.ZEditDialog = exports.ZDataTableHeader = exports.ZDataTable = void 0;

var _mixins = _interopRequireDefault(require("../../util/mixins"));

var _index = require("./index");

require("../../../src/components/VDataTable/ZDataTable.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZDataTable = (0, _mixins.default)(_index.VDataTable).extend({
  name: 'z-data-table'
});
exports.ZDataTable = ZDataTable;
var ZDataTableHeader = (0, _mixins.default)(_index.VDataTableHeader).extend({
  name: 'z-data-table-header'
});
exports.ZDataTableHeader = ZDataTableHeader;
var ZEditDialog = (0, _mixins.default)(_index.VEditDialog).extend({
  name: 'z-edit-dialog'
});
exports.ZEditDialog = ZEditDialog;
var ZTableOverflow = (0, _mixins.default)(_index.VTableOverflow).extend({
  name: 'z-table-overflow'
});
exports.ZTableOverflow = ZTableOverflow;
var ZSimpleTable = (0, _mixins.default)(_index.VSimpleTable).extend({
  name: 'z-simple-table'
});
exports.ZSimpleTable = ZSimpleTable;
var ZVirtualTable = (0, _mixins.default)(_index.VVirtualTable).extend({
  name: 'z-virtual-table'
});
exports.ZVirtualTable = ZVirtualTable;
var _default = {
  $_vuetify_subcomponents: {
    ZDataTable: ZDataTable,
    ZDataTableHeader: ZDataTableHeader,
    ZEditDialog: ZEditDialog,
    ZTableOverflow: ZTableOverflow,
    ZSimpleTable: ZSimpleTable,
    ZVirtualTable: ZVirtualTable
  }
};
exports.default = _default;
//# sourceMappingURL=ZDataTable.js.map