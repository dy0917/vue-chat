import userItem from './userItem'
import firebaseApi from '@/apis/firebase'
export default {
  props: ['users'],
  components:{
    userItem
  },
 data () {
    return {
       activeLiIndex: null
    }
  },

  methods: {
    selectUser:function(user, index){
      this.activeLiIndex=index
      this.$emit('onSelectedUser',user);
    },
  },
};
