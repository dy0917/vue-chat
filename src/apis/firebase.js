import * as firebase from 'firebase'

export default {

    async get(reference){
      var returnArr = []
      await firebase.database().ref(reference).once('value', (snapshot)=> {
        snapshot.forEach(function(childSnapshot) {
               var item = childSnapshot.val();
               item.key = childSnapshot.key;
               returnArr.push(item);
           });
      });
      return returnArr;
    },

    async getUserAccountByIdAsync(uid){
        return await firebase.database().ref('accountProfiles/'+uid).once('value')
    },

    async getByReference(reference){
        return await firebase.database().ref(reference).once('value')
    },


    async setAccount(uid, obj){
      return await firebase.database().ref('accountProfiles').child(uid).set(obj)
    },

    async pushData(reference, obj){
      return await firebase.database().ref(reference).push(obj)
    },

    async pushRelatedDataToArray(reference, obj){
      return await firebase.database().ref(reference).set(obj)
    },

    listenChildAdd(reference, func){
      var commentsRef = firebase.database().ref(reference);
      commentsRef.on('child_added', func);
    },
}
