<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
    	<router-link to="/">首页</router-link> |
    	<router-link to="/HI">Hi页</router-link>
    </p>
    <router-view></router-view>							<!--所有router的内容都会显示在该标签内-->  
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
