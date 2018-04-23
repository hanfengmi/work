//引入express模块
var express = require('express');
//调用 express 实例
var app = express();
//app 本身有很多方法，其中包括最常用的 get、post、put/patch、delete
//调用其中的 get 方法,为 `/` 路径指定一个 handler 函数
//handler 函数会接收 req 和 res 两个对象，他们分别是请求的 request 和 response。
//request 中包含了浏览器传来的各种信息，比如 query\body\headers...都可以通过 req 对象访问到。
//res 对象,通过它来定制我们向浏览器输出的信息
app.get('/',function(req, res){
    res.send('Hello World')
})


// 定义好app 的行为之后，监听本地的 3000 端口。这里的第二个函数是个回调函数，会在 listen 动作成功后执行，监听动作完成。
app.listen(3000, function () {
    console.log('app is listening at port 3000');
});