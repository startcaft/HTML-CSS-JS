/**
 * 
 */

window.onload = function (){
	initLeft();
}
window.onresize = function (){
	location.reload(true);
}

/*左侧分类的滑动效果*/
function initLeft(){
	//先找到满屏的大盒子
	var $_parent = $('.jd_category_left');
	//找到其下面的ul容器
	var $_child_ul = $_parent.find('ul');
	var $_li = $_child_ul.find('li');
	
	//大盒子高度
	var pHeight = $_parent.height();
	//内容的高度
	pHeight = pHeight - 45;
	//ul高度
	var cHeight = $_child_ul.height();
	
	//添加过渡
	var addTransition = function(){
        $_child_ul.css('transition','all .3s ease 0s');
        $_child_ul.css('-webkit-transition','all .3s ease 0s');//webkit兼容
	}
	//删除过渡
    var removeTransition = function(){
        $_child_ul.css('transition','all 0s ease 0s');
        $_child_ul.css('-webkit-transition','all 0s ease 0s');//webkit兼容
    };
    
    //上下滑动效果
    var startY = 0;//开始的Y坐标
    var endY = 0;//结束的Y坐标
    var moveY = 0;//上下滑动的距离
    var curry = 0;//当前translateY的值
    //滑动的时候限制的最大距离和最小距离
    var maxY = 150,minY = -(cHeight - pHeight + 150);
    //点击时间
    var startTime = 0,endTime = 0;
    
    //ul容器上开始监听滑动
	$_child_ul.bind('touchstart',function(e){
		startY = e.touches[0].clientY;//相对于父容器
		startTime = new Date().getTime();
//		console.log(pHeight);
//		console.log(cHeight);
//		console.log('最大滑动距离:' + maxY + "/////最小滑动距离:" + minY);
		console.log(startY);
		console.log(e);
	},false);
}
