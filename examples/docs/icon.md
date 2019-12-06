# Icon 图标

----
语义化的矢量图形，```gankai-ui``` 使用开源的 Iconfont (阿里妈妈MUX倾力打造的矢量图标管理、交流平台) 作为图标库，并制作成了 ```icon font```。
### 如何使用


使用 ```class="icon"``` 来声明图标，具体图标的名称请 ```copy``` 相应的标签

:::demo
```html

  <i class="gk-icon-close fs-24"></i>
  <i class="gk-icon-link fs-24"></i>
  <i class="gk-icon-tag fs-24"></i>
  <i class="gk-icon-smile fs-24"></i>

```
:::

### 图标集合

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'gk-' + name"></i>
      {{'gk-' + name}}
    </span>
  </li>
</ul>
