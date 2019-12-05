
# 快速上手

----

## 使用前准备

> 在使用之前，推荐学习 `Vue` 和 `ES2015` ，并正确配置 `Node.js` v6.x 或以上版本

`gankai-ui` 基于 `Vue.js` 2.x+ 版本开发，所以有必要了解以下基础知识：
- [Vue 组件](https://cn.vuejs.org/v2/guide/components.html)
- [单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)

## 标准开发

实际项目中，往往会使用 `webpack`，`rollup` 或者 `gulp` 的工作流，大多可以做到按需加载页面用到的组件，所以不推荐直接使用 `<script>` 标签全局引入的方式使用。

### 全局组件使用

可以在项目的入口文件中引入所有组件或所需组件

```js
import GanKaiUi from 'gankai-ui' // 引入组件库
import '../node_modules/VVUI/packages/theme-default/lib/index.css' // 引入样式库

Vue.use(GanKaiUi)
```

### 单个组件按需使用

可以局部注册所需的组件，适用于与其他框架组合使用的场景

```js
import { GkButton } from 'gankai-ui'

export default {
  components: {
    GkButton
  }
}
```

在模板中，用 `<gk-button></gk-button>` 自定义标签的方式使用组件

```html
<template>
  <div>
    <gk-button>这是一个按钮</gk-button>
  </div>
</template>
```

## 自定义主题

`gankai-ui` 各个组件的样式变量都存放在 `gankai-ui/packages/theme-defualt/common/var.css` 文件中。用户可根据实际需要，自定义组件的样式
