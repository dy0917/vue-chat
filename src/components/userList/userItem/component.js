import avatar from '@/utils/avatar'

export default {
    props: ['user', 'index','activeLiIndex'],

    computed:{
      active: function(){
        return this.index==this.activeLiIndex
      },
      LetterAvatar: function () {
        var name  = this.user.firstName+ " " + this.user.lastName;
        return avatar.getLetterAvatar(name);
      }

    },
    methods: {
      select:function(){
        this.$emit('onSelected', this.user, this.index);

      }
    },
};
