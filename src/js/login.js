
// 点击返回主页
var backIndex = document.querySelector('.backIndex')
backIndex.onclick = function(){
    location.href = './index.html'
}


// 登录的选项卡
loginTab()
function loginTab(){
    var h3s = document.querySelectorAll('.min_tit h3')
    var divs = document.querySelectorAll('.min_box>div')
    var prevIndex = 0
    for(let i = 0 ; i< h3s.length ; i++){
        h3s[i].index = i
        h3s[i].onclick = function(){
            if(this.index==0){
                h3s[prevIndex].className = ''
                divs[prevIndex].className = 'user_box'
                h3s[this.index].className = 'active'
                divs[this.index].className = 'QR_box show'
            }else{
                h3s[prevIndex].className = ''
                divs[prevIndex].className = 'QR_box'
                h3s[this.index].className = 'active'
                divs[this.index].className = 'user_box show'
            }
            prevIndex =this.index
        }
    }
}

// 扫码登录
QR_login()
function QR_login(){
    var code = document.querySelector('.code')
    var code_phone = document.querySelector('.code_phone')
    var sCode = document.querySelector('.sCode')
    sCode.onmouseenter = function(){
        animate(code,{
            left:20
        })
        code_phone.timer = setTimeout(()=>{
            animate(code_phone,{
                opacity:1
            },2000)
        })
    }
    sCode.onmouseleave = function(){
        animate(code,{
            left:100
        })
        code_phone.timer = setTimeout(()=>{
            animate(code_phone,{
                opacity:0
            },2000)
        })
    }
}

// 账户登录
var login = document.querySelector('.login p:last-child span')
var user = document.querySelector('.user')
var pass = document.querySelector('.pass')
// console.log(login);
// console.log(user);
// console.log(pass);
login.onclick = function(){
    var userVal = user.value  //输入的用户名
    var passVla = pass.value  //输入的密码 
    var flag = false
    var flag1 = false
    // 验证用户名
    var reg = /^(\+861|1)(3|5|7|8)\d{9}$/ //手机号验证
    var reg2 = /^.{6,12}$/  //密码验证

    if(userVal===''){
        // console.log('用户名不能为空');
        flag = false
    }else if(!reg.test(userVal)){
        // console.log('用户名错误');
        flag = false
    }else{
        // console.log('用户名输入正确');
        flag = true
    }
    // 验证密码
    if(passVla === ''){
        // console.log('密码不能为空');
        flag1 = false
    }else if(!reg2.test(passVla)){
        // console.log('密码输入错误');
        flag1 = false
    }else{
        // console.log('密码正确');
        flag1 = true
    }

    // 验证是否存在该用户名和密码
    // 获取本地存储中的账户数据
    
    if(flag&&flag1){
        var data = JSON.parse(localStorage.getItem('user_pass'))
        // console.log(data);
        data.forEach((item)=>{
            if(item.username01=== userVal && item.password01 === passVla){
                alert('登录成功')

                // console.log('登录成功');
                return
            }else{
                console.log('用户名或密码错误');
            }
        })
        
    }
}