<template>
  <z-admin class="my-app">
    <template #main>
      <TestDense />
      <router-view></router-view>
    </template>
  </z-admin>
</template>

<script>
  import { ZMessage } from '@zwd/z-ui'
  import TestDense from '../../components/TestDense.vue'

  export default {
    components: {
      TestDense,
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
    },
    methods: {
      click () {
        ZMessage.error('asdasd', { duration: 0 })
      },
    },
  }
</script>
