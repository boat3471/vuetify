<template>
  <div>
    login
  </div>
</template>

<script>
  export default {
    props: {
      option: {
        type: Object,
        default () {
          return {}
        },
      },
    },
    data () {
      return {
        theme: {
          dense: false,
        },
        themeDense: {
          dense: true,
        },
      }
    },
  }
</script>
