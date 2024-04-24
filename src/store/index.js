const image = {
    state: {
        imageUrl: ''
    },
    mutations: {
        SET_IMAGE_URL(state, url) {
            state.imageUrl = url
        }
    },
    actions: {
        storeImageUrl({ commit }, url) {
            commit('SET_IMAGE_URL', url)
        }
    },
    getters: {
        getImageUrl: state => state.imageUrl
    }
}
