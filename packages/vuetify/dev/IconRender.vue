<template>
  <i
    v-if="svg"
    class="webv-icon"
    v-html="content"
  />
  <z-img
    v-else
    class="webv-icon"
    :src="content"
  />
</template>

<script>
  export default {
    name: 'icon-render',
    props: {
      type: String,
      content: {
        type: String,
        default: '',
      },
    },
    computed: {
      svg () {
        return this.type === 'svg'
      },
    },
  }
</script>

<style lang="scss" scoped>
  .webv-icon {
    :nth-child(odd),
    :nth-child(even) {
      width: 100% !important;
      height: 100% !important;
    }
  }
</style>
