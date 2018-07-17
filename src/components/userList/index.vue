<template>
  <ul class="friend-list">
    <userItem   v-for="(user, index) in users"
                :user="user" :index="index" :key="user.id" :activeLiIndex="activeLiIndex" @onSelected="selectUser">

    </userItem>
  </ul>
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
