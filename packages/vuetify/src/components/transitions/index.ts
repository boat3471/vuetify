import {
  createSimpleTransition,
  createJavascriptTransition,
} from './createTransition'

import ExpandTransitionGenerator from './expand-transition'

// Component specific transitions
export const VCarouselTransition = createSimpleTransition('carousel-transition')
export const VCarouselReverseTransition = createSimpleTransition('carousel-reverse-transition')
export const VTabTransition = createSimpleTransition('tab-transition')
export const VTabReverseTransition = createSimpleTransition('tab-reverse-transition')
export const VMenuTransition = createSimpleTransition('menu-transition')
export const VFabTransition = createSimpleTransition('fab-transition', 'center center', 'out-in')

// Generic transitions
export const VDialogTransition = createSimpleTransition('dialog-transition')
export const VDialogBottomTransition = createSimpleTransition('dialog-bottom-transition')
export const VDialogTopTransition = createSimpleTransition('dialog-top-transition')
export const VFadeTransition = createSimpleTransition('fade-transition')
export const VScaleTransition = createSimpleTransition('scale-transition')
export const VScrollXTransition = createSimpleTransition('scroll-x-transition')
export const VScrollXReverseTransition = createSimpleTransition('scroll-x-reverse-transition')
export const VScrollYTransition = createSimpleTransition('scroll-y-transition')
export const VScrollYReverseTransition = createSimpleTransition('scroll-y-reverse-transition')
export const VSlideXTransition = createSimpleTransition('slide-x-transition')
export const VSlideXReverseTransition = createSimpleTransition('slide-x-reverse-transition')
export const VSlideYTransition = createSimpleTransition('slide-y-transition')
export const VSlideYReverseTransition = createSimpleTransition('slide-y-reverse-transition')

// Javascript transitions
export const VExpandTransition = createJavascriptTransition('expand-transition', ExpandTransitionGenerator())
export const VExpandXTransition = createJavascriptTransition('expand-x-transition', ExpandTransitionGenerator('', true))

export const ZCarouselTransition = createSimpleTransition('carousel-transition')
export const ZCarouselReverseTransition = createSimpleTransition('carousel-reverse-transition')
export const ZTabTransition = createSimpleTransition('tab-transition')
export const ZTabReverseTransition = createSimpleTransition('tab-reverse-transition')
export const ZMenuTransition = createSimpleTransition('menu-transition')
export const ZFabTransition = createSimpleTransition('fab-transition', 'center center', 'out-in')

// Generic transitions
export const ZDialogTransition = createSimpleTransition('dialog-transition')
export const ZDialogBottomTransition = createSimpleTransition('dialog-bottom-transition')
export const ZDialogTopTransition = createSimpleTransition('dialog-top-transition')
export const ZFadeTransition = createSimpleTransition('fade-transition')
export const ZScaleTransition = createSimpleTransition('scale-transition')
export const ZScrollXTransition = createSimpleTransition('scroll-x-transition')
export const ZScrollXReverseTransition = createSimpleTransition('scroll-x-reverse-transition')
export const ZScrollYTransition = createSimpleTransition('scroll-y-transition')
export const ZScrollYReverseTransition = createSimpleTransition('scroll-y-reverse-transition')
export const ZSlideXTransition = createSimpleTransition('slide-x-transition')
export const ZSlideXReverseTransition = createSimpleTransition('slide-x-reverse-transition')
export const ZSlideYTransition = createSimpleTransition('slide-y-transition')
export const ZSlideYReverseTransition = createSimpleTransition('slide-y-reverse-transition')

// Javascript transitions
export const ZExpandTransition = createJavascriptTransition('expand-transition', ExpandTransitionGenerator())
export const ZExpandXTransition = createJavascriptTransition('expand-x-transition', ExpandTransitionGenerator('', true))

export default {
  $_vuetify_subcomponents: {
    VCarouselTransition,
    VCarouselReverseTransition,
    VDialogTransition,
    VDialogBottomTransition,
    VDialogTopTransition,
    VFabTransition,
    VFadeTransition,
    VMenuTransition,
    VScaleTransition,
    VScrollXTransition,
    VScrollXReverseTransition,
    VScrollYTransition,
    VScrollYReverseTransition,
    VSlideXTransition,
    VSlideXReverseTransition,
    VSlideYTransition,
    VSlideYReverseTransition,
    VTabReverseTransition,
    VTabTransition,
    VExpandTransition,
    VExpandXTransition,
    ZCarouselTransition,
    ZCarouselReverseTransition,
    ZDialogTransition,
    ZDialogBottomTransition,
    ZDialogTopTransition,
    ZFabTransition,
    ZFadeTransition,
    ZMenuTransition,
    ZScaleTransition,
    ZScrollXTransition,
    ZScrollXReverseTransition,
    ZScrollYTransition,
    ZScrollYReverseTransition,
    ZSlideXTransition,
    ZSlideXReverseTransition,
    ZSlideYTransition,
    ZSlideYReverseTransition,
    ZTabReverseTransition,
    ZTabTransition,
    ZExpandTransition,
    ZExpandXTransition,
  },
}
