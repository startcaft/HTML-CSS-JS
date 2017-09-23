<template>
	<div>
        <h2>{{msg}}</h2>
        <hr/>
        <h3>{{$store.state.count}} - {{count}}</h3>
        <p>
	    	<button @click="$store.commit('add')">+</button>
	    	<button @click="$store.commit('reduce')">-</button>
	    </p>
    </div>
</template>

<script>
	import store from '@/vuex/store'
	import { mapState } from 'vuex'			//引入 mapState ，注意花括号

	export default({
		data : function(){
			return {
				msg:'Hello vuex'
			}
		},
		//利用computed特性赋值属性访问state访问对象
		// computed : {
		// 	count : function(){
		// 		return this.$store.state.count;
		// 	}
		// },

		//利用mapState对象和computed特性赋值访问state访问对象
		// computed: mapState({
		// 	count : function(state){
		// 		return state.count;
		// 	}
		// }),

		//利用mapState数组和computed特性赋值访问state访问对象
		computed : mapState(['count']),
		store:store
	})
</script>

<style>
</style>