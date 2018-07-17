import { mapGetters } from 'vuex'
export default {
  name: 'App',
  data () {
    return {
      }
    },
    computed: {
      hasLoaded(){
        return this.$store.state.hasLoaded
      }
    },
    beforeCreate(){
      this.$store.dispatch("hasLogin")
    }
};
