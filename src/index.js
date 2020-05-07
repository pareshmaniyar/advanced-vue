import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes/index';
Vue.use(VueRouter);

new Vue({
    router: new VueRouter({
        routes,
    }),
    render: h => h(App)
}).$mount("#root");
