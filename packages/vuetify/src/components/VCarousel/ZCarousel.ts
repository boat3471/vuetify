import mixins from '../../util/mixins'
import {
  VCarousel,
  VCarouselItem,
} from './index'

export const ZCarousel = mixins(VCarousel).extend({
  name: 'z-carousel',
})

export const ZCarouselItem = mixins(VCarouselItem).extend({
  name: 'z-carousel-item',
})

export default {
  $_vuetify_subcomponents: {
    ZCarousel,
    ZCarouselItem,
  },
}
