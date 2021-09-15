import mixins from '../../util/mixins';
import { VDataTable, VDataTableHeader, VEditDialog, VTableOverflow, VSimpleTable, VVirtualTable } from './index';
import "../../../src/components/VDataTable/ZDataTable.scss";
export const ZDataTable = mixins(VDataTable).extend({
  name: 'z-data-table'
});
export const ZDataTableHeader = mixins(VDataTableHeader).extend({
  name: 'z-data-table-header'
});
export const ZEditDialog = mixins(VEditDialog).extend({
  name: 'z-edit-dialog'
});
export const ZTableOverflow = mixins(VTableOverflow).extend({
  name: 'z-table-overflow'
});
export const ZSimpleTable = mixins(VSimpleTable).extend({
  name: 'z-simple-table'
});
export const ZVirtualTable = mixins(VVirtualTable).extend({
  name: 'z-virtual-table'
});
export default {
  $_vuetify_subcomponents: {
    ZDataTable,
    ZDataTableHeader,
    ZEditDialog,
    ZTableOverflow,
    ZSimpleTable,
    ZVirtualTable
  }
};
//# sourceMappingURL=ZDataTable.js.map