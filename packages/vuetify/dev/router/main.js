/* eslint-disable no-console, no-unused-vars, max-len */
import '@mdi/font/css/materialdesignicons.css'
import '../../dist/zui.css'
// import { router } from './app/test-native-router'
import { router } from './app/test-create-router'

import { createApp } from '@zwd/z-ui'

import Home from './app/Home.vue'
// import Main from './app/Main.vue'

const app = createApp({
  appHome: Home,
  // appMain: Main,
  componentOptions: {
    router,
  },
})

app.$router && console.info(app.$router.options)
