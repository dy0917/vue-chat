<template>
  <li v-on:click="select()" :class="{'active': active}">
    <a class="clearfix">
      <img width="60" height="60" :src="LetterAvatar">
      <div class="friend-name">
        <strong>{{user.userName}}</strong>
      </div>
      <div class="last-message text-muted">{{user.lastMessage}}</div>
      <small class="time text-muted">{{user.updatedOn}}</small>
      <small class="chat-alert label label-danger"  v-show="user.unReadMessages">{{user.unReadMessages}}</small>
    </a>
  </li>
</template>


<script>
import script from './component'
export default script
</script>

<style>
body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

pre {
  margin: 20px 0;
  padding: 20px;
  background: #fafafa;
}
</style>
