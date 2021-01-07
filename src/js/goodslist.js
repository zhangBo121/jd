// 点击我的购物车去购物车页面
var myBuyCart = document.querySelector('.myBuyCart')
myBuyCart.onclick = function(){
    location.href = './cart.html'
}



ajax({
    url:'../data/goodslist.json',
    type:'get',
    dataType:'json',
    data:'',
    success:function(json){
        console.log(json);
        pageLoad(json)
    },
    error:function(err){
        console.log(err);
    }
})


function pageLoad(json){
    // 请求页面数据
    var list = document.querySelector('.list')
    json.forEach((item)=>{
        // 创建商品的大盒子
        var li = document.createElement('li')
        // 给盒子添加内容
        li.innerHTML = `
        <p><a href="#"><img data-src=${item['图片地址']} alt="${item['商品名称']}" title="${item['商品名称']}"></a></p>
        <p><i>￥ </i><b>${item['价格']}</b></p>
        <p><a href="#">${item['商品名称']}</a></p>
        <p>【京品】</p>
        <p><b>${item['总评价数']}</b><span>条评价</span></p>
        <p><a href="#">${item['店铺名称']}</a></p>
        <p>${item['店铺类型']}</p>
        <p><em><a href='./detail.html?id=${item['ID']}'>查看详情</a></em><span><i class="iconfont icon-gouwuche"></i><b class='addGoods'>加入购物车</b></span></p>
        `
        list.appendChild(li)

    })
    var addGoodsArr = document.querySelectorAll('.addGoods')  //所有的加入购物车按钮
    var a = Array.from(addGoodsArr)

    a.forEach((item,index)=>{
        // console.log(_json);
        // 给当前点击的加入购物车添加点击事件
        item.onclick = function(){
            console.log(index);
            var id = index+1

            // 点击后，先判断本地储存中是否有数据
            if(localStorage.getItem('goods')){
                var goodsArr = JSON.parse(localStorage.getItem('goods'))
            }else{
                var goodsArr = []
            }

            // 设置一个监听器判断本地储存中是否有这条数据
            var hasGoods = false   //没有就是false

            // 判断当前选中的商品是否在购物车中
            if(goodsArr.length>0){
                goodsArr.forEach((item)=>{
                    
                    if(item.id===id){
                        item.num++
                        hasGoods = true
                        return false
                    }
                })
            }

            // 判断本地是否存在该商品
            if(!hasGoods){
                goodsArr.push({id:id,num:1})
            }

            // 更新本地储存
            localStorage.setItem('goods',JSON.stringify(goodsArr))

            alert('加入购物车成功')
        }
    })

    // 点击查看购物车
    var todoCart = document.querySelector('.todoCart')
    todoCart.onclick  =function(){
        location.href = './cart.html'
    }

    // 懒加载
    var arr = []
    // 所有商品的集合
    var products = list.children
    // 遍历所有商品，取出图片添加到arr
    for(var i =0 ; i < products.length ; i++){
        arr.push(products[i].firstElementChild.firstElementChild.firstElementChild)
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
    window.onscroll = function() {
        loadImg()
    }
}


// https://zhangbo121.github.io/src/pages/index.html