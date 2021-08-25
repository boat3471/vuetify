import Vue from 'vue'
import * as directives from './index'

function install () {
  if (!(install as any).initialized) {
    (install as any).initialized = true
  }
  Object.keys(directives).forEach(name => {
    Vue.directive(name, (directives as any)[name])
  })
}

Vue.use(install)
