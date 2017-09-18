//入口文件

var AuthorExtend = Vue.extend({
	template:"<a v-bind:href='authorUrl' v-text='authorName'></a>",
	data : function() {
		return {
			authorName:'张三',
			authorUrl:'http://www.baidu.com'
		}
	}
});

//挂载自定义标签
new AuthorExtend().$mount('author');
