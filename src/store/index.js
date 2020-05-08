import Vue from 'vue';
import VueX from 'vuex';
Vue.use(VueX);

export const store = new VueX.Store({
    state: {
        mode: true
    },
    mutations: {
        toggle(state, mode) {
            state.mode = !state.mode;
        }
    },
    getters: {
        mode: state => state.mode
    },
    strict: true,
    actions: {
        toggle({commit}) {
            commit('toggle');
        }
    }
});
