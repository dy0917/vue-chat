export default {
  name: 'signIn',
  data () {
    return {
      formData: { },
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      login() {
//      this.$store.dep('account/increment')
    console.log(this.$store.state.db.ref('accounts'))

    var accountsRef = this.$store.state.db.ref('accounts')
    accountsRef.once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        console.log(childData);
      });
    });

//      console.log(accountsRef.child('1qq'));
//        this.$store.dispatch('account/count',{id:"111111"})
//         this.$store.commit('account/increment')
//
//         console.log(this.$store.getters['account/getCount'])
      }
    },
};
