<template>
  <div>
<!--    <z-color-selector none transparent @change="onChange"/>-->
    <z-color-selector-rect :value="color" none transparent @change="onChange" />
<!--    <z-color-selector-text-field transparent @change="onChange"/>-->
  </div>

</template>

<script>
  export default {
    data () {
      return {
        color: '',
      }
    },
    methods: {
      onChange(val) {
        console.info(111, val)
      },
    },
  }
</script>

<style scoped>

</style>
