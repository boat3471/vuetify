<template>
  <z-admin>
    <template #logo>
      <!-- 定制logo -->
      <div></div>
    </template>
    <template #title>
      <!-- 定制项目名 -->
    </template>
    <template #toolbar-prepend>
      <!-- 定制工具栏 -->
    </template>
    <template #toolbar-append>
      <!-- 定制工具栏 -->
    </template>
    <template #menu-area>
    </template>
    <template #menus>
    </template>
    <template #main>
      <!-- 定制主内容区 -->
      <z-btn>vuetify button</z-btn>
      <z-text-field
        dense
        label="asdasd"
      ></z-text-field>
    </template>
    <template #menu-prepend>
      <!-- 定制菜单栏顶部 -->
    </template>
    <template #menu-append>
      <!-- 定制菜单栏顶部 -->
    </template>
    <template #footer-area>
      <!-- 定制页脚 -->
    </template>
    <template #profile-area>
    </template>
  </z-admin>
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
