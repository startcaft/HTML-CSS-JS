<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
    	<router-link to="/">首页</router-link> |
    	<router-link to="/HI">Hi页</router-link> |
    	<router-link v-bind:to="{name : 'Hello/Hi/Hi1',params : {name : '张三',age : 19}}">Hi页1</router-link> |
    	<router-link to="/hi/hi2">Hi页2</router-link> |
    	<router-link to="/urlParams/1698/Vue is very good!">Url传递参数</router-link> 
    	<router-link to="/goHome">重定向redirect</router-link>
    	<router-link to="/goParams/555555/太流弊了!">重定向redirect传参</router-link>
    	<router-link to="/nb">Hi页别名</router-link> |
    	<router-link to="/adasdasd">不存在的路由</router-link>
    </p>
    <p>
    		通过路径对象name传递的参数：{{ $route.name }}
  	</p>
  	<transition name="fade" mode="out-in">
    	<router-view></router-view>
    </transition>
    <div id="content">
    		<router-view name="left" ></router-view>
    		<router-view name="right"></router-view>
    </div>
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
	
	#content {
		display: flex;
		display: -webkit-flex;
		flex-direction: row;
		justify-content: center
	}
	#content > div {
		align-items: center;
		flex: 1 1 50%;
		text-align: center;
		height: 300px;
	}
	#content > div:first-child {
		background-color: #e0e0e0;
	}
	#content > div:last-child {
		background-color: gray;
	}
	
	/*路由切换动画*/
	.fade-enter {
	  opacity:0;
	}
	.fade-leave{
	  opacity:1;
	}
	.fade-enter-active{
	  transition:opacity .5s;
	}
	.fade-leave-active{
	  opacity:0;
	  transition:opacity .5s;
	}
</style>
