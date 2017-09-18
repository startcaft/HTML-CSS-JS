//入口文件


function add(){
	Vue.set(outData,'count',1);
//	app.count++;
//	outData.count++;
}

var outData = {
	count:1,
	goodName:'car'
}

var app = new Vue({
     el:'#app',
     data:outData
});


