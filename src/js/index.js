










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