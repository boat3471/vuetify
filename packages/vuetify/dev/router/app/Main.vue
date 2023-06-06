<template>
  <div class="my-app">
    <router-view></router-view>
  </div>
</template>

<script>
  import { ZMessage } from '@zwd/z-ui'

  export default {
    components: {
    },
    data () {
      return {
        iconName: 'mdi-close',
        msg: '',
        time: Date.now(),
        hide: false,
        options: {
          prependIcon: 'mdi-home',
          prependInnerIcon: 'mdi-home',
          appendIcon: 'mdi-home',
          appendOuterIcon: 'mdi-home',
        },
        color: '',
      }
    },
    watch: {
      '$route.path' () {
        this.settingMessage()
      },
    },
    mounted () {
      this.settingMessage()
    },
    methods: {
      settingMessage () {
        if (this.$route) {
          const { meta } = this.$route
          meta && (this.msg = JSON.stringify(this.$route.meta))
        }
      },
      click () {
        ZMessage.error('asdasd', { duration: 0 })
      },
    },
  }
</script>
