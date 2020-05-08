import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './routes';
import {store} from './store';
import { firtMixin } from './mixin';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

export const eventBus = new Vue();
Vue.mixin(firtMixin);
Vue.use(VueRouter);

new Vue({
    store,
    router: new VueRouter({
        routes,
    }),
    render: h => h(App)
}).$mount("#root");
