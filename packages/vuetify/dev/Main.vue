<template>
  <z-admin
    v-if="false"
    class="my-app"
  >
    <template #main>
      <router-view></router-view>
    </template>
  </z-admin>
  <div v-else>
    <z-icon size="100">add111</z-icon>
    <z-alert type="success" icon="add111">asdasd</z-alert>
  </div>
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
