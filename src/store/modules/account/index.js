import getters from './getters'
import actions from './actions'
import mutations from './mutations'

export default {
  namespaced: true,
  state: {
    account: {
      count: 0
    }
  },
  mutations,
  getters,
  actions
}
