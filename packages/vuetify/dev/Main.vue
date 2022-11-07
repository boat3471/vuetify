<template>
  <z-admin class="my-app">
    <template #main>
      <router-view></router-view>
      <div>
        <div v-if="false">
          <TestForm :option="{ ...options } " class="mt-10" />
          <z-divider class="mb-10"/>
          <TestForm :option="{filled: true, clearable: true, ...options }"/>
          <z-divider class="mb-10"/>
          <TestForm :option="{outlined: true, clearable: true, ...options }"/>
          <z-divider class="mb-10"/>
          <TestForm :option="{solo: true, clearable: true, ...options }"/>
          <z-divider class="mb-10"/>
        </div>
        <div class="d-flex">
          <TestColorSelector />
        </div>
      </div>
    </template>
  </z-admin>
</template>

<script>
  import { ZMessage } from '@zwd/z-ui'
  import TestForm from './TestForm'
  import TestColorSelector from './TestColorSelector'

  export default {
    components: {
      TestForm,
      TestColorSelector,
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
        color: '',
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
