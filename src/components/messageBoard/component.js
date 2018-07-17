import Vue from 'vue'
import messageItem from './messageItem'
import firebaseApi from '@/apis/firebase'
export default {
  props: ['selectedUser'],
  components:{
    messageItem
  },

    watch: {
      'selectedUser': {
        handler(){
            firebaseApi.listenChildAdd('accountProfiles/'+this.selectedUser.uid+'/messages', data=>{
                var message = this.$store.dispatch('message/getMessageById', data.key)
//                this.messages.push(message)
            })
        },
      }
    },

  async created() {
    var loginUser = this.$store.getters.loginUser
    if(!loginUser){
        this.$router.push({ path: '/' })
        return
    }
    this.loginUser=loginUser
  },


  data () {
    return {
      isLoaded: false,
      messages:[],
      formData:{
        message: null
      },

    }
  },
    methods: {
      onSend(message){
        var messageObj = {
          sendId: this.loginUser.uid,
          message:message,
          createdOn: Vue.moment().toISOString(),
          receiveId: this.selectedUser.uid
        }
        this.$store.dispatch('message/sendMessage', messageObj)
      }
    },
};
