function Router(){
    this.routes = {};//保存不同路由虚之行的函数
    this.currentUrl = '';//保存当前hash
}
Router.prototype.router = function(url,callback){//根据传入的路由赋值要执行的函数
    this.routes[url] = callback || function(){};
}
Router.prototype.refresh = function(){//获取当前hash值并执行对应函数
    this.currentUrl = location.hash.slice(1) || '/';
    this.routes[this.currentUrl]()// /() || red() || black(); 执行 
}

Router.prototype.init = function(){
    window.addEventListener('load',this.refresh.bind(this),false);
    window.addEventListener('hashchange',this.refresh.bind(this),false);
}
