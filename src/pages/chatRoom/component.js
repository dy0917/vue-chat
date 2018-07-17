import vnav from '@/components/nav'
import userList from '@/components/userList'
import messageBoard from '@/components/messageBoard'
export default {
  components:{
    vnav,
    userList,
    messageBoard
  },
  async created() {
    var loginUser = this.$store.getters.loginUser
    if(!loginUser){
        this.$router.push({ path: '/' })
        return
    }
    this.isLoaded = false
    var users = await this.$store.dispatch("account/getUsers")
    this.isLoaded = true
    this.users = users
  },

  data () {
    return {
      isLoaded: false,
      selectedUser: null,
      users:[]
    }
  },
    methods: {
      async logout() {
        await this.$store.dispatch("logout")
      },
      onSelectedUser(user){
        console.log('onSelectedUser', user);
        this.selectedUser=user
      }
    },
};
