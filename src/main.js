import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from './store/store'
import VueMaterial from 'vue-material'
import App from './App.vue'

Vue.use(VueMaterial);
Vue.use(VueRouter);

Vue.material.registerTheme('about', {
    primary: {
        color: 'indigo',
        hue: 400
    },
    accent: {
        color: 'blue-grey',
        hue: 500
    },
    warn: {
        color: 'teal',
        hue: 200
    },
});

Vue.material.setCurrentTheme('about');


const router = new VueRouter({
    routes,
    mode: 'history',
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
