
// 登录注册按钮
var login = document.querySelector('.login').firstElementChild //顶部登录
var indexLoginTopR = document.querySelector('.index_login_top_r')  //中间部分登录
var localData = JSON.parse(localStorage.getItem('user_pass'))
localData.forEach((item)=>{
    if(item.haslogin === 1){
        // 顶部登录
        login.innerHTML = ''
        var newspan = document.createElement('span')
        newspan.className = 'newlogin'
        newspan.innerHTML = `
        用户${item.username01}
        `
        login.appendChild(newspan)


        // 中间部分
        indexLoginTopR.innerHTML = ''
        var newB = document.createElement('b')
        newB.className = 'loginB'
        newB.innerHTML = `欢迎用户${item.username01}`
        indexLoginTopR.appendChild(newB)
    }
})

// 点击退出登录
var newlogin = login.firstElementChild //用户名
// var newB = document.querySelector('.newB')  //主体用户名
var quitLogin = document.querySelector('.quitLogin')  //退出登录
// 顶部
login.onclick = function(){
    quitLogin.style.display = 'block'
}
// 主体
indexLoginTopR.onclick = function(){
    quitLogin.style.display = 'block'
}

quitLogin.onclick = function(e){ //退出登录
    e.stopPropagation?e.stopPropagation():e.cancelBubble=true
    var newem = document.createElement('em')
    newem.className = 'newem'
    newem.innerHTML = `<i><a href="./login.html">你好，请登录</a></i><b><a href="./register.html">免..</a></b>`
    login.appendChild(newem)
    quitLogin.style.display = 'none'
    newlogin.style.display = 'none'

    // 主体
    indexLoginTopR.innerHTML = ''
    indexLoginTopR.innerHTML = `
    <p>Hi~欢迎逛京东</p>
    <div><span class="login001">登录</span> | <span class="register001">注册</span></div>
    `

    // 退出登录后修改本地数据
    let localData01 = JSON.parse(localStorage.getItem('user_pass'))
    localData01.forEach((item)=>{
        if(item.haslogin === 1){
            item.haslogin = 0
        }
    })
    localStorage.setItem('user_pass',JSON.stringify(localData01))
}


// 主体部分的登录注册
var login001 = document.querySelector('.login001')  //主体登录
var register001 = document.querySelector('.register001')  //主体注册
console.log(99000);
console.log(login001);
console.log(register001);
// login001.onclick = function(){
//     location.href = './login.html'
// }
register001.onclick = function(){
    location.href = './register.html'
}


// 点击我的购物车去到我的购物车页面
var myBuyCart = document.querySelector('.myBuyCart')
myBuyCart.onclick = function(){
    location.href = './cart.html'
}


// 轮播图部分
slider()
function slider(){
var prev = document.querySelector('.prev')  //上一张
var next = document.querySelector('.next')  //下一张
var slider_point = document.querySelector('.slider_point')  //存放小圆点的容器
var bannerSlideshow = document.querySelector('.bannerSlideshow')  //最大的盒子
var imgArr = bannerSlideshow.children[0].children[0].children  //所有图片li的集合
var index = 0 //当前图片显示的下标
var width = bannerSlideshow.offsetWidth //当前最大盒子的实际宽度

// 自动生成小圆点
for(var i = imgArr.length-1 ; i>=0;i--){
    var li  = document.createElement('li')
    // li.innerHTML = i
    li.className = 'slider-ctrl-con'
    slider_point.insertBefore(li,slider_point.children[0])
}
// 把所有的图放到大盒子的右边，并显示第一张图
for(var i = 0 ; i < imgArr.length;i++){
    imgArr[i].style.left = width + 'px'
}
// 第一张显示
imgArr[index].style.left = 0

// 获取所有的小圆点
var liArr = slider_point.children
// console.log(liArr);
liArr[index].className = 'slider-ctrl-con light'

// 自动轮播
bannerSlideshow.timer = setInterval(()=>{
    nextMove()
},2000)
// 鼠标移入bannerSlideshow停止轮播，移出开始轮播
bannerSlideshow.onmouseenter = function(){
    bannerSlideshow.timer = clearInterval(bannerSlideshow.timer)
}
bannerSlideshow.onmouseleave = function(){
    bannerSlideshow.timer = setInterval(()=>{
        nextMove()
    },2000)
}



prev.onclick = prevMove
// 上一张
function prevMove(){
    var next = index-1  //下一张需要显示的图片的索引
    // 临界值判断
    if(next<0){
        next = imgArr.length-1
    }
    // 不管下一张在哪里，瞬间放到最左边
    imgArr[next].style.left = -width +'px'
    animate(imgArr[index],{
        left:width
    })
    animate(imgArr[next],{
        left:next
    })

    // 更新当前索引
    index = next
    light()
}

next.onclick = nextMove
// 下一张
function nextMove(){
    var next = index + 1 //下一张图片的下标
    // 临界值判断
    if(next>imgArr.length-1){
        next = 0
    }
    // 不管下一张在哪里、瞬间放到最右边
    imgArr[next].style.left = width + 'px'
    animate(imgArr[index],{
        left:-width
    })
    animate(imgArr[next],{
        left:0
    })
    index = next
    light()
}
// 点亮小圆点
function light(){
    // 先把所有的小圆点熄灭
    for(var i = 0 ; i < imgArr.length;i++){
        liArr[i].className = 'slider-ctrl-con'
    }    
    // 点亮当前的小圆点
    liArr[index].className = 'slider-ctrl-con light'
}
}


// 为你推荐选项卡
var lis = document.querySelectorAll('.main_list_top li')  //所有的标题
var divs = document.querySelectorAll('.main_list_goods li')  //所有的内容
tabContral(lis,divs)
function tabContral(lis,divs){
    var lis = lis
    var divs = divs
    var prevIndex = 0
    for(var i = 0 ; i<lis.length;i++){
        lis[i].index = i
        lis[i].onclick = function(){
            lis[prevIndex].className = ''
            divs[prevIndex].className = ''
            lis[this.index].className = 'active01'
            divs[this.index].className = 'show'
            prevIndex = this.index
        }
    }
}

// 秒杀
countdownClock()
function countdownClock(){
    var jdCDClock = document.querySelector('.jdCDClock')  //时间结束后的内容
    var countDown = document.querySelector('.countDown')
     countDownClock('2021/01/07 24:00:00')
    //  countDownClock('2021/01/07 14:44:30')
     function countDownClock(days) {
         var timer01
         var timer02
         function getRTimeClock(days) {
            var EndTime = new Date(days); //截止时间将来时间
            var NowTime = new Date();
            var t = EndTime.getTime() - NowTime.getTime();
            var h = Math.floor(t / 1000 / 60 / 60 % 24); //时
            var m = Math.floor(t / 1000 / 60 % 60); //分
            var s = Math.floor(t / 1000 % 60); //秒
            
            if(t<=0){
                jdCDClock.innerHTML = '活动已结束'
                countDown.innerHTML = ' ' 
                clearInterval(timer01)
                clearInterval(timer02)
            }
            document.getElementById("t_h").innerHTML = toDBClock(h);
            document.getElementById("t_m").innerHTML = toDBClock(m);
            document.getElementById("t_s").innerHTML = toDBClock(s);
         }
        timer01 = setInterval(() => {
            timer02 = setInterval(getRTimeClock(days), 1000);
         }, 1000, days)
     }

     function toDBClock(num) {
     return num < 10 ? "0" + num : num;
     }
}

// 猜你喜欢数据请求
ajax({
    url:'../data/guesslikegoods.json',
    type:'get',
    data:'',
    cache:true,
    dataType:'json',
    success:function(data){
        // console.log(data);
        rendererPage(data)
    }
})

// 渲染页面
function rendererPage(data){
    var li01 = document.querySelector('.main_list_goods li:nth-child(1)')
    var arr = []  //放图片地址
    data.forEach((item)=>{
        var div = document.createElement('div')
        div.className = 'main_list_gs'
        div.innerHTML = `
        <img data-src="${item['图片地址']}" alt="">
        <p>${item['商品名称']}</p>
        <span><i>￥</i>${item['价格']}</span>
        `
        li01.appendChild(div)
        // arr.push(item['图片地址'])
    })
    // 所有商品的集合
    var products = li01.children

    // 遍历所有商品，取出图片添加到arr
    for(var i =0 ; i < products.length ; i++){
        arr.push(products[i].children[0])
    }

    loadImg()
    function loadImg() {
        // 页面滚动条所在高度
        var scrollT = document.body.scrollTop || document.documentElement.scrollTop
            // console.log(scrollT);
            // 可视区高度
        var windowH = document.documentElement.clientHeight
            // console.log(windowH);
            // 遍历所有的商品
        for (var i = 0, len = arr.length; i < len; i++) {
            // 判断当前商品到最外层已定位父级 <= 滚动条的高度+窗口的高度
            if (offset(arr[i]).top <= scrollT + windowH) {
                // 当前图片进入可视区范围，给当前图片设置src
                arr[i].src = arr[i].getAttribute('data-src')
            }
        }
    }
    // 监听滚动条事件
    var back_top = document.querySelector('.back_top')
    var liArr = back_top.children
    var arr1 = [600,650,1200,1900]
    var backTopBut = liArr[liArr.length-1]
    var html = document.querySelector('html')
    var backIndex = 0
    light()
    var arr = [0]
    var scrollTop = 0
    for (var i = 0; i < arr1.length; i++) {
        scrollTop += arr1[i] //记录每个内容的高度
        arr.push(scrollTop) //将得到的高度加入arr中
    }
    console.log(arr);
    window.onscroll = function() {
        loadImg()

        if(getScroll().top>=400){
            back_top.style.display = 'block'
        }else{
            back_top.style.display = 'none'
        }

        for (var i = 0; i < arr.length - 1; i++) {
            if (getScroll().top > arr[i] && getScroll().top < arr[i + 1]) {
                backIndex = i //当前楼层 === i
                break; //终止当前程序
            }
        }

        light()
    }


    backTopBut.onclick = function(){
        animate(html, {
            'scrollTop': 0
        })
    }

        // 点击list菜单里面的li，页面缓动到相应楼层
    for (var i = 0; i < liArr.length - 1; i++) {
        // 保存当前楼层的下标
        liArr[i].index = i

        // 给li添加点击事件
        liArr[i].onclick = function() {
            // this.index.className = 'light'
            // light()


            animate(html, { //缓动，封装了scroll属性
                'scrollTop': arr[this.index] //内容的下标等于菜单的下标
            }, () => {
                backIndex = this.index
            })
        }
    }

    // 菜单高亮
    function light() {
        for (var i = 0; i < liArr.length - 1; i++) {
            liArr[i].className = ''
        }
        liArr[backIndex].className = 'light' //当前菜单添加背景颜色
    }
}




