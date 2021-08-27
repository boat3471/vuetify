import Vue from 'vue'
import { MainNavMode } from '../services'

export const ZThemeMixin = Vue.extend({
  name: 'z-theme-mixin',
  props: {
  },
  data () {
    return {
      themeStore: {
        darkStatus: true,
        denseMode: false,
        mainNavMode: MainNavMode.Visible,
        mainNavMiniMode: false,
        mainNavPosition: true,
        mainNavVisible: true,
        mainMenuWidth: 275,
        mainMenuExpandMode: false,

        primaryColor: '',
        secondaryColor: '',
        accentColor: '',
        errorColor: '',
        infoColor: '',
        successColor: '',
        warningColor: '',
      },
    }
  },
  created () {
    this.themeStore = this.$ui.getThemeStore() as any
  },
  methods: {
    getPrimaryColor (): string {
      return this.$ui.getPrimaryColor()
    },
  },
})

export default ZThemeMixin
