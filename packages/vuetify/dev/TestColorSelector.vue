<template>
  <div>
    <input v-model="color" type="text">
<!--    <z-color-selector :value="color" none transparent @change="onChange"/>-->
<!--    <z-color-selector-rect :value="color" none transparent @change="onChange" />-->
    <z-color-selector-text-field :value="color" position="append-outer" @change="onChange"/>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        color: '2',
      }
    },
    mounted () {
    },
    methods: {
      onChange (val) {
        this.color = val.name === 'none' ? '' : val.name
        console.info(111, val)
      },
    },
  }
</script>

<style scoped>

</style>
