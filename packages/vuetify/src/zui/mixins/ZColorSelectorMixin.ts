import Vue from 'vue'

/**
 * 最大历史个数
 * @type {number}
 */
const maxHistoryLength = 9

/**
 * 历史颜色
 * @type {string[]}
 */
const historyColors: string[] = []

/**
 * 主题色选项列表
 */
const themeColorOptions: ThemeColor[] = [
  { label: '主要色', name: 'primary' },
  { label: '次要色', name: 'secondary' },
  { label: '成功色', name: 'success' },
  { label: '错误色', name: 'error' },
  { label: '警告色', name: 'warning' },
]

interface ThemeColor {
  label: string
  name: string
  color?: string
}

interface ColorValidInfo {
  valid: boolean
  value?: string
  rgb?: string
  hex?: string
}

export interface ColorInfo {
  name: string
  color: string
  value?: string
}

export const ZColorSelectorMixin = Vue.extend({
  props: {
    defaultValue: {
      type: String,
      default: '',
    },
  },
  methods: {
    /**
     * 获取历史颜色列表
     * @return {string[]}
     */
    getHistoryColors () {
      return historyColors
    },

    /**
     * 获取所有主题色选项列表
     * @return {[]}
     */
    getThemeColorOptions () {
      return themeColorOptions
    },

    /**
     * 获取Vuetify主题色
     * @param name
     */
    getVuetifyThemeColor (name: string): any {
      const { dark, themes } = this.$vuetify.theme
      if (dark) {
        return themes.dark[name]
      }
      return themes.light[name]
    },

    /**
     * 根据名称获取主题选项
     * @param name
     * @return {{}}
     */
    findThemeByName (name: string) {
      const theme = themeColorOptions.find(i => (i.name === name || i.color === name))
      if (theme) {
        if (!theme.color) {
          theme.color = this.getVuetifyThemeColor(theme.name)
        }
        return theme
      }
      return null
    },

    /**
     * 根据名称获取颜色信息
     * @param value 色值
     */
    getColorByName (value = ''): ColorInfo {
      value = value.trim()
      const data = {
        name: '',
        color: this.defaultValue,
        valid: true,
      }

      if (value === 'none' || value === '') {
        data.name = 'none'
        data.color = ''
        data.valid = false
      }

      if (value && value !== 'none') {
        const theme = this.findThemeByName(value)
        if (theme) {
          data.name = theme.name
          data.color = theme.color || ''
        } else {
          const info = this.getColorInfo(value)
          data.valid = info.valid
          if (info.valid) {
            data.name = value
            data.color = info.hex || ''
          }
        }
      }
      return data
    },

    /**
     * 添加历史色
     */
    addHistoryColor (color: string) {
      const foundIndex = historyColors.indexOf(color)
      if (foundIndex !== -1) {
        return
      }
      if (historyColors.length >= maxHistoryLength) {
        historyColors.shift()
      }
      historyColors.push(color)
    },

    /**
     * 获取颜色信息
     */
    getColorInfo (strColor: string): ColorValidInfo {
      strColor = (strColor || '').trim()
      const option = new Option()
      const style = option.style
      style.display = 'none'
      style.color = strColor
      const valid = !!style.color
      if (valid) {
        document.body.append(option)
        const color = getComputedStyle(option).color
        option.remove()
        const rgb = color.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',')
        const r = parseInt(rgb[0])
        const g = parseInt(rgb[1])
        const b = parseInt(rgb[2])
        // eslint-disable-next-line no-bitwise
        const hex = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        return {
          valid,
          value: strColor,
          rgb: color,
          hex: hex.toLocaleUpperCase(),
        }
      }
      return {
        valid: false,
      }
    },
  },
})

const tempColorInfo: ColorInfo = { name: '', color: '' }

ZColorSelectorMixin.prototype.tempColorInfo = tempColorInfo

export default ZColorSelectorMixin
