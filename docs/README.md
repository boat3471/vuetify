[TOC]

> 请在源代码中编写发布文档

## ZUI 使用说明
这是一套基于 [Vuetify](https://vuetifyjs.com/zh-Hans/) 重构的UI库

基于 Material Design 设计规范，精心打造的 Material 样式的 Vue UI 组件库。

不需要任何设计技能 — 创建叹为观止的应用程序所需的一切都触手可及。

## 开始使用

```
npm install @zwd/z-ui

yarn add @zwd/z-ui
```

## 特点

### 支持Vuetify所有组件，并对部分组件进行重构
1. 重构所有组件以 z- 开头，例如 z-btn，z-select
2. 重构部分组件的大小
3. 重构全局样式
4. 增加Admin管理系统，支持登录、404、403、菜单、皮肤、导航等支持
5. 增加 z-admin 组件，支持自定义管理系统
6. 支持消息弹窗
7. 支持模态弹窗

### 创建单页应用

```javascript
import { createApp } from '@zwd/z-ui'
createApp({options})
```

### 创建管理应用

```javascript
import { createAdmin } from '@zwd/z-ui'
createAdmin({options})
```

### UI全局控制器
提供两种使用方式
```
1、在 vue 中提供 $ui
2、在 js 中提供 $zui、ZuiCore
```

支持全局事件监听和调度
```javascript
this.$ui.on()
this.$ui.once()
this.$ui.off()
this.$ui.emit()
```
支持UI全局API
```javascript
this.$ui.openHome()
this.$ui.openLogin()
this.$ui.ready (callback)
```


### 消息提示支持
提供两种使用方式
```
1、在 vue 中提供 $message
2、在 js 中提供 $message、ZMessage
```

API：
```javascript
ZMessage.show(options)
ZMessage.info(message, options)
ZMessage.success(message, options)
ZMessage.warn(message, options)
ZMessage.warning(message, options)
ZMessage.error(message, options)
ZMessage.closeAll()
```

### 模态弹窗支持

提供两种使用方式
```
1、在 vue 中提供 $modal
2、在 js 中提供 $modal、ZModal
```

API：
```javascript
ZModal.show(options)
ZModal.system(message, options)
ZModal.confirm(message, options)
ZModal.info(message, options)
ZModal.success(message, options)
ZModal.warn(message, options)
ZModal.warning(message, options)
ZModal.error(message, options)
ZModal.closeAll()
```

### 皮肤定制
提供两种使用方式
```
1、在 vue 中提供 $theme
2、在 js 中提供 $theme、ZTheme
```

提供全局皮肤响应数据对象，可用于视图数据绑定，自动驱动视图变化
```
1、在 vue 中提供 $themeStore
2、在 js 中提供 ZTheme.$themeStore
```

API：
```javascript
ZTheme.themeStore
ZTheme.settingTheme(options)
ZTheme.settingDarkColor(options)
ZTheme.settingLightColor(options)
ZTheme.settingThemeColors(options)
ZTheme.settingPrimaryColor(color)
ZTheme.settingDarkStatus(color)
ZTheme.getPrimaryColor()

```
