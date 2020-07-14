import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';


Vue.config.productionTip = false;
Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0,200);
  },0)
}
if(document.documentElement.clientWidth>500){
  window.alert('为保证浏览效果，建议使用手机打开')
}