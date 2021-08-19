/* eslint-disable no-new */
import Vue from 'vue'
import Zui, { colors } from '@zwd/z-ui/lib'
import { VuetifyParsedTheme } from '../services/theme'

new Zui()

new Zui({})

new Zui({
  breakpoint: {},
})

new Zui({
  breakpoint: {
    scrollBarWidth: 20,
  },
})

new Zui({
  breakpoint: {
    mobileBreakpoint: 900,
  },
})

new Zui({
  breakpoint: {
    thresholds: {
      lg: 1,
      md: 2,
      sm: 3,
      xs: 4,
    },
  },
})

new Zui({
  icons: {
    iconfont: 'fa',
  },
})

new Zui({
  icons: {
    component: {},
  },
})

new Zui({
  icons: {
    iconfont: 'fa',
    values: {
      cancel: 'foo',
    },
  },
})

new Zui({
  locale: {
    locales: {
      foo: {
        bar: 'baz',
      },
    },
  },
})

new Zui({
  locale: {
    current: 'foo',
    locales: {
      foo: {
        bar: 'baz',
      },
    },
  },
})

new Zui({
  locale: {
    current: 'foo',
    locales: {
      foo: {
        bar: 'baz',
      },
    },
    t: (key: string) => key,
  },
})

new Zui({
  locale: {
    current: 'foo',
    locales: {
      foo: {
        bar: 'baz',
      },
    },
    t: (key: string, ...params: Array<string | number>) => key,
  },
})

new Zui({
  theme: {},
})

new Zui({
  theme: {
    dark: true,
  },
})

new Zui({
  theme: {
    disable: true,
  },
})

new Zui({
  theme: {
    default: 'dark',
  },
})

new Zui({
  theme: {
    themes: {
      light: {
        primary: '#bada55',
      },
    },
  },
})

new Zui({
  theme: {
    themes: {
      dark: {
        primary: {
          base: '#bada55',
        },
        success: '#012345',
      },
      light: {
        success: colors.green.base,
      },
    },
  },
})

new Zui({
  theme: {
    options: {
      cspNonce: 'foo',
      customProperties: true,
      minifyTheme: (css: string) => css,
      themeCache: {
        get: (parsedTheme: VuetifyParsedTheme) => '',
        set: (parsedTheme: VuetifyParsedTheme, css: string) => {},
      },
      variations: false,
    },
  },
})

new Vue({
  vuetify: new Zui(),
  render: h => h('div'),
})
