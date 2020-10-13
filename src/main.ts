import Vue from 'vue'
import App from './App.vue'
import router from './router'
// @ts-ignore
import store from './store'
import { GitHub } from './api/github'

Vue.config.productionTip = false
Vue.prototype.$GitHub = new GitHub()

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
