## Radio 单选框

在一组备选项中进行单选,互斥选项。

### 基础用法

由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

:::demo 要使用 Radio 组件，只需要设置`v-model`绑定变量，选中意味着变量的值为相应 Radio `label`属性的值，`label`可以是`String`、`Number`或`Boolean`。

```html
<template>
  <gk-radio v-model="radio" value="1">备选项</gk-radio>
  <gk-radio v-model="radio" value="2">备选项</gk-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>
```
:::

### 禁用状态

单选框不可用的状态。

:::demo 只要在gk-radio元素中设置`disabled`属性即可，它接受一个`Boolean`，`true`为禁用。

```html
<template>
  <gk-radio disabled v-model='radio' :value='0'>备选项</gk-radio>&nbsp;&nbsp;&nbsp;&nbsp;
  <gk-radio disabled v-model='radio' :value='1'>禁选项</gk-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: 1
      };
    }
  }
</script>
```
:::