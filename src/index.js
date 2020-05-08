import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes';
import {store} from './store';

export const eventBus = new Vue();

Vue.use(VueRouter);
new Vue({
    store,
    router: new VueRouter({
        routes,
    }),
    render: h => h(App)
}).$mount("#root");
