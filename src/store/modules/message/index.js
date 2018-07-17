import getters from './getters'
import actions from './actions'
import mutations from './mutations'

export default {
  namespaced: true,
  state: {
    messages:[{name:'ddddd'}],
  },
  mutations,
  getters,
  actions
}
