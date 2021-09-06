<template>
  <z-row no-gutters>
    <z-col>bbb</z-col>
    <z-col><router-view></router-view></z-col>
  </z-row>
</template>

<script>
  export default {
    components: {
    },
    mounted () {
      window.app = this
    },
  }
</script>
