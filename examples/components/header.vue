
<template>
  <header class="page-header">
    <div class="header-container">
      <router-link :to="{name: 'index'}">
        <!-- <img src="../assets/img/banner.png" width="100"> -->
      </router-link>
      <router-link :to="{name: 'giud'}">组件</router-link>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style type="text/scss" lang="scss">
.page-header {
  background: #2d3e50;
  border-bottom: 1px solid #48698a;
  position: relative !important;
  font-size: 22px;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  transition: all 0.3s;
  z-index: 100;
  .header-container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 80px;
    justify-content: space-between;
    a {
      color: #fff;
    }
  }
}
</style>