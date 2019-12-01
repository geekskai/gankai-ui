// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import demoBlock from './components/demo-block.vue'
import GKUI from '../packages/index'
// import('../packages/theme-default/lib/index.scss')

import '../packages/theme-default/lib/index.css'

import("./assets/style/index.scss");
Vue.component('demo-block', demoBlock)
Vue.use(GKUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#gankai',
  router,
  render: h => h(App)
})
