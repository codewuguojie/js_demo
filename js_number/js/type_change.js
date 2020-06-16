console.log('js数字类型 类型转换')
/*
* 类型转换  start
* */
let num = 1,
    str = 'aaa',
    bool1 = true,
    bool2 = false,
    pStr = `类型转换：\nNumber+String=${num+str} （String）\nNumber+Boolean=${num+bool1} （Number）\nString+Boolean=${str+bool2} （String）\nBoolean+Boolean=${bool1+bool2} （Number）`;
    pStr += `；数组与字符串、数组与布尔值、数组与对象，运算输出结果为String<a href="https://blog.csdn.net/weixin_42392456/article/details/81213864" target="_blank">参考链接<a/>`
    $('#type_change p').html(pStr)
    console.log(123e+2);    // 1.23
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
    numStr = `小数点精度：相加减-- (num1*1000 +/- num2*1000)/1000  正确值：${(num1*1000 + num2*1000)/1000}  误差值：${num1+num2}；相乘除-- (num1*100 +/- num2*100)/10000 正确值：${((num1*100) * (num2*100))/10000}  误差值：${num1*num2}`
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


