import avatar from '@/utils/avatar'

export default {
    props: ['message', 'index'],
  data () {
     return {
     }
   },
    computed:{
      isLeft: function(){
      return this.index%2==0
      },

      LetterAvatar: function () {
        var name  = this.message.user.firstName+ " " + this.message.user.lastName;
        return avatar.getLetterAvatar(name);
      },
      name: function(){
       var name  = this.message.user.firstName+ " " + this.message.user.lastName;
       return name;
      }
    },
    methods: {
      select:function(){
        this.$emit('onSelected', this.user, this.index);

      }
    },
};
