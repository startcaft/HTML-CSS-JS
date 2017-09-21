import Vue from 'vue'												//引入Vue
import Router from 'vue-router'							//引入vue-reouter
import Hello from '@/components/Hello'			//引入根目录下/components/Hello.vue组件
import Hi from '@/components/Hi'						//引入根目录下/components/Hi.vue组件
import Hi1 from '@/components/Hi1'	
import Hi2 from '@/components/Hi2'
import Hi3 from '@/components/Hi3'
import Hi4 from '@/components/Hi4'
import UrlParams from '@/components/UrlParams'

Vue.use(Router)															

export default new Router({									
  routes: [																	
    {																				
      path: '/',														
      name: 'Hello',												
      components : {
    			default : Hello,
    			left : Hi3,
    			right : Hi4
      }
    },
    {
    	path : '/urlParams/:newsId(\\d+)/:newsTitle',
    	component: UrlParams
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
    },
    {
    	path : '/goHome',
    	redirect : '/'
    },
    {
    	path : '/goParams/:newsId(\\d+)/:newsTitle',
    	redirect : '/urlParams/:newsId(\\d+)/:newsTitle'
    }
  ]
})
