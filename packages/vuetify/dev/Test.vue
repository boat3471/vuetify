<template>
  <div>
    {{ name }}
  </div>
</template>

<script>
  export default {
    components: {
    },
    data () {
      return {
        name: this.$route.meta.name,
      }
    },
    watch: { // 通过watch来监听路由变化，每次路由变化都会执行function()
      $route () {
        this.name = this.$route.meta.name
      },
    },
  }
</script>
