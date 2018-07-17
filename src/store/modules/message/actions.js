import firebaseApi from '@/apis/firebase'
import messageCreate from './message'

export default {
  async sendMessage({ commit, state }, message){
    var postedMessage = await firebaseApi.pushData('messages/', message)
    await firebaseApi.pushRelatedDataToArray('accountProfiles/'+message.receiveId+'/messages/'+postedMessage.key, true)
  },

  async getMessageById({ commit, state, dispatch }, messageId){
      var message = state.messages.find(message=>{
        message.id== messageId
      })
      if(message){
      return message
      }
      var message = await firebaseApi.getByReference('messages/'+messageId)
      message = messageCreate.newMessage(message)
      var sender = await dispatch('accountProfiles/getProfileById',message.sendId, {root:true})
      var receiver = await dispatch('accountProfiles/getProfileById',message.receiveId, {root:true})
      message.sender = sender
      message.receiver = receiver
      commit('pushMessage', message)
      return message
  }
}
