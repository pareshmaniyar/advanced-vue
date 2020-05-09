import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './routes';
import {store} from './store';
import { firstMixin } from './mixin';
import { BButton } from 'bootstrap-vue'

Vue.component('b-button',BButton);
Vue.directive('focus', {
    inserted: function(el) {
        el.focus();
    }
})
export const eventBus = new Vue();
Vue.mixin(firstMixin);
Vue.use(VueRouter);

new Vue({
    store,
    router: new VueRouter({
        routes,
    }),
    render: h => h(App)
}).$mount("#root");
