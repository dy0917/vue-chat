export default {
  increment: (state, messages) => state.account.count++,

  setToken(state,token){
  state.account.token=token
  }

}
