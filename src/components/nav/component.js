export default {
//  data () {
//    return {
//      formData: { },
//      }
//    },
    methods: {
      logout(){
       this.$store.dispatch('logout')
      }
    },
};
