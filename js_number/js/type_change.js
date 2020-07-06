console.log('js数字类型 类型转换')
/*
* 类型转换  start
* */
let num = 1,
    str = 'aaa',
    bool1 = true,
    bool2 = false,
    pStr = `类型转换：<br/>Number+String=${num+str} （String）<br/>Number+Boolean=${num+bool1} （Number）<br/>String+Boolean=${str+bool2} （String）<br/>Boolean+Boolean=${bool1+bool2} （Number）`;
    pStr += `；<br/>数组与字符串、数组与布尔值、数组与对象，运算输出结果为String<a href="https://blog.csdn.net/weixin_42392456/article/details/81213864" target="_blank">参考链接<a/>`
    $('#type_change p').html(pStr)
    console.log(123e-2);    // 1.23   m*10的+/-n次幂
let a = Math.floor(10)
    console.log(!!`${a}e-1`)
/*
* 类型转换  end
* */
/*
* 小数点精度问题   start
* */
let num1 = 0.83,
    num2 = 0.72,
    numStr = `相加减-- (num1*1000 +/- num2*1000)/1000  正确值：${(num1*1000 + num2*1000)/1000}  误差值：${num1+num2}；<br/>相乘除-- (num1*100 +/- num2*100)/10000 正确值：${((num1*100) * (num2*100))/10000}  误差值：${num1*num2}`
    $('#float p').html(numStr)
/*
* 小数点精度问题   end
* */
/*
* 时间和日期  start
* */
const myData = new Date()
console.log(myData)
let year = myData.getFullYear(),   // 获取年
    month = myData.getMonth() + 1,   // 获取月
    date = myData.getDate(),   // 获取天（日、号）
    day = myData.getDay(),    // 获取星期
    hour = myData.getHours(),   // 获取小时
    minutes = myData.getMinutes(),   // 获取分钟
    second = myData.getSeconds() ,  // 获取秒钟
    dataStr = `年：${year}、 月：${month}、 日：${date}、 星期：${day}、 小时：${hour}、 分钟：${minutes}、 秒：${second}`
    $('#data p').html(dataStr)
/*
* 时间和日期  end
* */
/*
*  字符串常用方法 start
* */
const string = 'hello word'
let myStr = `
获取某一个字符：string.charAt(1) ${string.charAt(1)}；<br/>
获取某一段字符：substring--${string.substring(1,4)}同substr--${string.substr(1,4)}也同slice--${string.slice(1,4)}(解释：substring/sunstr只能操作字符串；slice字符串数组均可操作；splice只可操作数组,同为截取一段；substring与slice一致，参数含头不含尾，substr参数含头含尾);<br/>
获取某个字符第一次出现的位置：${string.indexOf('o')}；<br/>
分割字符串（按照某个字符）：${string.split(',')}，返回的结果是数组 ${typeof string.split(',')};<br/>
替换某一个字符：string.replace('m','n') ${string.replace('l','a')}(该方法只会替换第一个出现的目标字符)；<br/>
大小写转换：toUpperCase() 转大写、toLowerCase()转小写
`
$('#string p').html(myStr)
/*
*  字符串常用方法 end
* */

/*
* null、undefined区别  start
* */
let objectStr = `
1.二者是否相等？ --null和undefined 两者相等，但是当两者做全等比较时，两者又不等<br/>Null类型，代表“空值”，代表一个空对象指针，使用typeof运算得到 “object”，所以你可以认为它是一个特殊的对象值<br/>Undefined类型，当一个声明了一个变量未初始化时，得到的就是undefined；<br/>2.那到底什么时候是null,什么时候是undefined呢？<br/>null表示"没有对象"，即该处不应该有值<br/>undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义
`
$('#object p').html(objectStr)
/*
* null、undefined区别  end
* */

/*
*   类型转换 start
* */

/*
*   类型转换 end
* */


