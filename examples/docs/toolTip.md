# toolTips 提示
----

### 基础用法
文本超出显示长度，折叠起来，通过len属性显示从何处开始折叠。

::: demo
```html
  <span>Tip 向上显示</span>
  <gk-tooltip >
    <template slot="tip-part">向上</template>
  </gk-tooltip>
  <br/>
  <span>Tip 向下显示</span>
  <gk-tooltip  type="bottom-center">
    <template slot="tip-part">向下</template>
  </gk-tooltip>
    <br/>
  <span>Tip 向左显示</span>
  <gk-tooltip type="left-center">
    <template slot="tip-part">向左</template>
  </gk-tooltip>
  <br/>
  <span>Tip 向右显示</span>
  <gk-tooltip type="right-center">
    <template slot="tip-part">向右</template>
  </gk-tooltip>
```
:::


> 易拓展的提示框。

#### Attributes 属性

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
`type` | 提示框展示方向 | String | top-center、bottom-center、right-center、left-center | top-center