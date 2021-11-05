<template>
  <z-admin class="my-app">
    <template #main>
      <router-view></router-view>
      <z-btn @click="click">弹窗</z-btn>
      <z-date-time-picker
        :value="Date.now()"
        :min="Date.now() - 2* 60*60*1000"
        :max="Date.now() + 2* 60*60*1000"
      ></z-date-time-picker>
    </template>
  </z-admin>
</template>

<script>
  import { ZMessage } from '@zwd/z-ui'

  export default {
    components: {},
    data () {
      return {
        msg: '',
        time: Date.now(),
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
