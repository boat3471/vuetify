<template>
  <z-dialog
    v-if="visible"
    v-model="visible"
    :content-class="classes"
    :hide-overlay="false"
    :overlay-opacity="0.2"
    :no-click-animation="false"
    :persistent="true"
    :width="width"
    :top="top"
  >
    <z-card>
      <z-card-title v-if="title">
        <z-row
          align="center"
          justify="center"
          no-gutters
        >
          <z-col>{{ title }}</z-col>
          <z-col
            v-if="showClose"
            cols="auto"
          >
            <z-btn
              icon
              @click="close"
            >
              <z-icon small>mdi-close</z-icon>
            </z-btn>
          </z-col>
        </z-row>
      </z-card-title>
      <z-divider v-if="title"/>
      <z-card-text class="pt-5">
        <z-row
          align="center"
          justify="center"
        >
          <z-col
            v-if="icon"
            class="d-flex justify-center align-center"
            cols="auto"
          >
            <z-icon :color="iconColor">{{ icon }}</z-icon>
          </z-col>
          <z-col
            v-if="html"
            v-html="message"
          ></z-col>
          <z-col v-else>{{ message }}</z-col>
        </z-row>
      </z-card-text>
      <z-divider></z-divider>
      <z-card-actions>
        <z-spacer></z-spacer>
        <z-btn
          v-if="showCancel"
          color="secondary"
          outlined
          @click="cancel"
        >{{ labelCancel }}</z-btn>
        <z-btn
          elevation="1"
          :color="color"
          :disabled="delayCount > 0"
          @click="sure"
        >{{ labelSureDisplay }}
        </z-btn>
      </z-card-actions>
    </z-card>
  </z-dialog>
</template>

<script>

  export default {
    name: 'z-global-modal',
    components: {},
    props: {
      type: String,
      icon: String,
      title: String,
      message: String,
      html: {
        type: Boolean,
        default: false,
      },
      showClose: {
        type: Boolean,
        default: true,
      },
      showCancel: {
        type: Boolean,
        default: true,
      },
      labelCancel: {
        type: String,
        default: '取消',
      },
      labelSure: {
        type: String,
        default: '确定',
      },
      width: {
        type: Number,
        default: 450,
      },
      top: {
        type: String,
        default: '',
      },
      delay: {
        type: Number,
        default: 0,
      },
    },
    data () {
      const delay = this.$props.delay
      const labelSure = `${this.$props.labelSure}${delay > 0 ? '(' + delay + ')' : ''}`
      return {
        visible: true,
        labelSureDisplay: labelSure,
        delayCount: delay,
        delayTimer: 0,
      }
    },
    computed: {
      color () {
        if (this.type === 'info' || this.type === 'confirm') {
          return 'primary'
        }
        return this.type
      },
      iconColor () {
        if (this.type === 'info') {
          return 'primary'
        }
        if (this.type === 'confirm') {
          return 'warning'
        }
        return this.type
      },
      classes () {
        const list = ['z-modal']
        switch (this.type) {
          case 'info':
            list.push('z-modal-info')
            break
          case 'success':
            list.push('z-modal-success')
            break
          case 'warning':
            list.push('z-modal-warning')
            break
          case 'error':
            list.push('z-modal-error')
            break
          default:
            break
        }

        if (this.itemClass) {
          list.push(this.itemClass)
        }
        return list.join(' ')
      },
    },
    mounted () {
      const labelSure = this.labelSure
      let total = this.$props.delay
      if (total > 0) {
        this.delayTimer = setInterval(() => {
          total--
          this.labelSureDisplay = `${labelSure}(${total})`
          if (total === 0) {
            clearInterval(this.delayTimer)
            this.labelSureDisplay = labelSure
            this.delayCount = 0
          }
        }, 1000)
      }
    },
    destroyed () {
      clearInterval(this.delayTimer)
    },
    methods: {
      sure () {
        const fn = this.sureBeforeFun
        const fnResult = fn && fn()
        const isClose = fnResult !== false
        if (isClose) {
          this.visible = false
          clearInterval(this.delayTimer)
        }
      },
      cancel () {
        const fn = this.cancelBeforeFun
        const fnResult = fn && fn('cancel')
        const isClose = fnResult !== false
        if (isClose) {
          this.visible = false
          clearInterval(this.delayTimer)
        }
      },
      close () {
        const fn = this.cancelBeforeFun
        const fnResult = fn && fn('close')
        const isClose = fnResult !== false
        if (isClose) {
          this.visible = false
          clearInterval(this.delayTimer)
        }
      },
      /**
       * 强制关闭函数
       */
      closeForceFun () {
        this.visible = false
        clearInterval(this.delayTimer)
      },
      /**
       * 设置点击确认前函数
       */
      setSureBeforeFun (fn) {
        if (fn && typeof fn === 'function') {
          this.sureBeforeFun = fn
        }
      },
      /**
       * 设置点击取消或关闭前
       */
      setCancelBeforeFun (fn) {
        if (fn && typeof fn === 'function') {
          this.cancelBeforeFun = fn
        }
      },
    },
  }
</script>

<style lang="scss">
    .z-modal {
        &.v-dialog > .v-card > .v-card__title {
            padding: 8px 18px;
            font-size: 1.1rem;
        }
    }
</style>
