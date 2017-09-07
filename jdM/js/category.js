/**
 * 分区块的 上下滑动效果
 */
$(function(){
	initLeft();
	initRight();
});
window.onresize = function (){
	location.reload(true);
}

/*右侧商品内容上下滑动效果*/
function initRight(){
	//先找到满屏的大盒子
	var $_parent = $('.jd_category_right');
	//找到下面的承载商品的盒子
	var $_child_box = $_parent.find('.jd_category_right_box');
	var pHeight = $_parent.height();
	var cHeight = $_child_box.height()
	
	//添加过渡
	var addTransition = function(){
        $_child_box.css('transition','all .3s ease 0s');
        $_child_box.css('-webkit-transition','all .3s ease 0s');//webkit兼容
	}
	//删除过渡
    var removeTransition = function(){
        $_child_box.css('transition','all 0s ease 0s');
        $_child_box.css('-webkit-transition','all 0s ease 0s');//webkit兼容
    };
    
    //上下滑动效果
    var startY = 0;//开始的Y坐标
    var endY = 0;//结束的Y坐标
    var moveY = 0;//上下滑动的距离
    var currY = 0;//当前translateY的值
    //滑动的时候限制的最大滑动距离和最小滑动距离
    var maxY = 150,minY = -(cHeight - pHeight + 150);
    
    //承载div的盒子开始监听滑动
	$_child_box.bind('touchstart',function(e){
		startY = e.touches[0].clientY;//相对于父容器
	});
	//监听移动，移动时触发多次
	$_child_box.bind('touchmove',function(e){
		e.preventDefault();
		//计算移动的距离
		endY = e.touches[0].clientY;
		moveY = startY - endY;
		//限制移动距离
		if((currY - moveY) <= maxY && (currY - moveY) >= minY){
            removeTransition();
            var transformCss = "translateY("+(currY - moveY)+"px)";
            var webkitTransformCss = "translateY("+(currY - moveY)+"px)";
            $_child_box.css('transform',transformCss);
            $_child_box.css('-webkit-transform',webkitTransformCss);
        }
	});
	//移动结束
	$_child_box.bind('touchend',function(e){
		//滑动结束之后记录下当前的translateY的值
        if((currY - moveY) <= 0 && (currY - moveY) >= -(cHeight - pHeight)){
           currY = currY - moveY;
      	}
        //当向下滑动超过了0的时候就让子容器弹回去
        else if((currY - moveY) > 0){
            currY = 0;
            addTransition();
            var transformCss = "translateY("+(currY)+"px)";
            var webkitTransformCss = "translateY("+(currY)+"px)";
            $_child_box.css('transform',transformCss);
            $_child_box.css('-webkit-transform',webkitTransformCss);
        }
        //当超过了最大上滑动距离的时候就让子容器弹回去
        else if((currY - moveY) < -(cHeight - pHeight)){
            currY = -(cHeight - pHeight);
            addTransition();
            var transformCss = "translateY("+(currY)+"px)";
            var webkitTransformCss = "translateY("+(currY)+"px)";
            $_child_box.css('transform',transformCss);
            $_child_box.css('-webkit-transform',webkitTransformCss);
        }
        console.log('maxY:' + maxY + "/////minY:" + minY);
        console.log('startY:' + startY + '//////endY:' + endY + '//////moveY:' + moveY + '//////currY:' + currY);
        //把参数清0
        startY = 0;
        endY = 0;
        moveY = 0;
	});
}

/*左侧分类的上下滑动效果*/
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
    var currY = 0;//当前translateY的值
    //滑动的时候限制的最大距离和最小距离
    var maxY = 150,minY = -(cHeight - pHeight + 150);
    //点击时间
    var startTime = 0,endTime = 0;
    
    //ul容器上开始监听滑动
	$_child_ul.bind('touchstart',function(e){
		startY = e.touches[0].clientY;//相对于父容器
		startTime = new Date().getTime();
	});
	//监听移动，移动时触发多次
	$_child_ul.bind('touchmove',function(e){
		e.preventDefault();
		//计算移动的距离
		endY = e.touches[0].clientY;
		moveY = startY - endY;
//		console.log('startY:' + startY + '//////endY:' + endY + '//////moveY:' + moveY);
		//限制移动距离
		if((currY - moveY) <= maxY && (currY - moveY) >= minY){
            removeTransition();
            var transformCss = "translateY("+(currY - moveY)+"px)";
            var webkitTransformCss = "translateY("+(currY - moveY)+"px)";
            $_child_ul.css('transform',transformCss);
            $_child_ul.css('-webkit-transform',webkitTransformCss);
        }
	});
	//移动结束
	$_child_ul.bind('touchend',function(e){
		//滑动结束之后记录下当前的translateY的值
        if((currY - moveY) <= 0 && (currY - moveY) >= -(cHeight - pHeight)){
           currY = currY - moveY;
      	}
        //当向下滑动超过了0的时候就让子容器弹回去
        else if((currY - moveY) > 0){
            currY = 0;
            addTransition();
            var transformCss = "translateY("+(currY)+"px)";
            var webkitTransformCss = "translateY("+(currY)+"px)";
            $_child_ul.css('transform',transformCss);
            $_child_ul.css('-webkit-transform',webkitTransformCss);
        }
        //当超过了最大上滑动距离的时候就让子容器弹回去
        else if((currY - moveY) < -(cHeight - pHeight)){
            currY = -(cHeight - pHeight);
            addTransition();
            var transformCss = "translateY("+(currY)+"px)";
            var webkitTransformCss = "translateY("+(currY)+"px)";
            $_child_ul.css('transform',transformCss);
            $_child_ul.css('-webkit-transform',webkitTransformCss);
        }
        console.log('maxY:' + maxY + "/////minY:" + minY);
        console.log('startY:' + startY + '//////endY:' + endY + '//////moveY:' + moveY + '//////currY:' + currY);
        //把参数清0
        startY = 0;
        endY = 0;
        moveY = 0;
	});
	//系统结束触摸
	$_child_ul.bind('touchcancel',function(e){
		//滑动结束之后记录下当前的translateY的值
        if((currY - moveY) <= 0 && (currY - moveY) >= -(cHeight - pHeight)){
           currY = currY - moveY;
      	}
        //当向下滑动超过了0的时候就让子容器弹回去
        else if((currY - moveY) > 0){
            currY = 0;
            addTransition();
            var transformCss = "translateY("+(currY)+"px)";
            var webkitTransformCss = "translateY("+(currY)+"px)";
            $_child_ul.css('transform',transformCss);
            $_child_ul.css('-webkit-transform',webkitTransformCss);
        }
        //当超过了最大上滑动距离的时候就让子容器弹回去
        else if((currY - moveY) < -(cHeight - pHeight)){
            currY = -(cHeight - pHeight);
            addTransition();
            var transformCss = "translateY("+(currY)+"px)";
            var webkitTransformCss = "translateY("+(currY)+"px)";
            $_child_ul.css('transform',transformCss);
            $_child_ul.css('-webkit-transform',webkitTransformCss);
        }
//      console.log('maxY:' + maxY + "/////minY:" + minY);
//      console.log('startY:' + startY + '//////endY:' + endY + '//////moveY:' + moveY + '//////currY:' + currY);
        //把参数清0
        startY = 0;
        endY = 0;
        moveY = 0;
	});
}
