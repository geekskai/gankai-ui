<template>
  <section class="content element-doc">
    <h2 id="radio-dan-xuan-kuang">
      <a class="header-anchor" href="#radio-dan-xuan-kuang">¶</a> Radio 单选框</h2>
    <p>在一组备选项中进行单选</p>
    <h3 id="ji-chu-yong-fa">
      <a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
    <p>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</p>
    <demo-block>
      <div>
        <p>要使用 Radio 组件，只需要设置
          <code>v-model</code>绑定变量，选中意味着变量的值为相应 Radio
          <code>label</code>属性的值，
          <code>label</code>可以是
          <code>String</code>、
          <code>Number</code>或
          <code>Boolean</code>。
        </p>
      </div>
      <template slot="source">
        <element-demo0 />
      </template>
      <template slot="highlight">
        <pre v-pre>
          <code class="html">
              <template>
                <gk-radio v-model='radio' value='1'>备选项</gk-radio>
                <gk-radio v-model='radio' value='2'>备选项</gk-radio>
              </template>
              <script>
                export default {
                  data() {
                    return {
                      radio: "1"
                    };
                  }
                };
              </script>
          </code>
        </pre>
      </template>
    </demo-block>
  </section>
</template>
<script>
  export default {
    data() {
      return {
        radio: "1"
      };
    }
  };
</script>