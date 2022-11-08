<template>
  <div>
<!--    <z-color-selector :value="color" none transparent @change="onChange"/>-->
<!--    <z-color-selector-rect :value="color" none transparent @change="onChange" />-->
    <z-color-selector-text-field :value="color" @change="onChange"/>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        color: 'transparent',
      }
    },
    mounted () {
      setTimeout(() => {
        this.color = 'green'
      }, 3000)
    },
    methods: {
      onChange (val) {
        console.info(111, val)
      },
    },
  }
</script>

<style scoped>

</style>
