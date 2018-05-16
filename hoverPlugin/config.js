//config的设置是全局的
layui.config({
  base: '/' //假设这是你存放拓展模块的根目录
}).extend({ //设定模块别名
  hoverplugin: 'hoverplugin' //如果 hoverplugin.js 是在根目录，也可以不用设定别名
});
