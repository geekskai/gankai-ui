<template>
  <div>
    <mainHeader>
    </mainHeader>
    <div class="container" v-if="!isIndex">
      <sideNav class="nav"></sideNav>
      <router-view class="view"></router-view>
    </div>
    <router-view class="page" v-else></router-view>
  </div>
</template>

<script>
import mainHeader from "./components/header.vue";
import mainFooter from "./components/footer.vue";
import sideNav from "./components/side-nav.vue";

export default {
  data() {
    return {
      init: false,
      isIndex: false
    };
  },
  watch: {
    $route() {
      this.isIndex = this.$route.name === "index";
    }
  },
  mounted() {
    //  这里模拟数据请求
    setTimeout(() => {
      this.init = true;
    }, 250);
  },
  components: {
    mainHeader,
    sideNav,
    mainFooter
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 20px;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  .nav {
    flex: 1;
  }
  .view {
    flex: 5;
    padding: 32px 48px 48px;
    box-sizing: border-box;
  }
}

.container:after {
  content: "";
  clear: both;
  display: block;
}
</style>