<template>
  <div id="app" v-if="hasLoaded">
    <router-view/>
  </div>
</template>

<script>
import script from './component'
export default script
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
