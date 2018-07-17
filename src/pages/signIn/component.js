import firebaseApi from '@/apis/firebase'

export default {
  data () {
    return {
      isLoading: false,
      formData: {
       account: null,
       password: null
       },
      errorMessage: null,
      }
    },

    watch: {
      'formData': {
        handler(){
          this.errorMessage=""
        },
        deep: true
      }
    },


    async created() {
      var loginUser = this.$store.getters.loginUser
      if(loginUser){
          this.$router.push({ path: 'chatRoom' })
          return
      }
    },

    methods: {
      async onLogin(formData) {
        this.errorMessage=null
        await this.$validator.validateAll()
          if (!this.errors.any()) {
              this.isLoading = true
              var reference = await this.$store.dispatch('login', formData).catch(e=>{
                this.isLoading = false
                this.errorMessage=e.message
              }).finally(()=>{
                this.isLoading = false
              })
              var uid = reference.user.uid
              firebaseApi.getUserAccountByIdAsync(uid).then((user)=>{
                  this.$store.commit('setLoginUser', user)
                  this.$store.commit('setHasLoaded', true)
                  this.$router.push({ path: 'chatRoom' })
              })
          }
      }
    },
};
