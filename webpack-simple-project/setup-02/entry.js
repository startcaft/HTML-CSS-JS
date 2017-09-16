//入口文件
var txtp1 = document.getElementById('txt_p1'),
txtp2 = document.getElementById('txt_p2'),
btn = document.getElementById('btn'),
result = document.getElementById('result');

//原始做法，但是最后抽象到clac.js中去了
//btn.addEventListener('click',function(e){
//	result.value = parseInt(txtp1.value) + parseInt(txtp2.value);
//});

var clac = require('./clac');

btn.addEventListener('click',function(e){
	result.value = clac.add(parseInt(txtp1.value),parseInt(txtp2.value));
});
