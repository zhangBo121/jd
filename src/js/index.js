









// 轮播图部分
var slider_img = document.querySelector('.slider-img')
var ul = document.querySelector('.slider_point')
var imgs = document.querySelectorAll('.slider-img ul li')

var width = imgs[0].offsetWidth // 获取图片的宽度
var num = imgs.length  //获取图片的数量
console.log(num);
console.log(width);

// 动态添加小圆点
for(var i = 0 ; i< imgs.length;i++){
    creatliPoint()
}

function creatliPoint(){
    var li = document.createElement('li')
    ul.appendChild(li)
}
for(var i = 0 ; i < num ; i++){
    num[i].style.left = width + 'px'
}