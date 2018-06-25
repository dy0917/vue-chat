export default {
  name: 'signIn',
  data () {
    return {
      formData: { },
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      async login() {

//      this.$store.dep('account/increment')
//    console.log(this.$store.state.db.ref('accounts'))
//
//    var accountsRef = this.$store.state.db.ref('accounts')
//    accountsRef.once('value', function(snapshot) {
//      snapshot.forEach(function(childSnapshot) {
//        var childKey = childSnapshot.key;
//        var childData = childSnapshot.val();
//        console.log(childData);
//      });
//    });

      this.$store.dispatch('login', {email: 'huangkingsley@gmail.com', password: 'Password1'});

//       this.$store.state.auth.signInWithEmailAndPassword('huangkingsley@gmail.com', 'Password1').then((user)=>{
//          console.log(user);
//          }).catch(function(error) {
//                                         // Handle Errors here.
//                                          state.errorMessage = error.message;
//                                     });

//      console.log(accountsRef.child('1qq'));
//        this.$store.dispatch('account/count',{id:"111111"})
//         this.$store.commit('account/increment')
//
//         console.log(this.$store.getters['account/getCount'])
      }
    },
};
