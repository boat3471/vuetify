<template>
  <z-admin
    v-if="false"
    class="my-app"
  >
    <template #main>
      <router-view></router-view>
    </template>
  </z-admin>
  <div v-else>
    <z-icon size="100">{{ iconName }}</z-icon>
    <z-text-field v-model="iconName"></z-text-field>
    <z-btn @click="iconName = '$error'">$error</z-btn>
    <z-btn @click="iconName = 'success'">success</z-btn>
    <z-btn @click="iconName = 'mdi-home'">mdi-home</z-btn>
    <z-btn @click="iconName = '$ko'">$ko</z-btn>
    <z-btn @click="iconName = 'ko'">ko</z-btn>
  </div>
</template>

<script>
  import { ZMessage } from '@zwd/z-ui'

  export default {
    components: {},
    data () {
      return {
        iconName: 'mdi-close',
        msg: '',
        time: Date.now(),
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
