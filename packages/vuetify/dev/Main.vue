<template>
  <z-admin
    v-if="hide"
    class="my-app"
  >
    <template #main>
      <router-view></router-view>
    </template>
  </z-admin>
  <div v-else>
    <TestForm :option="{ ...options } " class="mt-10" />
    <z-divider class="mb-10"/>
    <TestForm :option="{filled: true, clearable: true, ...options }"/>
    <z-divider class="mb-10"/>
    <TestForm :option="{outlined: true, clearable: true, ...options }"/>
    <z-divider class="mb-10"/>
    <TestForm :option="{solo: true, clearable: true, ...options }"/>
    <z-divider class="mb-10"/>
    <z-file-input label="asdasd"></z-file-input>
    <z-file-input filled label="asdasd"></z-file-input>
  </div>
</template>

<script>
  import { ZMessage } from '@zwd/z-ui'
  import TestForm from './TestForm'

  export default {
    components: {
      TestForm,
    },
    data () {
      return {
        iconName: 'mdi-close',
        msg: '',
        time: Date.now(),
        hide: false,
        options: {
          prependIcon: 'mdi-home',
          prependInnerIcon: 'mdi-home',
          appendIcon: 'mdi-home',
          appendOuterIcon: 'mdi-home',
        },
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
    methods: {
      click () {
        ZMessage.error('asdasd', { duration: 0 })
      },
    },
  }
</script>
