<template>
  <z-admin class="my-app">
    <template #main>
      <router-view></router-view>
      <z-btn @click="click">弹窗</z-btn>
    </template>
  </z-admin>
</template>

<script>
  import { ZMessage } from '@zwd/z-ui'

  export default {
    components: {
    },
    data () {
      return {
        msg: '',
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
    },
    methods: {
      click () {
        ZMessage.error('asdasd', { duration: 0 })
      },
    },
  }
</script>
