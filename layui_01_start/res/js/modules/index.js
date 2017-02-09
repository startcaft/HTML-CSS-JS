/**
 * 定义一个 index 模块，依赖于Layui的layer模块
 */
layui.define(['layer'],function(exports){
	var layer = layui.layer;
	
	layer.msg('Hello Layui');
	
	exports('index',{});//注意，这里是模块输出的核心，模块名必须和use时的模块名一致
});