declare module 'vuetify/lib' {
  import Vuetify from 'vuetify'
  import { Colors } from 'vuetify/lib/util/colors'

  export default Vuetify

  const colors: Colors

  export {
    colors,
  }
  export * from 'vuetify/lib/components'
  export * from 'vuetify/lib/directives'
}

declare module 'vuetify/lib/components' {
  import { VueConstructor } from 'vue'

  const VApp: VueConstructor
  const VAppBar: VueConstructor
  const VAppBarNavIcon: VueConstructor
  const VAppBarTitle: VueConstructor
  const VAlert: VueConstructor
  const VAutocomplete: VueConstructor
  const VAvatar: VueConstructor
  const VBadge: VueConstructor
  const VBanner: VueConstructor
  const VBottomNavigation: VueConstructor
  const VBottomSheet: VueConstructor
  const VBreadcrumbs: VueConstructor
  const VBreadcrumbsItem: VueConstructor
  const VBreadcrumbsDivider: VueConstructor
  const VBtn: VueConstructor
  const VBtnToggle: VueConstructor
  const VCalendar: VueConstructor
  const VCalendarCategory: VueConstructor
  const VCalendarDaily: VueConstructor
  const VCalendarWeekly: VueConstructor
  const VCalendarMonthly: VueConstructor
  const VCard: VueConstructor
  const VCardTitle: VueConstructor
  const VCardSubtitle: VueConstructor
  const VCardActions: VueConstructor
  const VCardText: VueConstructor
  const VCarousel: VueConstructor
  const VCarouselItem: VueConstructor
  const VCheckbox: VueConstructor
  const VSimpleCheckbox: VueConstructor
  const VChip: VueConstructor
  const VChipGroup: VueConstructor
  const VColorPicker: VueConstructor
  const VColorPickerSwatches: VueConstructor
  const VColorPickerCanvas: VueConstructor
  const VContent: VueConstructor
  const VCombobox: VueConstructor
  const VCounter: VueConstructor
  const VData: VueConstructor
  const VDataIterator: VueConstructor
  const VDataFooter: VueConstructor
  const VDataTable: VueConstructor
  const VEditDialog: VueConstructor
  const VTableOverflow: VueConstructor
  const VDataTableHeader: VueConstructor
  const VSimpleTable: VueConstructor
  const VVirtualTable: VueConstructor
  const VVirtualScroll: VueConstructor
  const VDatePicker: VueConstructor
  const VDatePickerTitle: VueConstructor
  const VDatePickerHeader: VueConstructor
  const VDatePickerDateTable: VueConstructor
  const VDatePickerMonthTable: VueConstructor
  const VDatePickerYears: VueConstructor
  const VDialog: VueConstructor
  const VDivider: VueConstructor
  const VExpansionPanels: VueConstructor
  const VExpansionPanel: VueConstructor
  const VExpansionPanelHeader: VueConstructor
  const VExpansionPanelContent: VueConstructor
  const VFileInput: VueConstructor
  const VFooter: VueConstructor
  const VForm: VueConstructor
  const VContainer: VueConstructor
  const VCol: VueConstructor
  const VRow: VueConstructor
  const VSpacer: VueConstructor
  const VLayout: VueConstructor
  const VFlex: VueConstructor
  const VHover: VueConstructor
  const VIcon: VueConstructor
  const VImg: VueConstructor
  const VInput: VueConstructor
  const VItem: VueConstructor
  const VItemGroup: VueConstructor
  const VLabel: VueConstructor
  const VLazy: VueConstructor
  const VListItemActionText: VueConstructor
  const VListItemContent: VueConstructor
  const VListItemTitle: VueConstructor
  const VListItemSubtitle: VueConstructor
  const VList: VueConstructor
  const VListGroup: VueConstructor
  const VListItem: VueConstructor
  const VListItemAction: VueConstructor
  const VListItemAvatar: VueConstructor
  const VListItemIcon: VueConstructor
  const VListItemGroup: VueConstructor
  const VMain: VueConstructor
  const VMenu: VueConstructor
  const VMessages: VueConstructor
  const VNavigationDrawer: VueConstructor
  const VOverflowBtn: VueConstructor
  const VOverlay: VueConstructor
  const VPagination: VueConstructor
  const VSheet: VueConstructor
  const VParallax: VueConstructor
  const VPicker: VueConstructor
  const VProgressCircular: VueConstructor
  const VProgressLinear: VueConstructor
  const VRadioGroup: VueConstructor
  const VRadio: VueConstructor
  const VRangeSlider: VueConstructor
  const VRating: VueConstructor
  const VResponsive: VueConstructor
  const VSelect: VueConstructor
  const VSkeletonLoader: VueConstructor
  const VSlider: VueConstructor
  const VSlideGroup: VueConstructor
  const VSlideItem: VueConstructor
  const VSnackbar: VueConstructor
  const VSparkline: VueConstructor
  const VSpeedDial: VueConstructor
  const VStepper: VueConstructor
  const VStepperContent: VueConstructor
  const VStepperStep: VueConstructor
  const VStepperHeader: VueConstructor
  const VStepperItems: VueConstructor
  const VSubheader: VueConstructor
  const VSwitch: VueConstructor
  const VSystemBar: VueConstructor
  const VTabs: VueConstructor
  const VTab: VueConstructor
  const VTabItem: VueConstructor
  const VTabsItems: VueConstructor
  const VTabsSlider: VueConstructor
  const VTextarea: VueConstructor
  const VTextField: VueConstructor
  const VThemeProvider: VueConstructor
  const VTimeline: VueConstructor
  const VTimelineItem: VueConstructor
  const VTimePicker: VueConstructor
  const VTimePickerClock: VueConstructor
  const VTimePickerTitle: VueConstructor
  const VToolbar: VueConstructor
  const VToolbarItems: VueConstructor
  const VToolbarTitle: VueConstructor
  const VTooltip: VueConstructor
  const VTreeview: VueConstructor
  const VTreeviewNode: VueConstructor
  const VWindow: VueConstructor
  const VWindowItem: VueConstructor
  const VCarouselTransition: VueConstructor
  const VCarouselReverseTransition: VueConstructor
  const VTabTransition: VueConstructor
  const VTabReverseTransition: VueConstructor
  const VMenuTransition: VueConstructor
  const VFabTransition: VueConstructor
  const VDialogTransition: VueConstructor
  const VDialogBottomTransition: VueConstructor
  const VDialogTopTransition: VueConstructor
  const VFadeTransition: VueConstructor
  const VScaleTransition: VueConstructor
  const VScrollXTransition: VueConstructor
  const VScrollXReverseTransition: VueConstructor
  const VScrollYTransition: VueConstructor
  const VScrollYReverseTransition: VueConstructor
  const VSlideXTransition: VueConstructor
  const VSlideXReverseTransition: VueConstructor
  const VSlideYTransition: VueConstructor
  const VSlideYReverseTransition: VueConstructor
  const VExpandTransition: VueConstructor
  const VExpandXTransition: VueConstructor
  const ZApp: VueConstructor
  const ZAppBar: VueConstructor
  const ZAppBarNavIcon: VueConstructor
  const ZAppBarTitle: VueConstructor
  const ZAlert: VueConstructor
  const ZAutocomplete: VueConstructor
  const ZAvatar: VueConstructor
  const ZBadge: VueConstructor
  const ZBanner: VueConstructor
  const ZBottomNavigation: VueConstructor
  const ZBottomSheet: VueConstructor
  const ZBreadcrumbs: VueConstructor
  const ZBreadcrumbsItem: VueConstructor
  const ZBreadcrumbsDivider: VueConstructor
  const ZBtn: VueConstructor
  const ZBtnToggle: VueConstructor
  const ZCalendar: VueConstructor
  const ZCalendarCategory: VueConstructor
  const ZCalendarDaily: VueConstructor
  const ZCalendarWeekly: VueConstructor
  const ZCalendarMonthly: VueConstructor
  const ZCard: VueConstructor
  const ZCardTitle: VueConstructor
  const ZCardSubtitle: VueConstructor
  const ZCardActions: VueConstructor
  const ZCardText: VueConstructor
  const ZCarousel: VueConstructor
  const ZCarouselItem: VueConstructor
  const ZCheckbox: VueConstructor
  const ZSimpleCheckbox: VueConstructor
  const ZChip: VueConstructor
  const ZChipGroup: VueConstructor
  const ZColorPicker: VueConstructor
  const ZColorPickerSwatches: VueConstructor
  const ZColorPickerCanvas: VueConstructor
  const ZContent: VueConstructor
  const ZCombobox: VueConstructor
  const ZCounter: VueConstructor
  const ZData: VueConstructor
  const ZDataIterator: VueConstructor
  const ZDataFooter: VueConstructor
  const ZDataTable: VueConstructor
  const ZEditDialog: VueConstructor
  const ZTableOverflow: VueConstructor
  const ZDataTableHeader: VueConstructor
  const ZSimpleTable: VueConstructor
  const ZVirtualTable: VueConstructor
  const ZVirtualScroll: VueConstructor
  const ZDatePicker: VueConstructor
  const ZDatePickerTitle: VueConstructor
  const ZDatePickerHeader: VueConstructor
  const ZDatePickerDateTable: VueConstructor
  const ZDatePickerMonthTable: VueConstructor
  const ZDatePickerYears: VueConstructor
  const ZDialog: VueConstructor
  const ZDivider: VueConstructor
  const ZExpansionPanels: VueConstructor
  const ZExpansionPanel: VueConstructor
  const ZExpansionPanelHeader: VueConstructor
  const ZExpansionPanelContent: VueConstructor
  const ZFileInput: VueConstructor
  const ZFooter: VueConstructor
  const ZForm: VueConstructor
  const ZContainer: VueConstructor
  const ZCol: VueConstructor
  const ZRow: VueConstructor
  const ZSpacer: VueConstructor
  const ZLayout: VueConstructor
  const ZFlex: VueConstructor
  const ZHover: VueConstructor
  const ZIcon: VueConstructor
  const ZImg: VueConstructor
  const ZInput: VueConstructor
  const ZItem: VueConstructor
  const ZItemGroup: VueConstructor
  const ZLabel: VueConstructor
  const ZLazy: VueConstructor
  const ZListItemActionText: VueConstructor
  const ZListItemContent: VueConstructor
  const ZListItemTitle: VueConstructor
  const ZListItemSubtitle: VueConstructor
  const ZList: VueConstructor
  const ZListGroup: VueConstructor
  const ZListItem: VueConstructor
  const ZListItemAction: VueConstructor
  const ZListItemAvatar: VueConstructor
  const ZListItemIcon: VueConstructor
  const ZListItemGroup: VueConstructor
  const ZMain: VueConstructor
  const ZMenu: VueConstructor
  const ZMessages: VueConstructor
  const ZNavigationDrawer: VueConstructor
  const ZOverflowBtn: VueConstructor
  const ZOverlay: VueConstructor
  const ZPagination: VueConstructor
  const ZSheet: VueConstructor
  const ZParallax: VueConstructor
  const ZPicker: VueConstructor
  const ZProgressCircular: VueConstructor
  const ZProgressLinear: VueConstructor
  const ZRadioGroup: VueConstructor
  const ZRadio: VueConstructor
  const ZRangeSlider: VueConstructor
  const ZRating: VueConstructor
  const ZResponsive: VueConstructor
  const ZSelect: VueConstructor
  const ZSkeletonLoader: VueConstructor
  const ZSlider: VueConstructor
  const ZSlideGroup: VueConstructor
  const ZSlideItem: VueConstructor
  const ZSnackbar: VueConstructor
  const ZSparkline: VueConstructor
  const ZSpeedDial: VueConstructor
  const ZStepper: VueConstructor
  const ZStepperContent: VueConstructor
  const ZStepperStep: VueConstructor
  const ZStepperHeader: VueConstructor
  const ZStepperItems: VueConstructor
  const ZSubheader: VueConstructor
  const ZSwitch: VueConstructor
  const ZSystemBar: VueConstructor
  const ZTabs: VueConstructor
  const ZTab: VueConstructor
  const ZTabItem: VueConstructor
  const ZTabsItems: VueConstructor
  const ZTabsSlider: VueConstructor
  const ZTextarea: VueConstructor
  const ZTextField: VueConstructor
  const ZThemeProvider: VueConstructor
  const ZTimeline: VueConstructor
  const ZTimelineItem: VueConstructor
  const ZTimePicker: VueConstructor
  const ZTimePickerClock: VueConstructor
  const ZTimePickerTitle: VueConstructor
  const ZToolbar: VueConstructor
  const ZToolbarItems: VueConstructor
  const ZToolbarTitle: VueConstructor
  const ZTooltip: VueConstructor
  const ZTreeview: VueConstructor
  const ZTreeviewNode: VueConstructor
  const ZWindow: VueConstructor
  const ZWindowItem: VueConstructor
  const ZCarouselTransition: VueConstructor
  const ZCarouselReverseTransition: VueConstructor
  const ZTabTransition: VueConstructor
  const ZTabReverseTransition: VueConstructor
  const ZMenuTransition: VueConstructor
  const ZFabTransition: VueConstructor
  const ZDialogTransition: VueConstructor
  const ZDialogBottomTransition: VueConstructor
  const ZDialogTopTransition: VueConstructor
  const ZFadeTransition: VueConstructor
  const ZScaleTransition: VueConstructor
  const ZScrollXTransition: VueConstructor
  const ZScrollXReverseTransition: VueConstructor
  const ZScrollYTransition: VueConstructor
  const ZScrollYReverseTransition: VueConstructor
  const ZSlideXTransition: VueConstructor
  const ZSlideXReverseTransition: VueConstructor
  const ZSlideYTransition: VueConstructor
  const ZSlideYReverseTransition: VueConstructor
  const ZExpandTransition: VueConstructor
  const ZExpandXTransition: VueConstructor

  export {
    VApp,
    VAppBar,
    VAppBarNavIcon,
    VAppBarTitle,
    VAlert,
    VAutocomplete,
    VAvatar,
    VBadge,
    VBanner,
    VBottomNavigation,
    VBottomSheet,
    VBreadcrumbs,
    VBreadcrumbsItem,
    VBreadcrumbsDivider,
    VBtn,
    VBtnToggle,
    VCalendar,
    VCalendarCategory,
    VCalendarDaily,
    VCalendarWeekly,
    VCalendarMonthly,
    VCard,
    VCardTitle,
    VCardSubtitle,
    VCardActions,
    VCardText,
    VCarousel,
    VCarouselItem,
    VCheckbox,
    VSimpleCheckbox,
    VChip,
    VChipGroup,
    VColorPicker,
    VColorPickerSwatches,
    VColorPickerCanvas,
    VContent,
    VCombobox,
    VCounter,
    VData,
    VDataIterator,
    VDataFooter,
    VDataTable,
    VEditDialog,
    VTableOverflow,
    VDataTableHeader,
    VSimpleTable,
    VVirtualTable,
    VVirtualScroll,
    VDatePicker,
    VDatePickerTitle,
    VDatePickerHeader,
    VDatePickerDateTable,
    VDatePickerMonthTable,
    VDatePickerYears,
    VDialog,
    VDivider,
    VExpansionPanels,
    VExpansionPanel,
    VExpansionPanelHeader,
    VExpansionPanelContent,
    VFileInput,
    VFooter,
    VForm,
    VContainer,
    VCol,
    VRow,
    VSpacer,
    VLayout,
    VFlex,
    VHover,
    VIcon,
    VImg,
    VInput,
    VItem,
    VItemGroup,
    VLabel,
    VLazy,
    VListItemActionText,
    VListItemContent,
    VListItemTitle,
    VListItemSubtitle,
    VList,
    VListGroup,
    VListItem,
    VListItemAction,
    VListItemAvatar,
    VListItemIcon,
    VListItemGroup,
    VMain,
    VMenu,
    VMessages,
    VNavigationDrawer,
    VOverflowBtn,
    VOverlay,
    VPagination,
    VSheet,
    VParallax,
    VPicker,
    VProgressCircular,
    VProgressLinear,
    VRadioGroup,
    VRadio,
    VRangeSlider,
    VRating,
    VResponsive,
    VSelect,
    VSkeletonLoader,
    VSlider,
    VSlideGroup,
    VSlideItem,
    VSnackbar,
    VSparkline,
    VSpeedDial,
    VStepper,
    VStepperContent,
    VStepperStep,
    VStepperHeader,
    VStepperItems,
    VSubheader,
    VSwitch,
    VSystemBar,
    VTabs,
    VTab,
    VTabItem,
    VTabsItems,
    VTabsSlider,
    VTextarea,
    VTextField,
    VThemeProvider,
    VTimeline,
    VTimelineItem,
    VTimePicker,
    VTimePickerClock,
    VTimePickerTitle,
    VToolbar,
    VToolbarItems,
    VToolbarTitle,
    VTooltip,
    VTreeview,
    VTreeviewNode,
    VWindow,
    VWindowItem,
    VCarouselTransition,
    VCarouselReverseTransition,
    VTabTransition,
    VTabReverseTransition,
    VMenuTransition,
    VFabTransition,
    VDialogTransition,
    VDialogBottomTransition,
    VDialogTopTransition,
    VFadeTransition,
    VScaleTransition,
    VScrollXTransition,
    VScrollXReverseTransition,
    VScrollYTransition,
    VScrollYReverseTransition,
    VSlideXTransition,
    VSlideXReverseTransition,
    VSlideYTransition,
    VSlideYReverseTransition,
    VExpandTransition,
    VExpandXTransition,
    ZApp,
    ZAppBar,
    ZAppBarNavIcon,
    ZAppBarTitle,
    ZAlert,
    ZAutocomplete,
    ZAvatar,
    ZBadge,
    ZBanner,
    ZBottomNavigation,
    ZBottomSheet,
    ZBreadcrumbs,
    ZBreadcrumbsItem,
    ZBreadcrumbsDivider,
    ZBtn,
    ZBtnToggle,
    ZCalendar,
    ZCalendarCategory,
    ZCalendarDaily,
    ZCalendarWeekly,
    ZCalendarMonthly,
    ZCard,
    ZCardTitle,
    ZCardSubtitle,
    ZCardActions,
    ZCardText,
    ZCarousel,
    ZCarouselItem,
    ZCheckbox,
    ZSimpleCheckbox,
    ZChip,
    ZChipGroup,
    ZColorPicker,
    ZColorPickerSwatches,
    ZColorPickerCanvas,
    ZContent,
    ZCombobox,
    ZCounter,
    ZData,
    ZDataIterator,
    ZDataFooter,
    ZDataTable,
    ZEditDialog,
    ZTableOverflow,
    ZDataTableHeader,
    ZSimpleTable,
    ZVirtualTable,
    ZVirtualScroll,
    ZDatePicker,
    ZDatePickerTitle,
    ZDatePickerHeader,
    ZDatePickerDateTable,
    ZDatePickerMonthTable,
    ZDatePickerYears,
    ZDialog,
    ZDivider,
    ZExpansionPanels,
    ZExpansionPanel,
    ZExpansionPanelHeader,
    ZExpansionPanelContent,
    ZFileInput,
    ZFooter,
    ZForm,
    ZContainer,
    ZCol,
    ZRow,
    ZSpacer,
    ZLayout,
    ZFlex,
    ZHover,
    ZIcon,
    ZImg,
    ZInput,
    ZItem,
    ZItemGroup,
    ZLabel,
    ZLazy,
    ZListItemActionText,
    ZListItemContent,
    ZListItemTitle,
    ZListItemSubtitle,
    ZList,
    ZListGroup,
    ZListItem,
    ZListItemAction,
    ZListItemAvatar,
    ZListItemIcon,
    ZListItemGroup,
    ZMain,
    ZMenu,
    ZMessages,
    ZNavigationDrawer,
    ZOverflowBtn,
    ZOverlay,
    ZPagination,
    ZSheet,
    ZParallax,
    ZPicker,
    ZProgressCircular,
    ZProgressLinear,
    ZRadioGroup,
    ZRadio,
    ZRangeSlider,
    ZRating,
    ZResponsive,
    ZSelect,
    ZSkeletonLoader,
    ZSlider,
    ZSlideGroup,
    ZSlideItem,
    ZSnackbar,
    ZSparkline,
    ZSpeedDial,
    ZStepper,
    ZStepperContent,
    ZStepperStep,
    ZStepperHeader,
    ZStepperItems,
    ZSubheader,
    ZSwitch,
    ZSystemBar,
    ZTabs,
    ZTab,
    ZTabItem,
    ZTabsItems,
    ZTabsSlider,
    ZTextarea,
    ZTextField,
    ZThemeProvider,
    ZTimeline,
    ZTimelineItem,
    ZTimePicker,
    ZTimePickerClock,
    ZTimePickerTitle,
    ZToolbar,
    ZToolbarItems,
    ZToolbarTitle,
    ZTooltip,
    ZTreeview,
    ZTreeviewNode,
    ZWindow,
    ZWindowItem,
    ZCarouselTransition,
    ZCarouselReverseTransition,
    ZTabTransition,
    ZTabReverseTransition,
    ZMenuTransition,
    ZFabTransition,
    ZDialogTransition,
    ZDialogBottomTransition,
    ZDialogTopTransition,
    ZFadeTransition,
    ZScaleTransition,
    ZScrollXTransition,
    ZScrollXReverseTransition,
    ZScrollYTransition,
    ZScrollYReverseTransition,
    ZSlideXTransition,
    ZSlideXReverseTransition,
    ZSlideYTransition,
    ZSlideYReverseTransition,
    ZExpandTransition,
    ZExpandXTransition,
  }
}

declare module 'vuetify/lib/directives' {
  import { DirectiveOptions } from 'vue'

  const ClickOutside: DirectiveOptions
  const Intersect: DirectiveOptions
  const Mutate: DirectiveOptions
  const Resize: DirectiveOptions
  const Ripple: DirectiveOptions
  const Scroll: DirectiveOptions
  const Touch: DirectiveOptions

  export {
    ClickOutside,
    Intersect,
    Mutate,
    Ripple,
    Resize,
    Scroll,
    Touch,
  }
}

declare module 'vuetify/lib/services/goto' {
  import { GoToOptions, VuetifyGoToTarget } from 'vuetify/types/services/goto'

  export default function goTo(target: VuetifyGoToTarget, options?: Partial<GoToOptions>): Promise<number>
}
