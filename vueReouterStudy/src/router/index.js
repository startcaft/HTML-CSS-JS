import Vue from 'vue'												//引入Vue
import Router from 'vue-router'							//引入vue-reouter
import Hello from '@/components/Hello'			//引入根目录下/components/Hello.vue组件
import Hi from '@/components/Hi'						//引入根目录下/components/Hi.vue组件
import Hi1 from '@/components/Hi1'	
import Hi2 from '@/components/Hi2'

Vue.use(Router)															//Vue全局使用vue-reouter

export default new Router({									//配置路由
  routes: [																	//routes数组
    {																				//每一个对象都是一个路由链接
      path: '/',														//path属性表示路由链接路径
      name: 'Hello',												//name属性表示路由名称，暂时无用，大小写不敏感
      component: Hello											//component属性表示对应的组件模板
    },
    {
    	path: '/hi',
    	component: Hi,
    	children:[
    		{
    			path:'/',
    			name:'Hello/Hi',
    			component:Hi
    		},
    		{
    			path:'hi1',
    			name:'Hello/Hi/Hi1',
    			component:Hi1
    		},
    		{
    			path:'hi2',
    			name:'Hello/Hi/Hi2',
    			component:Hi2
    		}
    	]
    }
  ]
})
