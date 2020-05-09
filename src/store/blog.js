export const blog = {
    namespaced: true,
    state: {
        content: []
    },
    mutations: {
        addContent(state, content) {
            state.content.push(content);
        },
        removeContent(state, index) {
            state.content.splice(index, 1);
        }
    },
    actions: {
        addContentAction({commit}, content) {
            if(content) {
                commit('addContent', content);
            }
        },
        removeContentAction({commit}, index) {
            if(Number.isInteger(index)) {
                commit('removeContent', index);
            }
        },
    },
    getters: {
        content: state => state.content
    }
}
