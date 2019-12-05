<template>
  <div class="wrapper">
    <div class="wrapper-header">
      <!-- <img class="logo-img" src="../assets/img/bg.png"> -->
      <p class="wrapper-introduce">gankai-ui</p>
      <p class="wrapper-introduce">一款轻量级、模块化的前端 UI 组件库</p>
      <div class="header-contener">
        <div class="contener-about">
          <router-link :to="{name: 'giud'}">开始使用</router-link>
          <a target="_blank" class="btn-github" href="https://github.com/GitHubGanKai/gankai-ui">
            &nbsp;<img src="../assets/img/POP_GitHub.png" alt="github" width="35" height="35" />
            &nbsp; &nbsp; GITHUB
          </a>
        </div>
      </div>
      <div class="wrapper-desc"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: document.documentElement.clientHeight
    };
  }
};
</script>
<style type="text/scss" lang="scss">
.wrapper {
  .wrapper-header {
    background: url("../assets/img/bg.png") no-repeat center center;
    background-size: 100% 100%;
    text-align: center;
    padding: 100px 0;
    .logo-img {
      width: 200px;
      height: 200px;
      border-radius: 100%;
    }
    .wrapper-introduce {
      margin-top: 56px;
      color: #ff6600;
      font-size: 32px;
    }
    .header-contener {
      .contener-about {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 200px;
        top: 20px;
        z-index: 9;
        text-align: center;
        a {
          color: #fff;
          background-color: #ff6600;
          display: inline-block;
          width: 190px;
          height: 56px;
          margin: 0 35px;
          font-size: 18px;
          line-height: 56px;
          border-radius: 28px;
          transition: all 0.3s;
          cursor: pointer;
        }
        .btn-github {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          color: #000;
          background: #f6f6f6;
          box-shadow: none;
          width: 190px;
          cursor: pointer;
          .svg-github {
            width: 50px;
            height: 50px;
          }
        }
      }
    }
  }
}
</style>
