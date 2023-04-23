<template>
  <div>home-{{ msg }}</div>
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
      if (this.$route) {
        this.msg = JSON.stringify(this.$route.meta)
      }
    },
  }
</script>
