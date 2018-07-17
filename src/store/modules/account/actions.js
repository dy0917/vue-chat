import firebaseApi from '@/apis/firebase'

export default {
  async createUserProfile({ commit, state }, accountProfile) {
    var accountProfile = await firebaseApi.setAccount(accountProfile.uid, accountProfile)
  },
  async getUsers({ commit, state }){
    return await firebaseApi.get('accountProfiles')
  }
}
