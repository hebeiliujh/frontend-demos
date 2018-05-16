/**
  扩展一个test模块
**/      
 
layui.define(function(exports){ //提示：模块也可以依赖其它模块，如：layui.define('layer', callback);
  var obj = {
    hello: function(str){
      console.log('Hello '+ (str||'hoverplugin'));
    },
    mouseenter: function(){
      $('.warpper a').mouseenter(function(e){
		    console.log(e.pageX + ", " + e.pageY);
		  });
    }
  };
  
  //输出test接口
  exports('hoverplugin', obj);
});