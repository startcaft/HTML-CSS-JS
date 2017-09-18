//webpack 配置文件
//此处的代码是 node 代码
module.exports = {
	entry	: './js/entry.js',			//入口文件
	output	: {
		path		: __dirname,	//__driname是node的内置变量，当前js文件所在的目录
		filename	: './js/app.js'
	}
}
