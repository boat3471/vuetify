<template>
  <div class="my-app">
    <div>App-{{ msg }}</div>
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
        if (this.$route) {
          this.msg = JSON.stringify(this.$route.meta)
        }
      },
    },
    mounted () {
      this.msg = JSON.stringify(this.$route.meta)
    },
    methods: {
      click () {
        ZMessage.error('asdasd', { duration: 0 })
      },
    },
  }
</script>
