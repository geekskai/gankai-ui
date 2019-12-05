
<template>
  <header class="page-header">
    <div class="header-container">
      <a target="_blank" href="https://github.com/GitHubGanKai/gankai-ui">
        <img src="../assets/img/github.png" alt="github" width="50" height="50" />
      </a>
      <div class="header-right">
        <router-link :to="{name: 'index'}">主页</router-link>
        <!-- <router-link :to="{name: 'index'}"></router-link> -->
        <router-link :to="{name: 'giud'}">组件</router-link>
      </div>
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
  background: #191414;
  //  background: #2d3e50;
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
    .header-right {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    a {
      color: #fff;
      margin: 0 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>