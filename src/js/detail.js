window.onload = function(){
// 获取商品列表页传过来的id--地址栏
var id = location.href.split('?')[1].split('=')[1]
console.log(id);






// 页面数据请求和渲染
ajax({
    url:'../data/goodslist.json',
    type:'get',
    dataType:'json',
    cache:'false',
    success:function(json){
        // console.log(json);
        pagedata(json)
        renderer()
    }
})
var main_app = document.querySelector('.main_app')
function pagedata(json){

    json.forEach((item)=>{
        if(item['ID'] == id){
            var div = document.createElement('div')
            div.className = 'main'
            div.innerHTML = `
            <div class="main_head">
                <p class="container">${item['店铺名称']}</p>
            </div>
            <div class="productCheck container">
                <div class="productCheck_left">
                    <div class="minImgTop">
                        <img src="${item['图片地址']}" alt="">
                        <div class="mask"></div>
                    </div>
                    <div class="maxImgbox">
                        <img src="${item['图片地址']}" alt="">
                    </div>
                    <ul class="minImg">
                        <li><p class="prev"> &lt; </p></li>
                        <div class="minImgbox">
                            <div class="minImgbox_gather">
                                <li class="minImgbox_show"><img src="${item['图片地址']}" alt=""></li>
                                <li><img src="${item['图片地址']}" alt=""></li>
                                <li><img src="${item['图片地址']}" alt=""></li>
                                <li><img src="${item['图片地址']}" alt=""></li>
                                <li><img src="${item['图片地址']}" alt=""></li>
                                <li><img src="${item['图片地址']}" alt=""></li>
                                <li><img src="${item['图片地址']}" alt=""></li>
                                <li><img src="${item['图片地址']}" alt=""></li>
                            </div>
                        </div>
                        <li><p class="next"> &gt; </p></li>
                    </ul>
                </div>
                <div class="productCheck_right">
                    <p>标题</p>
                    <div class="productPrice">
                        <div class="productPrice_left">
                            <p>京东价</p>
                        </div>
                        <div class="productPrice_center">
                            <p><span>￥</span><b>${item['价格']}</b><i>降价通知</i></p>
                            <p><span>￥</span><b>${item['价格']*0.9}</b><i>PLUS</i><em>PLUS会员专享价</em><strong>现在开通PLUS会员享限时优惠 >></strong></p>
                        </div>
                        <div class="productPrice_right">
                            <p>累计评价</p>
                            <span>${item['总评价数']}</span>
                        </div>
                    </div>
                    <div class="dispatching">
                        <div class="dispatching_head">
                            <div class="dispatching_head_left">
                                <p>配送至</p>
                            </div>
                            <div class="dispatching_head_right">
                                <p><span>收货地址</span><b>有货</b></p>
                                <ul class="support">
                                    <li>支持</li>
                                    <li>可配送海外</li>
                                    <li>闪电退款</li>
                                    <li>随心换</li>
                                    <li>99元免基础运费</li>
                                </ul>    
                                <ul class="delivery"> 
                                    <li><img src="//img10.360buyimg.com/imagetools/jfs/t1/136750/17/12251/5189/5f8586e6E483b2f57/78ee33bdc7ef8c35.png" alt=""></li>
                                    <li>次日达</li>
                                    <li>预约送货</li>
                                    <li>送货上门</li>
                                </ul>
                                <p>由 京东 发货, 并提供售后服务. 23:00前下单，预计明天(01月06日)送达</p>
                            </div>
                        </div>
                        <div class="dispatching_foot">
                            <span>重量</span>
                            <b>3.0 kg</b>
                        </div>
                    </div>
                    <div class="productNum">
                        <div class="productNum_left">
                            <span class="PNum01">1</span>
                            <!-- <input type="text" class="PNum" value="1"> -->
                            <p><span class="add">+</span><b class="cut">-</b></p>
                        </div>
                        <div class="productNum_right">
                            <span class="buyCart">加入购物车</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 详情 -->
            <div class="productDetail">
                <div class="productDetail_top">
                    <div class="productDetail_top_title">
                        <h3>店长推荐</h3>
                    </div>
                    <ul class="productDetail_head">
                        <li>
                            <img src="${item['图片地址']}" alt="">
                            <p><span>￥</span><b>${item['价格']}</b></p>
                        </li>
                        <li>
                            <img src="${item['图片地址']}" alt="">
                            <p><span>￥</span><b>${item['价格']}</b></p>
                        </li>
                        <li>
                            <img src="${item['图片地址']}" alt="">
                            <p><span>￥</span><b>${item['价格']}</b></p>
                        </li>
                        <li>
                            <img src="${item['图片地址']}" alt="">
                            <p><span>￥</span><b>${item['价格']}</b></p>
                        </li>
                        <li>
                            <img src="${item['图片地址']}" alt="">
                            <p><span>￥</span><b>${item['价格']}</b></p>
                        </li>
                        <li>
                            <img src="${item['图片地址']}" alt="">
                            <p><span>￥</span><b>${item['价格']}</b></p>
                        </li>
                    </ul>
                </div>
                <div class="productDetail_main container">
                    <div class="productDetail_main_title">
                        <h3 class="active">商品介绍</h3>
                        <h3>规格与包装</h3>
                        <h3>售后保障</h3>
                        <h3>商品评价(${item['总评价数']})</h3>
                        <h3>本店好评</h3>
                    </div>
                    <ul class="productDetail_content">
                        <li class="show">1
                            <img src="${item['图片地址']}" alt="">
                            <img src="${item['图片地址']}" alt="">
                        </li>
                        <li>2
                            <img src="${item['图片地址']}" alt="">
                        </li>
                        <li>3
                            <img src="${item['图片地址']}" alt="">
                        </li>
                        <li>4
                            <img src="${item['图片地址']}" alt="">
                        </li>
                        <li>5
                            <img src="${item['图片地址']}" alt="">
                        </li>
                    </ul>
                </div>
            </div>
            `
            main_app.appendChild(div)
            bigGlass()
            changedData()
        }
    })
}
// 获取本地数据
function renderer(){
    let data = JSON.parse(localStorage.getItem('goods'))
    // console.log(data);
    var PNum01 = document.querySelector('.PNum01')  //数量的盒子
    console.log(PNum01);
    data.forEach((item)=>{

        if(item.id == id){
            PNum01.innerHTML = item.num 
        }
    })
}

// 点击我的购物车
var myBuyCart = document.querySelector('.myBuyCart')
myBuyCart.onclick = function(){
    location.href = './cart.html'
}


// 放大镜和其他js
function bigGlass(){

    var minImgTop = document.querySelector('.minImgTop') //小盒子
    var minImg = document.querySelector('.minImgTop img') //小盒子的图片
    var mask = document.querySelector('.mask')
    var maxImgbox = document.querySelector('.maxImgbox') //大盒子
    var bImg = document.querySelector('.maxImgbox img') //大图
    var minbox01 = document.querySelector('.productCheck_left') //左侧大盒子

    minImgTop.onmousemove = function(eve){
        var e = eve || event 
        // 计算mask的坐标
        var maskLeft = e.pageX - minbox01.offsetLeft- mask.clientWidth/2
        var maskTop = e.pageY - minbox01.offsetTop - mask.clientHeight/2

        // 限制mask的移动范围
        if(maskLeft<0){
            maskLeft =0
        }
        if(maskLeft> (minImgTop.clientWidth/2)){
            maskLeft = (minImgTop.clientWidth/2)
        }
        if(maskTop <=0){
            maskTop = 0
        }
        if(maskTop>(minImgTop.clientHeight/2)){
            maskTop = (minImgTop.clientHeight/2)
        }
        // mask跟随移动
        mask.style.left = maskLeft + 'px'
        mask.style.top = maskTop + 'px'

        // 蒙版层与父级的宽度的比例
        var scaleX = maskLeft / (minImgTop.clientWidth - mask.clientWidth)
        // 蒙版层与父级高度的比例
        var scaleY = maskTop / (minImgTop.clientHeight - mask.clientHeight)

        // 大图跟随移动 --> 蒙版层的移动方向与大图的移动方向相反
        // 大图到大盒子左侧的距离 = 比例的负数 * 大图的宽度与大盒子的宽度的差
        bImg.style.left = -scaleX * (bImg.clientWidth - maxImgbox.clientWidth) + 'px'
        // 大图到大盒子顶部的距离 = 比例的负数 * 大图的高度与大盒子的高度的差
        bImg.style.top = -scaleY * (bImg.clientHeight - maxImgbox.clientHeight) + 'px'
    }
    minImgTop.onmouseenter = function(){
        mask.style.display = 'block'
        maxImgbox.style.display = 'block'
    }
    minImgTop.onmouseleave = function(){
        mask.style.display = 'none'
        maxImgbox.style.display = 'none'
    }

    // 小图轮播
    var prev = document.querySelector('.prev')  //上一张
    var next = document.querySelector('.next')  //下一张
    var minImgbox_gather = document.querySelector('.minImgbox_gather')  //所有小图片的盒子
    var imgs = document.querySelectorAll('.minImgbox_gather li') //所有的图片
    var currentIndex = 0 //当前移动的图片的下标
    var showIndex = 0 //当前显示的图片的下标
    var prevIndexclick = 0  //上一次点击的图片下标

    // 获取图片的数量
    var imgLen = imgs.length
    // 获取单张图片的宽度
    var imgWidth = imgs[0].clientWidth + 4
    // 播放下一张
    function nextMove(){
        // 每点击一次加一
        currentIndex++ 
        showIndex++
        if(showIndex>=imgLen-1){
            showIndex = imgLen-1
        }
        // 点击上一张加边框，需要这个效果可以打开
        // imgs[prevIndexclick].className = ''
        // imgs[showIndex-1].className = ''
        // imgs[showIndex].className = 'minImgbox_show'
        // 将小图放入小盒子
        // minImg.src = imgs[showIndex].firstElementChild.src
        // minImg.setAttribute('src',imgs[showIndex].firstElementChild.getAttribute('src'))
        // 替换大图的图片路径
        // bImg.src = imgs[showIndex].firstElementChild.src
        // bImg.setAttribute('src',imgs[showIndex].firstElementChild.getAttribute('src'))

        // 判断临界值，是否到达最后一张
        if(currentIndex>=imgLen-4){
            currentIndex = imgLen -5
            return
        }
        animate(minImgbox_gather,{
            left:minImgbox_gather.offsetLeft - imgWidth
        })
        // minImgbox_gather.style.left = minImgbox_gather.offsetLeft - imgWidth + 'px'
    }


    // 播放上一张
    function prevMove(){
        currentIndex--
        showIndex--
        if(showIndex<=0){
            showIndex=0
        }
        // 点击上一张加边框，需要这个效果可以打开
        // imgs[prevIndexclick].className = ''
        // imgs[showIndex+1].className = ''
        // imgs[showIndex].className = 'minImgbox_show'

        // 将小图放入小盒子
        // minImg.src = imgs[showIndex].firstElementChild.src
        // minImg.setAttribute('src',imgs[showIndex].firstElementChild.getAttribute('src'))
        // 替换大图的图片路径
        // bImg.src = imgs[showIndex].firstElementChild.src
        // bImg.setAttribute('src',imgs[showIndex].firstElementChild.getAttribute('src'))

        if(currentIndex<0){
            currentIndex = 0
            return
        }
        // console.log(currentIndex);
        animate(minImgbox_gather,{
            left:minImgbox_gather.offsetLeft + imgWidth
        })
        // minImgbox_gather.style.left = minImgbox_gather.offsetLeft + imgWidth + 'px'

    }
    next.onclick = function(){
        nextMove()
        console.log(currentIndex);
    }
    prev.onclick = function(){
        console.log(currentIndex);
        prevMove()
    }

    // 点击小图放入左边盒子显示
    for(var i =0 ; i< imgs.length;i++){
        imgs[i].index = i
        imgs[i].onmouseenter = function(){
            imgs[prevIndexclick].className = ''
            imgs[showIndex].className = ''
            imgs[this.index].className = 'minImgbox_show'
            minImg.src = imgs[this.index].firstElementChild.src //小图的图片路径
            bImg.src = imgs[this.index].firstElementChild.src //大图的图片路径
            prevIndexclick = this.index
        }
    }
}


// 修改数量
function changedData(){
    var productNum = document.querySelector('.productNum') //最大的盒子
    // 事件委托
    productNum.onclick = function(e){
        var target = e.target 
        var PNum01 = document.querySelector('.PNum01')  //span标签
        // var PNum = document.querySelector('.PNum')  //输入框数量
        var numVal = PNum01.innerHTML
        // 点击加号
        if(target.className === 'add'){
            // 获取本地数据
            let data = JSON.parse(localStorage.getItem('goods'))
            console.log(data);
            data.forEach((item)=>{
                if(item.id == id){
                    console.log(666);
                    if(item.num>=10){
                        item.num = 10
                        console.log('超出购买数量');
                    }else{
                        item.num++
                    }

                }
            })

            // 修改后加入本地存储
            localStorage.setItem('goods',JSON.stringify(data))

            numVal++
            if(numVal>=10){
                numVal=10  //商品加到最多
                console.log('商品加到最多');
            }
            PNum01.innerHTML = numVal
        }

        // 点击减号
        if(target.className === 'cut'){
            let data = JSON.parse(localStorage.getItem('goods'))
            console.log(data);
            data.forEach((item)=>{
                if(item.id == id){
                    console.log(666);
                    if(item.num<=1){
                        item.num = 1
                        console.log('超出购买数量');
                    }else{
                        item.num--
                    }

                }
            })

            // 修改后加入本地存储
            localStorage.setItem('goods',JSON.stringify(data))

            numVal--
            if(numVal<=1){
                numVal=1
                console.log('商品数量减到了最少');
            }
            PNum01.innerHTML = numVal
        }

        // 输入框修改数量
        if(target.className === 'PNum01'){
            var input = document.createElement('input')  //创建输入框
            input.className = 'PNum'
            input.value = numVal
            target.parentElement.replaceChild(input,target)
            input.focus()
            // 失去焦点
            input.onblur = function(){
                var span = document.createElement('span') //创建span标签
                span.className = 'PNum01'
                if(this.value>=10){
                    this.value = 10
                }
                if(this.value<=1){
                    this.value = 1
                }
                // 获取本地数据
                let data = JSON.parse(localStorage.getItem('goods'))
                data.forEach((item)=>{
                    if(item.id == id){
                        console.log(666);
                        console.log(this);
                        item.num = this.value
                    }
                })
                // 修改后加入本地存储
                localStorage.setItem('goods',JSON.stringify(data))
                // 将加好的数据渲染到页面
                span.innerHTML = this.value
                input.parentNode.replaceChild(span,input)
            }
        }

        // 点击加入购物车
        if(target.className === 'buyCart'){
            var spanVal06 = PNum01.innerHTML-0  //输入框里面的值
            console.log(spanVal06);
            let data = JSON.parse(localStorage.getItem('goods'))  //本地数据
            data.forEach((item)=>{
                if(item.id == id){
                    console.log(666);
                    if(item.num + spanVal06 > 10){
                        alert('超出购买上限');
                    }else{
                        item.num += spanVal06
                        // PNum01.innerHTML = item.num
                        alert('加入购物车成功');
                    }
                }
            })
            // 修改后加入本地存储
            localStorage.setItem('goods',JSON.stringify(data))

        }
    }

    var h3s = document.querySelectorAll('.productDetail_main_title h3')
    var lis = document.querySelectorAll('.productDetail_content li')
    console.log(h3s);
    console.log(lis);
    var prevIndex = 0
    for (let i = 0; i < h3s.length; i++) {
        h3s[i].index = i
        h3s[i].onclick = function(){
            h3s[prevIndex].className = ''
            lis[prevIndex].className = ''
            h3s[this.index].className = 'active'
            lis[this.index].className = 'show'
            prevIndex = this.index
        }
    }
}
}

