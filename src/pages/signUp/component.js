export default {
  data () {
    return {
      isLoading: false,
      formData: {
        email: null,
      },
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
      this.$validator.validateAll()
        if (!this.errors.any()) {
             this.$store.dispatch('login', formData);
        }
    },

    async onSignUp(formData) {
      if(formData.password !==formData.passwordRepeat){
        this.errorMessage="Password and repeat password must the same"
        return;
      }

      this.$validator.validateAll()
        if (!this.errors.any()) {
          if(formData.password
           && formData.passwordRepeat && formData.username){
            this.isLoading=true
              formData.emailVerified=false

              var user = await this.$store.dispatch('register', formData).catch(e=>{
                        this.errorMessage=e.message
              })

               if(user){
                  var loginUser = {
                    uid: user.user.uid,
                    firstName:formData.firstName,
                    lastName:formData.lastName,
                    email: formData.username
                  }

                  var response = await this.$store.dispatch('account/createUserProfile', loginUser)
                  this.$store.commit('setToken', loginUser)
                  this.$router.push({ path: 'chatRoom' })

          }
          this.isLoading=false
        }
      }
    }
  }
};
