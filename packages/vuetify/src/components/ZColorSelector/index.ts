import Vue from 'vue'
// @ts-ignore
import ZColorSelectorComponent from '../../../components/ZColorSelector/index.vue'

export const ZColorSelector = Vue.extend(ZColorSelectorComponent).extend({
  name: 'z-color-selector',
})

export default ZColorSelector
