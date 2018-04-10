
const state = {
  test : 'wzyhhhh'
}

const actions = {
  updateLoadingStatus({commit,state},payload) {
    commit('UPDATELOADINGSTATUS',payload)
  }
}
const mutations = {
  UPDATELOADINGSTATUS: (state,payload) => {
    state.test = payload
  }
}
const getters = {
  test: state => state.test
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
