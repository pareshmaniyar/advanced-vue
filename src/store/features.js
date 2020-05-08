export const features = {
    state: {
        features: []
    },
    mutations: {
        addFeatures(state, features) {
            state.features.push(features);
        },
        removeFeatures(state, index) {
            state.features.splice(index);
        }
    },
    actions: {
        addFeaturesAction({commit}, features) {
            if(features) {
                commit('addFeatures', features);
            }
        },
        removeFeaturesAction({commit}, index) {
            if(Number.isInteger(index)) {
                commit('removeFeatures', index);
            }
        },
    },
    getters: {
        features: state => state.features
    }
}
