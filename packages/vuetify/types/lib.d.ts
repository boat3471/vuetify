declare module '@zwd/z-ui/lib' {
  import Zui from '@zwd/z-ui'
  import { Colors } from '@zwd/z-ui/lib/util/colors'

  export default Zui

  const colors: Colors

  export {
    colors,
  }
  export * from '@zwd/z-ui/lib/components'
  export * from '@zwd/z-ui/lib/directives'
}

declare module '@zwd/z-ui/lib/components' {
  import { VueConstructor } from 'vue'

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
  const ZOtpInput: VueConstructor
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
    ZOtpInput,
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

declare module '@zwd/z-ui/lib/directives' {
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

declare module '@zwd/z-ui/lib/services/goto' {
  import { GoToOptions, VuetifyGoToTarget } from '@zwd/z-ui/types/services/goto'

  export default function goTo(target: VuetifyGoToTarget, options?: Partial<GoToOptions>): Promise<number>
}
