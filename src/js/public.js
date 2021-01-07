// 1.判断num是否是一个素数
function isPrime(num) {
    //1 不是一个素数，排除1这个值
    if (num === 1) return false;
    //判断num是否是一个素数，
    //如果是素数，函数返回 一个true
    //如果不是素数，函数返回 一个false;
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            //执行到这里，num不是一个素数
            return false; //不是素数
        }
    }
    //当程序执行到这里，说明num是一个素数
    return true;
}

// 2.数组去重
// 利用indexOf（） 封装数组去重 
function noRepeat(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        // console.log(arr[i]); //遍历数组中所有的数据
        // if(arr[i]在 newArr 中不存在)
        //       ||
        if (newArr.indexOf(arr[i]) === -1) { //拿遍历出来的数组判断在新数组中是否存在，存在就不添加进新数组，不存在就添加进去
            newArr.push(arr[i]);
        }
    }
    return newArr; //没加return 外面就输出 undefined
    // return; //return后面没加newArr 外面就输出 undefined
}



// 4.选择排序降序，从大到小，Des表示降序
function choiceSortDes(brr) {
    var temp = 0;
    for (var i = 0; i < brr.length - 1; i++) { //输出比较数的下标

        for (var j = i + 1; j < brr.length; j++) { //被比较数的下标
            if (brr[i] < brr[j]) { //后面的数 比前面的数大时，则交换位置，得出一个大的值  ，大的值放在最前面
                // var temp = brr[i];
                temp = brr[i]; //把第一个数的值 赋值给一个 空
                brr[i] = brr[j]; //再把第二个数的值 赋值 给第一个数
                brr[j] = temp; //然后会得到一个最大的值
            }
        }
    }
    return brr;
}

//5. 选择排序升序，从小到大，Asc表示升序
function choiceSortAsc(brr) {
    var temp = 0;
    for (var i = 0; i < brr.length - 1; i++) { //输出比较数的下标

        for (var j = i + 1; j < brr.length; j++) { //被比较数的下标
            if (brr[i] > brr[j]) { //前面的数 比后面的数大时，则交换位置 ，小的值放在最前面
                // var temp = brr[i];
                temp = brr[i]; //把第一个数的值 赋值给一个 空
                brr[i] = brr[j]; //再把第二个数的值 赋值 给第一个数
                brr[j] = temp; //然后会得到一个最小的值
            }
        }
    }
    return brr;
}

// 6.冒泡排序升序，从小到大，Asc表示升序
function bubblingSortAsc(arr) {
    // console.log(arr);  //这里 会直接把 数组arr 打印出来
    var temp = 0; //temp 翻译为临时的
    for (var i = 0; i < arr.length - 1; i++) { //i 是比较的轮数 ，当前 i = 0 ，会比较 6 次
        // console.log(arr); //这里输出的数组arr 会循环数组长度这么多次 7次
        // console.log(arr[i]); //遍历数组arr 中的元素
        for (var j = 0; j < arr.length - (i + 1); j++) { //每一轮比较的次数
            // console.log(arr);  //输出数组次数 6+5+4+3+2+1 =21 次
            if (arr[j] > arr[j + 1]) { //比较前一个数和后一个数的大小，的出一个大的数，得出来的数放在最后面
                //true 如果前一个数大于后一个数 ，则交换两个数的位置
                temp = arr[j]; //把第一个数的值 赋值给一个 空
                arr[j] = arr[j + 1]; //再把第二个数的值 赋值 给第一个数
                arr[j + 1] = temp; //然后会得到一个最小的值
            }
        }
    }
    return arr;
}

//7. 冒泡排序降序，从大到小，Des表示降序
function bubblingSortDes(arr) {
    // console.log(arr);  //这里 会直接把 数组arr 打印出来
    var temp = 0; //temp 翻译为临时的
    for (var i = 0; i < arr.length - 1; i++) { //i 是比较的轮数 ，当前 i = 0 ，会比较 6 次
        // console.log(arr); //这里输出的数组arr 会循环数组长度这么多次 7次
        // console.log(arr[i]); //遍历数组arr 中的元素
        for (var j = 0; j < arr.length - (i + 1); j++) { //每一轮比较的次数
            // console.log(arr);  //输出数组次数 6+5+4+3+2+1 =21 次
            if (arr[j] < arr[j + 1]) { //比较前一个数和后一个数的大小，的出一个小的数，放在最后面
                //true 如果前一个数小于后一个数 ，则交换两个数的位置
                temp = arr[j]; //把第一个数的值 赋值给一个 空
                arr[j] = arr[j + 1]; //再把第二个数的值 赋值 给第一个数
                arr[j + 1] = temp; //然后会得到一个最大的值
            }
        }
    }
    return arr;
}


//8. 随机数  min -- max 之间的随机数整数
function getRand(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min);
}


// 9. 获取随机的十六进制颜色 配合随机数getRand() 使用
function getColor() {
    var str = "0123456789abcdef"; //index 0--15 列出十六进制颜色可能出现的字符
    var color = "#";
    // 随机到str中取出六个字符
    // 将这六个字符拼接在# 后面并返回
    for (var i = 0; i < 6; i++) { //这里共有 6 位，所以循环 6 次
        color += str[getRand(0, 15)]; //用下标作随机数
    }
    return color; //拼接完成返回出来颜色
}


//10. 获取随机的 RGB 颜色值 配合随机数getRand() 使用
function getRGB() {
    var r = getRand(0, 255);
    var g = getRand(0, 255);
    var b = getRand(0, 255);
    return "rgb(" + r + "," + g + "," + b + ")";
}


// 11.随机验证码 num 是验证码的 位数 一般为 4 位 或6位，配合随机数getRand() 使用
function getVerificationCode(num) {
    var yzm = "";
    var rand;
    for (var i = 0; i < num; i++) { //验证码有几位，就要循环几次，循环一次就增加一位
        rand = getRand(48, 122);
        if (rand >= 58 && rand <= 64 || rand >= 91 && rand <= 98) {
            // 随机数在这个范围时，不符合，从新获取
            i--; //预防把错误的字符添加进验证码中
        } else { //不再条件范围时，符合要求，则添加进验证码
            yzm += String.fromCharCode(rand); //在unicode 码中找出对应字符，并且加入验证码的字符串中
            // yzm = yzm + String.fromCharCode(rand);
        }
    }
    return yzm;
}

//12. 添加本地化时间  用到下面的函数 12.1 (在前面添加数字)
// 获取当前本地化时间 传入 date = new Date()
function getDateToLocal(date) {
    var y = date.getFullYear(); //年
    var m = date.getMonth() + 1; //月份是从 0 开始计的  0--11
    var d = date.getDate(); //日
    var h = date.getHours(); //小时
    var f = date.getMinutes(); //分钟
    var s = date.getSeconds(); //秒
    // var ms = date.getMilliseconds();  //毫秒
    var w = date.getDay(); //星期  但这里获取的是数字  下标从0--6 和下面数组里面的下标一一对应
    var week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

    // 2020年12月04日20:20:51  星期五
    // return y + "年" + toDB(m) + "月" + toDB(d) + "日" + toDB(h) + ":" + toDB(f) + ":" + toDB(s) + /* " " + ms + */ "  " + week[w];

    // 2020-12-04 20:19:46
    return y + "-" + toDB(m) + "-" + toDB(d) + ' ' + toDB(h) + ":" + toDB(f) + ":" + toDB(s);

}


//12.1 给 1--9 前面添加数字 0 
function toDB(num) {
    return num < 10 ? "0" + num : num;
}


// 13.封装时间差函数，获取时间差秒数
function getDifTime(startDate, endDate) {
    return (endDate.getTime() - startDate.getTime()) / 1000
}


// 14.获取ID元素
function $(idName) {
    return document.getElementById(idName);
}

// 15获取元素样式  兼容谷、歌火狐、IE678
// 传入的的 attr 加引号 'attr' 过去的部分样式是带单位的
function getStyle(dom, attr) {
    if (dom.currentStyle) {
        // 执行这里，说明是IE
        return dom.currentStyle[attr]
    } else {
        // 执行这里，说明非IE(高版本浏览器)
        return getComputedStyle(dom)[attr]
    }
}


// 16.多元素缓冲运动 动画函数支持多属性运动
// 应用时，callBack可以不传，options要传一个对象，dom是根据需要传要运动的元素
// animate传值方法
// animate(sec, {  sec是需要运动的盒子
//     "运动的属性": "目标值",
//     'width': 200,
//     'height': 200,
//     "opacity": 0.5,
//     'left': 50,
//     "top": 200,
//      。。。
// })
// 滚动条传值 先把动画函数放到fn(),fn()在定时器中调用，num是每次运动的目标值
// function fn() {
//     num += 500
//     animate(sec, {
//         "scrollLeft": num
//     })
// }
function animate(dom, option, callBack) {
    var options = JSON.parse(JSON.stringify(option));
    // 1.遍历用户传入的对象options
    for (var attr in options) {
        // 2.获取当前元素attr(属性) 值  attr(属性)相当于对象的val
        if (attr === "opacity") { //判断用户是否传入 opacity
            // 获取当前元素的透明度
            var current = parseInt(getComputedStyle(dom)[attr] * 100); //获取传入的样式 opacity 的当前值
            var target = options[attr] * 100; //将用户传入的对象中的opacity 的值赋，值给目标元素
        } else if (attr.indexOf("scroll") !== -1) { //判断用户是否传入 scroll  !== -1 说明传入了 scroll
            var current = dom[attr]; //获取页面的滚动条的位置的值，赋值给当前值 ；滚动条不是样式，所以不用getComputedStyle 来获取
            var target = options[attr]; //将用户传入的对象中的scroll 的值 ，赋值给目标元素
        } else if (attr === 'zIndex') {
            var current = parseInt(getComputedStyle(dom)[attr])
            var target = options[attr]
        } else { //用户传入的其他值 width height margin-left ... 传入需要带单位px的
            var current = parseInt(getComputedStyle(dom)[attr]); //获取dom 传入的样式集合 [attr] 得到这些其他值（需要带单位的值）
            var target = options[attr]; //将用户传入的对象中的其他值（需要带单位的值） 的值，赋值给目标元素
        }
        // 上面的target 是用户传入的值  current 是获取到的值，下面的值是程序运行所需要的值
        options[attr] = { //把上面处理后的当前值和目标值传入新对象，放变后买操作
                "current": current,
                "target": target
            }
            // console.log(options)
            /*
            obj = {
                width: 200,
                height: 200
            }
            obj['width'] = {
                current: 0,
                target: 200
            }
            obj['height'] = {
                current: 0,
                target: 200
            }

            obj = {
                width: {
                    current: 0,
                    target: 200
                },
                height: {
                    current: 0,
                    target: 200
                }
            }
            */
    }

    // 3.清除计时器 : 防止鬼畜，不清除会造成不良好的用户体验
    clearInterval(dom.timer);

    // 6.设置定时器
    dom.timer = setInterval(function() {
        // 遍历新对象options[attr] ，取出新对象中的数据current 和 target 
        for (var attr in options) {
            var current = options[attr].current;
            //将新对象中的获取到的当前的值赋值给， 新的当前值
            var target = options[attr].target;
            // 将新对象中的获取到的目标的值 ，赋值给新的目标值

            //7. 持续变化的速度 用新的目标值减去当前值之后除以10
            var speed = (target - current) / 10; //在运动时，这里得出来的值会越来越小
            // 浮点数计算会造成结果有偏差，可能会造成数据丢失，解决方法：取整

            //8. 判断运动方向 ：根据速度的正负值来判断方向 用parseInt()取整会造成数据偏差
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);



            //9. 判断临界值运动剩余量 ：剩余运动量 <= 每次运动量
            if (Math.abs(target - current) <= Math.abs(speed)) {
                // 如果剩余运动量小于每次运动量，执行以下代码

                if (attr === "opacity") { //透明度
                    dom.style[attr] = target / 100; //目标值赋值给当前值
                } else if (attr.indexOf("scroll") !== -1) { //滚动条
                    dom[attr] = target; //目标值赋值给当前值
                } else { //其他值
                    dom.style[attr] = target + "px"; //目标值赋值给当前值
                }

                // 10.删除已经运动完成的属性：如果不删除，动画将会停止在先运动完的属性的画面
                delete options[attr];

                // 11.删除了运动完的属性之后，对剩下的属性继续遍历
                // 所有属性删除完之后，就不会执行以下的遍历
                // 如果没有删除完，返回false ，执行else
                for (var attr in options) {
                    // 还有其他属性没有运动完成，提前结束当前程序，不清除计时器
                    return false;
                }

                // 12，所有元素删除完之后，如果如果用户传入了回调函数，则执行回调函数
                typeof callBack === "function" ? callBack() : "";

                // 13.清除所有计时器，整个动画结束
                clearInterval(dom.timer);

            } else {
                // 未达到终点的情况
                // 14.运动没结束时，将速度进行累加，再赋值给当前值，让元素继续运动
                options[attr].current += speed;

                // 15.对所有元素判断后，在进行赋值
                if (attr === "opacity") { //透明度
                    dom.style[attr] = options[attr].current / 100; //将当前值赋值给元素
                } else if (attr.indexOf("scroll") !== -1) { //滚动条
                    dom[attr] = options[attr].current; //将当前值赋值给元素
                } else if (attr === 'zIndex') {
                    dom.style[attr] = target
                } else { //其他元素
                    dom.style[attr] = options[attr].current + "px"; //将当前值赋值给元素
                }
            }
        }
    }, 20); //动画运行时间间隔
}

// 17 获取元素到最外层定位父级的距离
function offset(dom, bool) {
    var t = 0,
        l = 0
    var bdl = dom.clientLeft // 保存当前元素的左边框
    var bdt = dom.clientTop // 保存当前元素的上边框
    while (dom) {
        l += dom.offsetLeft + dom.clientLeft
        t += dom.offsetTop + dom.clientTop
            // 每次循环完让当前dom元素等于他的定位父级
        dom = dom.offsetParent
    }
    if (bool) { // 包含自身边框
        return { left: l, top: t }
    } else { // 不包含自身边框
        return { left: l - bdl, top: t - bdt }
    }
}

// 18判断是否是一个对象
function isObject(obj) {
    if (Object.prototype.toString.call(obj) === '[object Object]') {
        return true
    }
    return false
}


//   19 ajax请求
// ajax({
//     url:'./login.php',
//     type:'post',
//     data:{
//         un:nIpt.value,
//         pw:pIpt.value
//     },
//     dataType:'json',
//     cache:false,
//     success:function(json){
//         console.log(json);
//     }
// })
function ajax(options) {
    // data -> 'key=value&key=value'
    // 1.创建数据交互对象
    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest() // 非IE5 6
    } else {
        var xhr = new ActiveXObject('Microsoft.XMLHTTP') // IE5 6
    }

    // 判断并格式化参数data
    var data = ''
        // if (typeof options.data === 'object' && options.data !== null && options.data.constructor === 'Object') {
    if (isObject(options.data)) {
        // 把对象格式化成 -> 'k1=v1&k2=v2&k3=v3'
        for (var key in options.data) {
            data += key + '=' + options.data[key] + '&'
        }
        // data = 'k1=v1&k2=v2&k3=v3&'
        data = data.substring(0, data.length - 1)
    }

    if (typeof options.data === 'string') {
        data = options.data
    }

    // 判断请求方式
    if (options.type.toLowerCase() === 'get') {
        var time = ''
        time = options.cache ? '' : Date.now()
            // 2.打开连接
        xhr.open(options.type, options.url + '?' + data + '&_=' + time, true) // 默认true，异步
            // 3.发送请求
        xhr.send(null) // get请求传null
    }
    if (options.type.toLowerCase() === 'post') {
        // 2.打开连接
        xhr.open(options.type, options.url, true) // 默认true，异步
            // post 请不会有缓存问题

        // 设置请求头，作用 模拟表单 post 请求提交数据，在send方法之前设置
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

        // 3.发送请求
        xhr.send(data) // post请求 要传递的参数在此传
    }

    // 4.等待请求/响应状态
    // xhr.readyState  请求状态，0-4状态改变会触发一个readystatechange事件
    xhr.onreadystatechange = function() {
        // console.log( xhr.readyState );// 2 3 4
        if (xhr.readyState === 4) { // 请求完成
            // xhr.status 响应状态
            if (xhr.status === 200) { // OK 响应就绪
                // xhr.responseText 响应的数据
                // options.success(xhr.responseText)
                // 支持dataType配置
                if (options.dataType === 'json') {
                    var json = JSON.parse(xhr.responseText)
                    options.success(json)
                } else if (options.dataType === 'xml') {
                    options.success(xhr.responseXML)
                } else {
                    options.success(xhr.responseText)
                }
            } else {
                // console.log(xhr.status)
                options.error(xhr.status)
            }
        }
    }
}

//   20 jsonp请求
// jsonp({
//     url:'https://www.tianqiapi.com/api/',
//     data:'version=v1&appid=63631217&appsecret=Zb99RiDd&city='+ipt.value,
//     jsonp:'callback', 
//     jsonpCallback:'haha', 
//     success:function(json){
//         console.log(json);
//         div.innerHTML = `
//         <p>${json.city}</p>
//         <span>${json.data[0].day}</span>
//         <i>${json.data[0].date}</i>
//         <b>${json.data[0].week}</b>
//         <strong>${json.data[0].wea}</strong>
//         <em>${json.data[0].tem2}</em>
//         `
//     }
// })
// 天气预报接口（一周天气信息）
// url地址:https://www.tianqiapi.com/api/

// -----请求参数-----
//    version:'v1'
//    appid:'63631217'
//    appsecret:'Zb99RiDd'
//    city       城市名称，不要带市和区
//    callback   回调函数

// -----返回数据-----
// json对象
function jsonp(options) {
    // options.success 变成全局函数
    window[options.jsonpCallback] = options.success

    // 判断 options.data的数据类型
    // 如果字符串，直接赋值data变量
    // 如果是对象，转成参数序列的字符串
    var data = ''
    if (typeof options.data === 'string') {
        data = options.data
    }
    if (isObject(options.data)) {
        for (var key in options.data) {
            data += key + '=' + options.data[key] + '&'
        }
        data = data.substring(0, data.length - 1)
    }

    // 创建 script标签
    var oScript = document.createElement('script')
        // 给src属性赋值（url+接口参数）
    oScript.src = options.url + '?' + options.jsonp + '=' + options.jsonpCallback + '&' + data
        // 把script插入文档中
    document.body.appendChild(oScript)
        // script标签加载完成时，删除此标签
    oScript.onload = function() {
        document.body.removeChild(oScript)
    }
}

//   21 获取单个元素
function $1(selector) {
    return document.querySelector(selector)
}

// 22 获取元素集合
function $2(selector) {
    return document.querySelectorAll(selector)
}


// 23 promiseAjax
// promiseAjax({
//     url: './promise.php',
//     type: 'get',
//     dataType: 'json',
//     data: 'code=abc123'
//   })
//   .then((json)=>{
//     code = json.code
//     console.log(json.name)
//     return promiseAjax({
//       url: './promise.php',
//       type: 'get',
//       dataType: 'json',
//       data: 'code='+code
//     })
//   })
//   .then((json)=>{
//     code = json.code
//     console.log(json.age)
//     return promiseAjax({
//       url: './promise.php',
//       type: 'get',
//       dataType: 'json',
//       data: 'code='+code
//     })
//   })
//   .then((json)=>{
//     console.log(json.phone)
//   })
//   .catch((err)=>{
//     console.log(err)
//   })
function promiseAjax(options) {
    return new Promise((resolve, reject) => {
        // data -> 'key=value&key=value'
        // 1.创建数据交互对象
        if (window.XMLHttpRequest) {
            var xhr = new XMLHttpRequest() // 非IE5 6
        } else {
            var xhr = new ActiveXObject('Microsoft.XMLHTTP') // IE5 6
        }

        // 判断并格式化参数data
        var data = ''
            // if (typeof options.data === 'object' && options.data !== null && options.data.constructor === 'Object') {
        if (isObject(options.data)) {
            // 把对象格式化成 -> 'k1=v1&k2=v2&k3=v3'
            for (var key in options.data) {
                data += key + '=' + options.data[key] + '&'
            }
            // data = 'k1=v1&k2=v2&k3=v3&'
            data = data.substring(0, data.length - 1)
        }

        if (typeof options.data === 'string') {
            data = options.data
        }

        // 判断请求方式
        if (options.type.toLowerCase() === 'get') {
            var time = ''
            time = options.cache ? '' : Date.now()
                // 2.打开连接
            xhr.open(options.type, options.url + '?' + data + '&_=' + time, true) // 默认true，异步
                // 3.发送请求
            xhr.send(null) // get请求传null
        }
        if (options.type.toLowerCase() === 'post') {
            // 2.打开连接
            xhr.open(options.type, options.url, true) // 默认true，异步
                // post 请不会有缓存问题

            // 设置请求头，作用 模拟表单 post 请求提交数据，在send方法之前设置
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

            // 3.发送请求
            xhr.send(data) // post请求 要传递的参数在此传
        }

        // 4.等待请求/响应状态
        // xhr.readyState  请求状态，0-4状态改变会触发一个readystatechange事件
        xhr.onreadystatechange = function() {
            // console.log( xhr.readyState );// 2 3 4
            if (xhr.readyState === 4) { // 请求完成
                // xhr.status 响应状态
                if (xhr.status === 200) { // OK 响应就绪
                    // xhr.responseText 响应的数据
                    // options.success(xhr.responseText)
                    // 支持dataType配置
                    if (options.dataType === 'json') {
                        var json = JSON.parse(xhr.responseText)
                        resolve(json)
                    } else if (options.dataType === 'xml') {
                        resolve(xhr.responseXML)
                    } else {
                        resolve(xhr.responseText)
                    }
                } else {
                    // console.log(xhr.status)
                    reject(xhr.status)
                }
            }
        }
    })
}

//24 设置cookie  要传入一个对象 默认是时间设置是 秒
// 格林威治时间
// function setCookie(options) {
//     options.days = options.days || 0
//     options.path = options.path || ''
//     if (options.days === 0) {
//         document.cookie = options.key + '=' + options.val + '; path=' + options.path
//     } else {
//         var d = new Date()
//         d.setDate(d.getDate() + options.days)
//         document.cookie = options.key + '=' + options.val + '; expires=' + d + '; path=' + options.path
//     }
// }

// 北京时间
// setCookie({
//     val: 'jack',
//     key: 'user9',
//     days: 7, 
//     path:'',
// })
function setCookie(options) {
    options.days = options.days || 0
    options.path = options.path || ''
    if (options.days === 0) {
        document.cookie = options.key + '=' + options.val + '; path=' + options.path
    } else {
        var d = new Date()

        // 传入的是秒
        d.setTime(d.getTime() - (8 * 60 * 60 * 1000) + (options.days * 1000)) //days秒后cookie过期
            // 传入的是分钟

        // d.setTime(d.getTime() - (8 * 60 * 60 * 1000) + (options.days * 60 * 1000)) //days分后过期

        // 传入的是小时    
        // d.setTime(d.getTime() - (8 * 60 * 60 * 1000) + (options.days * 60 * 60 * 1000)) //days小时后过期
        document.cookie = options.key + '=' + options.val + '; expires=' + d + '; path=' + options.path
    }
}

//25 获取cookie
// getCookie('b')
function getCookie(key) {
    var arr = document.cookie.split('; ')
    for (var i = 0, len = arr.length; i < len; i++) {
        var arr2 = arr[i].split('=')
        if (arr2[0] === key) {
            return arr2[1]
        }
    }
    return null
}

// 26 删除cookie（cookie过期浏览器自动删除）
// removeCookie('b')
function removeCookie(key) {
    setCookie({
        key: key,
        val: '123',
        days: -2
    })
}

//27 判断数组中是否包含某个值
function has(arr, item) {
    for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
}

// 28 数组去重 2 和27一起用
function norepeat(arr) {
    var arr2 = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        if (!has(arr2, arr[i])) {
            arr2.push(arr[i]);
        }
    }
    return arr2;
}


//29 获取下一个兄弟节点
function getNextNode(dom) {
    if (dom.nextElementSibling) {
        return dom.nextElementSibling;
    } else {
        return dom.nextSibling;
    }
}

//30 获取上一个兄弟节点
function getPrevNode(dom) {
    if (dom.previousElementSibling) {
        return dom.previousElementSibling;
    } else {
        return dom.previousSibling;
    }
}

// 31 添加事件监听（兼容低版本浏览器）
function addEvent(dom, type, cb) {
    if (dom.attachEvent) {
        dom.attachEvent('on' + type, cb);
    } else {
        dom.addEventListener(type, cb);
    }
}

// 32 移除事件监听（兼容低版本浏览器）
function removeEvent(dom, type, cbName) {
    if (dom.detachEvent) {
        dom.detachEvent('on' + type, cbName);
    } else {
        dom.removeEventListener(type, cbName);
    }
}


// 33 事件委托封装
function on(parent, type, selector, callback) {
    addEvent(parent, type, function(ev) {
        var e = ev || event; //事件对象
        var target = e.target || e.srcElement; //事件源
        // 获取选择器第一个字符（ . ）
        var sel_first = selector.substr(0, 1);
        // 记录第一个字符之后的属性值（ add ）
        var sel_last = null;
        // 记录选择器类型（id className tagName）
        var sel_type = null;
        // 判断传入的是什么选择器
        switch (sel_first) {
            case '.': // 类选择器
                sel_last = selector.slice(1);
                sel_type = 'className';
                break;
            case '#': // id选择器
                sel_last = selector.slice(1);
                sel_type = 'id';
                break;
            default:
                sel_last = selector;
                sel_type = 'tagName';
        }

        // 只有传入selector元素被点击时触发
        if (sel_type === 'tagName') {
            // 如果是标签选择器，转成大写
            sel_last = sel_last.toUpperCase();
        }
        if (target[sel_type] === sel_last) {
            // callback(e);
            callback.call(target, e);
        }

        // 判断target是否为selector元素或selector的子元素
        // while(target !== parent){
        //     if (sel_type === 'tagName') {
        //         // 如果是标签选择器，转成大写
        //         sel_last = sel_last.toUpperCase();
        //     }
        //     if (target[sel_type] === sel_last) {
        //         // callback(e);
        //         callback.call(target,e);
        //     }
        //     target = target.parentNode;
        // }
    });
}

// 34.获取页面滚动的距离  滚动条
function getScroll01() {
    if (window.pageYOffset) {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset,
        }
    } else if (document.documentElement.scrollTop) {
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop,
        }
    } else {
        return {
            left: document.body.scrollLeft,
            top: document.body.scrollTop,
        }
    }
}

//34.1获取页面的滚动距离  获取页面滚动条滚走的距离
function getScroll() {
    return {
        left: document.documentElement.scrollLeft || document.body.scrollLeft,
        top: document.documentElement.scrollTop || document.body.scrollTop
    }
}



//36.去除str前后空格
function trim(str) {
    return str.replace(/(^\s+)|(\s+$)/g, "")
};


//37 测算元素距离页面的距离
function getDistance(dom) {
    var totalLeft = 0;
    var totalTop = 0;
    do {
        totalLeft += dom.offsetLeft;
        totalTop += dom.offsetTop;
        //下一次的dom节点就是本次dom节点的最近的有定位的父元素
        dom = dom.offsetParent;
    } while (dom.nodeName != "BODY")

    return {
        left: totalLeft,
        top: totalTop
    }

}


//38 封装一个函数,返回鼠标按键,要求:左0  中1  右2
function getButton(e) {
    //普通的函数
    if (e) {
        //如果接到的e确实有值,说明e不是undefined,说明当前浏览器不是IE678
        return e.button;
    } else {
        //就是IE678
        switch (window.event.button) {
            case 1:
                return 0;
            case 4:
                return 1;
            case 2:
                return 2;
        }
    }
}

//39 浏览器可视区域的宽高
function getClient() {
    if (document.compatMode == "BackCompat") {
        return document.body.clientWidth;
    } else {
        return document.documentElement.clientWidth;
    }
}



// 40 move:让指定元素的多属性匀速运动到指定目标
function move(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var flag = true; // 当开关变量的值为 true时，运动结束，可以停止定时器了		
        for (var attr in json) {
            var current = 0;
            if (attr == "opacity") {
                //操作透明度
                current = parseFloat(getStyle(obj, attr)) * 100;
            } else if (attr == "zIndex") {
                current = parseInt(getStyle(obj, attr)); //操作空间定位
            } else {

                //操作的是带有像素值的样式
                current = parseInt(getStyle(obj, attr)); //获取当前操作对象的实际值
            }
            var speed = (json[attr] - current) > 0 ? 1 : -1;
            //speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
            if (json[attr] != current) {
                //如果目标值 和 当前操作的样式值不相等，就不能停止定时器 
                flag = false;
            }
            //上面的条件不满足  继续执行运动
            if (attr == "opacity") {
                //操作透明度
                obj.style.opacity = (current + speed) / 100;
                obj.style.filter = "alpha(opacity=" + (current + speed) + ")";
            } else if (attr == "zIndex") {
                obj.style.zIndex = json[attr];
            } else {
                //操作的是带有像素值的样式
                obj.style[attr] = current + speed + "px";

            }
        }
        //如果flag为true   就停止定时器		
        if (flag) {
            clearInterval(obj.timer);
            //一个动作完成后,进入下一个动作(也就是要调用下一个函数)
            if (fn) { //判断如果有函数传递过来，就调用
                fn();
            }
        }

    }, 10)
}

// 41 匀变速反弹运动
// variableMotion(5, 16, ball, 30) 四个必传参数
function variableMotion(speedX, speedY, dom, time) {
    var speedX = speedX //横向初始速度
    var speedY = speedY // 垂直初始速度
        // 清除计时器
    clearInterval(dom.timer)

    dom.timer = setInterval(() => {

        // 获取当前位置
        var currentX = dom.offsetLeft
        var currentY = dom.offsetTop

        // 计算下一个位置
        var nextX = currentX + speedX
        var nextY = currentY + speedY

        // 临界值判断  每次到边界都需要改变速度的方向
        if (nextX <= 0) {
            nextX = 0
            speedX = -speedX
        }
        if (nextX >= window.innerWidth - dom.offsetWidth) {
            nextX = window.innerWidth - dom.offsetWidth
            speedX = -speedX
        }
        if (nextY >= window.innerHeight - dom.offsetHeight) {
            nextY = window.innerHeight - dom.offsetHeight
            speedY = -speedY
        }
        if (nextY <= 0) {
            nextY = 0
            speedY = -speedY
        }
        // 将得到的位置赋值给元素
        dom.style.left = nextX + 'px'
        dom.style.top = nextY + 'px'
    }, time)
}



// 42 放大镜 下面是传参形式，必传
// var obj = {
//     'minBox': content,
//     'mask': mask,
//     'maxBox': box,
//     'maxImg': bImg
// }
function glass(options) {
    console.log(options);
    // 鼠标移动，mask跟随移动，给mask的父盒子添加鼠标事件
    var minBox = 'minBox'
    var mask = 'mask'
    var maxBox = 'maxBox'
    var maxImg = 'maxImg'
    console.log(options[minBox]);
    options[minBox].onmousemove = function(eve) {
        var e = eve || event

        // 计算mask 的坐标
        // 蒙板层鼠标到父级的距离 = 鼠标到文档左侧的距离 - 父级到文档左侧的距离 - 鼠标到元素左侧的距离
        var maskLeft = e.pageX - offset(options[minBox]).left - options[mask].clientWidth / 2
        var maskTop = e.pageY - offset(options[maxBox]).top - options[mask].clientHeight / 2

        // 限制mask 的移动范围
        //当蒙板层左侧与父级的距离为 0 时 ，蒙版层停止移动
        if (maskLeft <= 0) {
            maskLeft = 0
        }
        // 当蒙版层右侧与父级的距离为0 时 ，蒙板层停止移动
        if (maskLeft >= options[minBox].clientWidth - options[mask].clientWidth) {
            //当蒙板层到达右侧时 蒙板层左侧的距离 = 父级元素的宽度 - 蒙版层的宽度
            maskLeft = options[minBox].clientWidth - options[mask].clientWidth
        }
        // 当蒙版层顶部与父级的距离为0 时，蒙板层停止移动
        if (maskTop < 0) {
            maskTop = 0
        }
        // 当蒙版层底部与父级的距离为 0 时 ，蒙板层停止移动
        if (maskTop >= (options[minBox].clientHeight - options[mask].clientHeight)) {
            // 当蒙版层到达底部时 蒙版层距离顶部的距离  = 父级元素的高度 - 蒙版层的高度
            maskTop = options[minBox].clientHeight - options[mask].clientHeight
        }

        // 实例化蒙版层到父级左侧的距离
        options[mask].style.left = maskLeft + 'px'
            // 实例化蒙版层到父级顶部的距离
        options[mask].style.top = maskTop + 'px'

        // 蒙版层与父级的宽度的比例
        var scaleX = maskLeft / (options[minBox].clientWidth - options[mask].clientWidth)
            // 蒙版层与父级高度的比例
        var scaleY = maskTop / (options[minBox].clientHeight - options[mask].clientHeight)

        // 大图跟随移动 --> 蒙版层的移动方向与大图的移动方向相反
        // 大图到大盒子左侧的距离 = 比例的负数 * 大图的宽度与大盒子的宽度的差
        options[maxImg].style.left = -scaleX * (options[maxImg].clientWidth - options[maxBox].clientWidth) + 'px'
            // 大图到大盒子顶部的距离 = 比例的负数 * 大图的高度与大盒子的高度的差
        options[maxImg].style.top = -scaleY * (options[maxImg].clientHeight - options[maxBox].clientHeight) + 'px'
    }

    // 鼠标移入小盒子
    options[minBox].onmouseenter = function() {
        options[mask].style.display = 'block' //蒙版层显示
        options[maxBox].style.display = 'block' //大盒子显示
    }

    // 鼠标移出小盒子
    options[minBox].onmouseleave = function() {
        options[mask].style.display = 'none' //蒙板层隐藏
        options[maxBox].style.display = 'none' //大盒子隐藏
    }

}


//43 加了层级的动画函数
// 类似animate传参
function animation(dom, options, callback) {

    console.log(dom)
    clearInterval(dom.timer) // 清除定时器
    dom.timer = setInterval(() => { // 开启定时器
        // 声明一个开关，记录运动完成后，是否能停止计时器
        var flag = true
        for (var attr in options) {
            // 获取当前元素的属性值
            if (attr === 'opacity') {
                var current = parseInt(getStyle(dom, attr) * 100) //透明度
            } else if (attr.indexOf("scroll") !== -1) {
                var current = dom[attr] //滚动条
            } else {
                var current = parseInt(getStyle(dom, attr)) //宽度
            }

            var speed = (options[attr] - current) / 10 // 设置速度
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed) // 速度取整
            var next = current + speed // 下一个位置
            if (attr === 'zIndex') { //层级
                next = options[attr]
            }
            // 如果所有的属性属性运动完，停止定时器
            if (current != options[attr]) {
                flag = false //为false说明还有属性没有运动完
            }

            // 最后的值赋值给div
            if (attr === 'opacity') {
                dom.style.opacity = next / 100 //透明度
            } else if (attr === 'zIndex') {
                dom.style.zIndex = next //层级
            } else if (attr.indexOf("scroll") !== -1) { //滚动条
                dom[attr] = next
            } else {
                dom.style[attr] = next + 'px'
            }
        }

        // 所有属性运动完成后，flag===true 则停止定时器，并且开始执行回调函数
        if (flag === true) {
            clearInterval(dom.timer)
            if (callback) {
                callback()
            }
        }
    }, 20)
}


// 44 浏览器视口的高度
function windowHeight() {
    if (document.compatMode == "CSS1Compat") {
        return document.documentElement.clientHeight;
    } else {
        return document.body.clientHeight;
    }
}


// 45 匹配字符的长度，汉字占两个，数字字母下划线空格占一个
function fn(str) {
    var reg = /[\u4e00-\u9fa5]/g //匹配汉字
    var reg1 = /[\w ]/g

    var num = str.match(reg).length * 2 + str.match(reg1).length
    return num
}

// 46.倒计时  显示在页面上
// countDown('2020/12/17 10:00:00')//传入未来时间
function countDown(days) {
    function getRTime(days) {
        var EndTime = new Date(days); //截止时间将来时间
        var NowTime = new Date();
        var t = EndTime.getTime() - NowTime.getTime();
        /*var d=Math.floor(t/1000/60/60/24);
        t-=d*(1000*60*60*24);
        var h=Math.floor(t/1000/60/60);
        t-=h*60*60*1000;
        var m=Math.floor(t/1000/60);
        t-=m*60*1000;
        var s=Math.floor(t/1000);*/
        var d = Math.floor(t / 1000 / 60 / 60 / 24); //天
        var h = Math.floor(t / 1000 / 60 / 60 % 24); //时
        var m = Math.floor(t / 1000 / 60 % 60); //分
        var s = Math.floor(t / 1000 % 60); //秒

        // return toDB(d) + "天" +  toDB(h) + "时" +  toDB(m) + "分" +  toDB(s) + "秒"
        document.getElementById("t_d").innerHTML = toDB(d) + "天";
        document.getElementById("t_h").innerHTML = toDB(h) + "时";
        document.getElementById("t_m").innerHTML = toDB(m) + "分";
        document.getElementById("t_s").innerHTML = toDB(s) + "秒";
    }
    setInterval(() => {
        setInterval(getRTime(days), 1000);
    }, 1000, days)
}