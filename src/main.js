import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAnalytics from 'vue-analytics'


Vue.config.productionTip = false

const getGDPR = localStorage.getItem('GDPR:accepted');

if (typeof getGDPR !== 'undefined' && getGDPR === 'true'){
  Vue.use(VueAnalytics, {
    id: 'UA-54514383-9',
    disabled: false,
    debug:{
      enable: true,
      trace: true,
      sendHitTask: true
    }
  })
} else if (typeof getGDPR !== 'undefined' && getGDPR === 'false'){
  Vue.use(VueAnalytics, {
    id: 'UA-54514383-9',
    disabled: true,
    debug:{
      enable: true,
      trace: true,
      sendHitTask: true
    }
  })
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
