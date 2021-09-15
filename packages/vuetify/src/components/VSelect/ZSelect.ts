import mixins from '../../util/mixins'
import { consoleError } from '../../util/console'
import VSelect from './VSelect'
import VSelectList from './VSelectList'

import generateZSizeable from '../../zui/util/generateZSizeable'
import './ZSelect/index.scss'

const Sizeable = generateZSizeable([
  'v-select-size--x-small',
  'v-select-size--small',
  'v-select-size--default',
  'v-select-size--large',
  'v-select-size--x-large',
])

const ZSelectList = mixins(VSelectList).extend({
  props: {
    sizeableClasses: Object,
  },
  computed: {
    themeClasses () {
      // @ts-ignore
      const classes = VSelect.options.computed.themeClasses.call(this)
      return {
        ...classes,
        ...this.sizeableClasses,
      }
    },
  },
})

export const ZSelect = mixins(VSelect, Sizeable).extend({
  props: {
    dense: {
      type: Boolean,
      default: true,
    },
    async: {
      type: Function,
      default: null,
    },
    asyncParams: {
      type: Object,
      default: null,
    },
    hideDetails: {
      type: [Boolean, String],
      default: 'auto',
    },
  },
  computed: {
    classes () {
      const sizeableClasses = (this as any).sizeableClasses
      return {
        ...VSelect.options.computed.classes.call(this),
        ...sizeableClasses,
      }
    },
    listData () {
      const data = VSelect.options.computed.listData.call(this)
      // @ts-ignore
      data.props.sizeableClasses = (this as any).sizeableClasses
      return data
    },
    staticList () {
      if (this.$slots['no-data'] || this.$slots['prepend-item'] || this.$slots['append-item']) {
        consoleError('assert: staticList should not be called if slots are used')
      }
      return this.$createElement(ZSelectList, (this as any).listData)
    },
    $_menuProps () {
      const data = VSelect.options.computed.$_menuProps.call(this)
      // @ts-ignore
      data.offsetY = true
      return data
    },
  },
  watch: {
    async (val) {
      if (val) {
        (this as any).loading = true
      }
    },
    asyncParams (val) {
      (this as any).asyncRequest(val)
    },
  },
  created () {
    const { asyncParams } = this.$props;
    (this as any).asyncRequest(asyncParams)
  },
  methods: {
    genProgress () {
      // VSelect.options.methods.genProgress.call(this);
    },
    asyncRequest (params: object) {
      const { async } = this.$props
      if (async) {
        async.call(this, params)
      }
    },
    onMouseUp (e: MouseEvent) {
      VSelect.options.methods.onMouseUp.call(this, e)
    },
    genListWithSlot () {
      const slots = ['prepend-item', 'no-data', 'append-item'].filter(slotName => this.$slots[slotName])
        .map(slotName => this.$createElement('template', {
          slot: slotName,
        }, this.$slots[slotName]))

      return this.$createElement(VSelectList, {
        ...(this as any).listData,
      }, slots)
    },
  },
}).extend({
  name: 'z-select',
})

export default ZSelect
