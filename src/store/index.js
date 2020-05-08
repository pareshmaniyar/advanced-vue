import Vue from 'vue';
import VueX from 'vuex';
import {blog} from './blog'
import {features} from './features'

Vue.use(VueX);

export const store = new VueX.Store({
    modules: {
        blog,
        features
    },
    state: {
        mode: true
    },
    mutations: {
        toggle(state) {
            state.mode = !state.mode;
        }
    },
    getters: {
        mode: state => state.mode
    },
    strict: true,
    actions: {
        toggleAction({commit}) {
            commit('toggle');
        }
    }
});
