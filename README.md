# 工作问题

1.react生命周期

2.七牛云保存图片缓存问题

3.pointer-events:none;   
    想使用css禁止input点击（模拟disabled）,找到当前属性

4.react 拿到数据渲染选中input，再次点击时，checked不会选中
（详细描述：此题已经做过，保存选中答案，再次翻到此题时，将之前已经选过的input变成checked,此时，再次点击其他input，不会变成checked样式）     
    解决：搞清楚受控组件与非受控组件[受控组件与非受控组件](https://itbilu.com/javascript/react/4ki9qFFqg.html)    
    添加defaultChecked代替checked

5.map的时候报错：Objects are not valid as a React child (found: object with keys {type, className, onClick, children}). If you meant to render a collection of children, use an array instead or wrap the object using createFragment(object) from the React add-ons. Check the render method of XXX.        
    （遍历this.props.children时会发生，     
    如果当前组件没有子节点，它就是 undefined；      
    如果有一个子节点，数据类型是 object；     
    如果有多个子节点，数据类型就是 array。）       

6.倒计时开始答题，不能使用本地时间，获取后台传回时间，获取后，在前端设置倒计时，若使用alert会影响当前倒计时进度；
    想做一个倒计时，在结束前10分钟弹框提示



如何避免logout后，后退按钮依旧显示缓存的有关问题



学习react-router



