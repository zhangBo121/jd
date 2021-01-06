// 获取本地存储中的数据
var goodArr = JSON.parse(localStorage.getItem('goods'))
// console.log(goodArr);

// 点击返回商品列表
var back = document.querySelector('.back')
back.onclick = function(){
    location.href = './goodslist.html'
}

// 点击logo返回主页
var backIndex = document.querySelector('.backIndex')
backIndex.onclick = function(){
    location.href = './index.html'
}

// ajax请求数据进行匹配
ajax({
    url:'../data/goodslist.json',
    type:'get',
    dataType:'json',
    data:'',
    success:function(json){
        // console.log(json);
        fn(json)
    }
})

function fn(json){
var list = document.querySelector('.list')  //所有商品的大盒子
var mian = document.querySelector('.main')  //主体内容的大盒子
// 把ajax请求过来的数据和本地存储中的数据进行匹配
goodArr.forEach((item)=>{
    // console.log(item.id);
    // console.log(json);
    json.forEach(ele=>{
        // console.log(ele['ID']);
        if(item.id===ele['ID']-0){
            // console.log(ele['ID']-0);
            // 创建li标签
            var li = document.createElement('li')
            li.index = item.id //自定义属性 index 用来记录下标
            // 给每个li添加下标
            li.innerHTML = `
            <div class="listHeader">
                <input type="checkbox" class="listHeader_left">
                <span>${ele['店铺名称']}</span>
            </div>
            <div class="listFooter">
                <input type="checkbox" class="odd">
                <img src="${ele['图片地址']}" alt="">
                <span>${ele['商品名称']}</span>
                <p class="unitPrice"><b>￥</b><i class='price02'>${ele['价格']}</i></p>
                <div class="num01"><b class='minus'> - </b><span class='num02'>${item.num}</span><i class='add'> + </i></div>
                <p class="subtotal"><b>￥</b><i class='price01'>${item.num*ele['价格']}</i></p>
                <em class="del">删除</em>
            </div>
            `
            list.appendChild(li)
        }
    })
})




// 事件委托开始
mian.onclick = function(e){
    var target = e.target
    var all = document.querySelector('.all')
    var list = document.querySelector('.list')  //包裹所有商品的大盒子
  
    // 点击加号
    if(target.className==='add'){
        // console.log(111);
        var unit = target.parentElement.previousElementSibling.lastElementChild.innerHTML-0 //价格
        var num02 = target.previousElementSibling.innerHTML-0  //数量
        var addUp = target.parentElement.nextElementSibling.lastElementChild.innerHTML-0 //小计

        let li = target.parentElement.parentElement.parentElement //商品的盒子
        let data = JSON.parse(localStorage.getItem('goods'))

        num02++  //每点击一次num02+1
        if(num02>10){
            num02=10
            alert('超出购买上限')
        }
        data.forEach((item)=>{
            if(item.id===li.index){
                item.num = num02
            }
        })
        addUp = num02*unit //计算小计
        // 给页面重新赋值
        target.previousElementSibling.innerHTML = num02 //数量
        target.parentElement.nextElementSibling.lastElementChild.innerHTML = addUp  //小计

        // 更新本地储存的数据
        localStorage.setItem('goods',JSON.stringify(data))
        total()
    }

    // 点击减号
    if(target.className==='minus'){
        var unit = target.parentElement.previousElementSibling.lastElementChild.innerHTML-0 //价格
        var num02 = target.nextElementSibling.innerHTML-0 //数量
        var addUp = target.parentElement.nextElementSibling.lastElementChild.innerHTML-0 //小计
        let li = target.parentElement.parentElement.parentElement //商品的盒子
        let data = JSON.parse(localStorage.getItem('goods'))
        num02-- //每点击一次num02减1
        if(num02<1){
            num02=1
            alert('已经减到最少')
        }
        data.forEach((item)=>{
            if(item.id===li.index){
                item.num = num02
            }
        })
        // 计算小计
        addUp = num02*unit
        // 更新页面数据
        target.nextElementSibling.innerHTML = num02  //数量
        target.parentElement.nextElementSibling.lastElementChild.innerHTML = addUp  //小计
        // 更新本地数据
        localStorage.setItem('goods',JSON.stringify(data))
        total()
    }

    // 判断数组里面是否存在该元素
    function hasArr(arr,ele){
        for(var i = 0 ; i < arr.length ; i++){
            if(arr[i]===ele){
                return true
            }
        }
        return false
    }

    // 商品单选
    if(target.className==='odd'){
        var checks = document.querySelectorAll('.odd')  //每个商品的单选集合
        var checkArr = []  //记录每个商品的勾选情况
        for(var i = 0 ; i< checks.length;i++){
            if(checks[i].checked){
                checkArr.push('a')
                checks[i].parentElement.previousElementSibling.firstElementChild.checked = true
            }else{
                checkArr.push('b')
                checks[i].parentElement.previousElementSibling.firstElementChild.checked = false
            }
        }
        // 判断全选是否需要勾选
       if(hasArr(checkArr,'b')){
            all.checked = false
       }else{
           all.checked = true
       }
       total()
    }

    // 全选
    if(target.className==='all'){
        // console.log(all);
        var checks = document.querySelectorAll('.odd')
        for(var i = 0 ; i<checks.length;i++){
            if(all.checked){
                checks[i].checked = true
                checks[i].parentElement.previousElementSibling.firstElementChild.checked = true
            }else{
                checks[i].checked = false
                checks[i].parentElement.previousElementSibling.firstElementChild.checked = false
            }
        }
        total()
    }       
    
    // 计算总价
    function total(){
        var checks = document.querySelectorAll('.odd') //所有单选
        var total01 = 0 //总计
        var num03 = 0 //总数量
        for(var i = 0 ; i<checks.length;i++){
            if(checks[i].checked){
                var num02 = checks[i].parentElement.lastElementChild.previousElementSibling.previousElementSibling.nextElementSibling.previousElementSibling.firstElementChild.nextElementSibling.innerHTML-0
                var addUp = checks[i].parentElement.lastElementChild.previousElementSibling.lastElementChild.innerHTML-0 //小计
                total01 += addUp
                num03 += num02
            }
        }
        all.parentElement.parentElement.lastElementChild.lastElementChild.previousElementSibling.innerHTML = total01  //总计
        all.parentElement.parentElement.lastElementChild.firstElementChild.firstElementChild.innerHTML = num03 //总数量
    }

    // 点击删除
    if(target.className==='del'){
        let data = JSON.parse(localStorage.getItem('goods'))
        let li = target.parentElement.parentElement
        data.forEach((item,index)=>{
            if(item.id===li.index){
                data.splice(index,1)
            }
        })
        // 更新本地数据
        localStorage.setItem('goods',JSON.stringify(data))

        list.removeChild(target.parentElement.parentElement)
        total()
    }

    // 点击删除选中的商品
    if(target.className==='dels'){
        var checks = document.querySelectorAll('.odd')  //所有的单选
        let data = JSON.parse(localStorage.getItem('goods')) //本地数据
        
        for(var i = 0 ; i < checks.length;i++){
            let li = checks[i].parentElement.parentElement  //商品盒子
            if(checks[i].checked){
                // 删除已经勾选的节点
                list.removeChild(checks[i].parentElement.parentElement)
                data.forEach((item,index)=>{
                    if(item.id===li.index){
                        // 删除已经勾选的数据
                        data.splice(index,1)
                    }
                })
                // 更新本地存储
                localStorage.setItem('goods',JSON.stringify(data))
            }
        }
        // 如果购物车中没有了商品，全选就取消
        if(data){
            all.checked = false
        }
        // 计算总价
        total()
    }
    
    // 店铺单选
    if(target.className==='listHeader_left'){
        var checks = document.querySelectorAll('.odd')  //商品单选
        var checks01 = document.querySelectorAll('.listHeader_left') //店铺单选
        var goodCheck = target.parentElement.nextElementSibling.firstElementChild //商品单选
        console.log(goodCheck);
        goodCheck.checked = target.checked

        // for(let i = 0 ; i < checks01.length ; i++){
        //     // console.log(checks01[i].checked);
        //     if(checks01[i].checked){
        //         goodCheck.checked = true
        //     }else{
        //         goodCheck.checked = false
        //     }
        // }
        let arr = []
        Array.from(checks01).forEach(item=>{
             arr.push(item.checked)
        })
        all.checked = arr.every(item=>item)

    }

}


}
