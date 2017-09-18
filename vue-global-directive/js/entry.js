//入口文件

Vue.directive('green',function(el,bingding,vnode){
	el.style = 'color:' + bingding.value;
});

var app = new Vue({
     el:'#app',
     data:{
          num:10,
          color:'green'
     },
     methods:{
          add:function(){
               this.num += 1;
          }
     }
});

