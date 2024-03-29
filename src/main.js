import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'

import fastClick from 'fastclick'
fastClick.attach(document.body)

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
