<template>
  <z-admin class="my-app">
    <template #main>
      <router-view></router-view>
    </template>
  </z-admin>
</template>

<script>
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
  }
</script>
