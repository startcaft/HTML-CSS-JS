import Vue from 'vue';			//引入vue
import Vuex from 'vuex';		//引入vuex

Vue.use(Vuex);					//vue中使用vuex

//定义一个常量对象state
const state = {
	count :1
}

//定义一个常量对象mutations里面包含两个函数add,reduce对state.count进行操作
const mutations={
    add : function(state){
        state.count++;
    },
    reduce : function(state){
        state.count--;
    }
}

//用export default 封装代码，让外部可以引用
export default new Vuex.Store({
	state : state,
	mutations : mutations
});
