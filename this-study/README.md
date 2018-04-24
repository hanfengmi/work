# this详解
### 1. 全局作用下
>全局作用下，this指向window，声明变量（不使用let | const） 就是给window添加或者改变属性

### 2. 普通函数调用
>普通函数调用,属于全局性调用,与 1 一样
>> #### 2.1 严格模式      
>> this指向undefind

### 3. 作为对象方法的调用
>作为对象方法的调用时，this指向这个对象
>> #### 3.1 函数套函数      
>> this指向全局

### 4. 作为构造器调用
> 这时，this就指这个新对象。
>> #### 4.1 如果构造函数返回了一个对象     
>> this 就指向这个新对象

### 5. call apply bind
> call apply  可以动态的指定this指向
>> #### 5.1 拓展：      
>> ##### call 与 apply的异同
>> ```  function.apply(thisObj, [argsArray]) ```    第二个参数接受数组     
>> ```  function.call(thisObj, arrayItem1, arrayItem2, arrayItem3 ...) ```     
>> ##### 应用：求最大 | 最小 值    
>> ``` 
>>  var arr =[1,2,3,5,7,9.9,100,189]
>>  //Math.max()
>>  Math.max.apply(null, arr)
>> ```
>> bind  改变this指向,不执行函数

### 6.  箭头函数
>（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。   
>  (2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。    
>  (3）不可以使用arguments对象，该对象在函数体内不存在。 


