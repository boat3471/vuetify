<template>
  <div>
    {{ name }}----
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
  }
</script>
