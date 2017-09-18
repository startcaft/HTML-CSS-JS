//入口文件

(function(window){
	'use strict';
	
	var todos = [
		{text:'吃饭',completed : true},
		{text:'喝酒',completed : true},
		{text:'睡觉',completed : false}
	];
	
	new Vue({
		el : '#app',
		data : {
			title : '番茄时钟',
			targetText : '',
			todos : todos
		},
		methods : {
			addTask : function (){
				//在 vue 应用中的方法可以通过 this 来访问当前应用程序上的 data 对象；
				//把对DOM的操作编程对 data 成员的操作；
				//console.log(this.targetText);
				if(this.targetText.trim().length === 0){
					return;
				}
				this.todos.push({
					text : this.targetText,
					completed : false
				});
				this.targetText = '';
			},
			remove : function(currenttext){
				var _that = this;
				var todoIndex;
				this.todos.find(function(item,index){
					if(item.text === currenttext){
//						this.todos.splice(index,1);
//						_that.todos.splice(index,1);
						todoIndex = index;
					}
				});
				_that.todos.splice(todoIndex,1);
			}
		}
	});
	
})(window);
