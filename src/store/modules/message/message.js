export default {
    newMessage (messageRef) {
      var message = messageRef.val();
      message.id = messageRef.key;
      return message;
  },
}
