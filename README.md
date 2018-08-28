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


7.react单页面SEO优化
    reactDOMServer研究
    [使用HeadlessChrome做单页应用SEO](https://github.com/gwuhaolin/blog/issues/8)
    Puppeteer(似乎是可以的)


8.http强制转成https
    <meta http-equiv="refresh">


9.flex布局，当子集的高度超过父级时，子集高度会被截取，不能滚动到头部
    解决：不使用justify-content: center;给子集添加   margin：auto
        (当子集多的情况下，我想给自己添加margin隔开怎么做？？？？？？)







如何避免logout后，后退按钮依旧显示缓存的有关问题






学习react-router



react 在子组件中获取props，为空
    react-router组件中，如果是component={() => <News openAuth={this.openModal} /> },需要withRouter将props整合,若是{News},直接可以获取props所有值[withRouter](https://blog.csdn.net/ISaiSai/article/details/78094556)


### 8-28 升级mac python版本





1.   ``` brew install python3 ```
2.  更改默认python版本   
（解除 Python2 的软链接“软链接”和“硬链接”）

``` 
$ which python    //查看python目录    
sudo unlink /usr/bin/python 
```

3.创建 Python3 软链接（以后输入 python 则会直接转为 python3）
```
$ which python3
$ sudo ln -s /usr/local/bin/python3 /usr/bin/python
```
4.提示Operation not permitted

系统启用了SIP(System Integrity Protection), 导致root用户也没有权限修改/usr/bin目录。按如下方式可恢复权限。

[更改usr文件](https://segmentfault.com/q/1010000003095378/a-1020000003927277)

5.iterm 下直接
```

python 
====>>>
Python 3.7.0 (default, Aug 22 2018, 15:22:33)
[Clang 9.1.0 (clang-902.0.39.2)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>>

```




 



