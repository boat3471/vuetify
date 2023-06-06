import Vue from 'vue'
import IconRender from './IconRender'

const iconLoader = {
  defaultIcon: 'mdi-cached',
  defaultOpacity: 0.03,
  isLoad (iconName) {
    if (/^mdi-/.test(iconName)) {
      return false
    }
    return true
  },
  load (vm, iconName) {
    return new Promise((resolve, reject) => {
      const url = '/KO.svg'
      const svg = /.svg$/.test(url)
      let regName = iconName
      if (/^\$/.test(iconName)) {
        regName = iconName.substring(1)
      }
      if (svg) {
        fetch(url).then(res => res.text()).then(str => {
          vm.$vuetify.icons.values[regName] = {
            component: IconRender,
            props: { type: 'svg', content: str },
          }
          resolve(iconName)
        }).catch(() => {
          reject(new Error('icon load error!'))
        })
      } else {
        vm.$vuetify.icons.values[regName] = {
          component: IconRender,
          props: { type: 'image', content: url },
        }
        resolve(iconName)
      }
    })
  },
}

Vue.mixin({
  beforeCreate () {
    this.$iconLoader = iconLoader
  },
})
