window.onload = function(){
    var nextStep = document.querySelector('.nextStep')  //下一步按钮
    var phone = document.querySelector('.phone')  //手机号
    var verifyCode = document.querySelector('.verifyCode')  //验证码输入框
    var randomCode = document.querySelector('.randomCode')  //验证码
    var verifyPhone = document.querySelector('.verifyPhone')  //手机验证的大盒子
    var verifyUser = document.querySelector('.verifyUser')  //注册的大盒子
    var onespan = document.querySelector('.main_head h3:first-child span')  //顶部验证变色
    var twospan = document.querySelector('.main_head h3:nth-child(2) span')  //顶部验证变色
    var threespan = document.querySelector('.main_head h3:nth-child(3) span')  //顶部验证变色
    var verify01 = document.querySelector('.verify01')  //第一根横线
    var verify02 = document.querySelector('.verify02')  //第二根横线
    var registeredSuccessfully = document.querySelector('.registeredSuccessfully')  //注册成页面
    var otherRegister = document.querySelector('.otherRegister')  //底下的其他注册
    // 进入页面后加载验证码
    randomCode.innerHTML = getVerificationCode(6)

    // 点击验证码切换随机数
    randomCode.onclick = function(){
        randomCode.innerHTML = getVerificationCode(6)
    }

    var regPhone = /^(\+861|1)[3-9]\d{9}$/ //正则验证手机号
    var regpass = /^\w{6,8}$/  //验证密码
    
    // 点击下一步
    nextStep.onclick = function(){
        var phoneVal = phone.value  //手机号输入框内容
        var randomCodeVal = randomCode.innerHTML  //验证码
        var verifyCodeVal = verifyCode.value  
        var flag = false  //手机号的验证开关
        var flag01 = false  //验证码的验证开关
        // 验证手机号
        if(regPhone.test(phoneVal)){
            phone.value = ''
            flag = true
            console.log('手机号验证成功');
        }else{
            flag = false
            console.log('手机号输入错误');
        }

        // 验证码输入
        if(randomCodeVal == verifyCodeVal){
            verifyCode.value = ''
            flag01 = true
            randomCode.innerHTML = getVerificationCode(6)
            console.log('手机号验证完成0001');
        }else{
            flag01 = false
            randomCode.innerHTML = getVerificationCode(6)
            console.log('验证码输入错误');
        }

        // 两个验证都通过
        if(flag && flag01){
        // if(true){  //暂时代替
            verifyPhone.style.display = 'none'
            verifyUser.style.display = 'block'
            changeColor(onespan)
            verify01.style.color = 'rgb(51,187,68)'
            console.log('可以进行下一步');
        }else{
            alert('验证失败')
            console.log('验证不通过，不能进行下一步');
        }
    }


    // 点击立即注册
    var registerImmediately = document.querySelector('.registerImmediately') //立即注册按钮
    var username01 = document.querySelector('.username01')  //用户名
    var password01 = document.querySelector('.password01')  //密码
    var password02 = document.querySelector('.password02')  //确认密码
    
     /*  ----------------------------
        没有从下一步时就开始拉取本地数据验证
        点击立即注册后才开始验证

      --------------------------- */
    registerImmediately.onclick = function(){
        var username01val = username01.value   //用户名
        var password01val = password01.value   //密码
        var password02val = password02.value  //验证密码
        var flag03 = false  // 用户名
        var flag04 = false  // 密码
        var flag05 = false  // 验证密码
        // 验证用户名
        if(regPhone.test(username01val)){
            flag03 = true
            console.log('用户名可用');
        }else{
            flag03 = false
            console.log('用户名错误');
        }

        // 密码01验证
        if(regpass.test(password01val)){
            flag04 = true
            console.log('密码可用');
        }else{
            flag04 = false
            console.log('密码不可用');
        }

        // 再次验证密码02
        if(password01val === password02val){
            flag05 = true
            console.log('再次密码验证通过');
        }else{
            flag05 = false
            console.log('与上次密码不符');
        }

        if(flag03 && flag04 && flag05){
        // if(true){
            // 将用户名和密码存入本地存储

            // 判断本地是否有数据
            if(localStorage.getItem('user_pass')){
              var arr = JSON.parse(localStorage.getItem('user_pass'))
            }else{
                var arr = []
            }
            var hasuser = false  //判断本地是否存在当前这条数据
            // 如果本地有这个账号说明已经被注册了
            if(arr.length > 0){
                arr.forEach((item)=>{
                    if(item.username01 === username01val){
                        alert('账号已被注册')
                        registeredSuccessfully.style.display = 'none'
                        document.location.reload()
                        // location.href = './register.html'  //重新加载当前页面
                        hasuser = true
                        return
                    }
                })
            }

            if(!hasuser){
                console.log(username01val);
                console.log(password01val);
                arr.push({username01:username01val,password01:password01val,haslogin:0})
            }
            // 将用户注册的数据添加到本地
            localStorage.setItem('user_pass',JSON.stringify(arr))
            
            // 页面样式处理
            verifyUser.style.display = 'none'
            registeredSuccessfully.style.display = 'block'
            otherRegister.style.display = 'none'
            changeColor(twospan)
            changeColor(threespan)
            verify02.style.color = 'rgb(51,187,68)'


            // 最后的倒计时
            var time01 = 3
            var timer 
            var pagetime = document.querySelector('.registeredSuccessfully p:last-child b')
            timer = setInterval(() => {
                time01--
                console.log(time01);
                if(time01<=0){
                    clearInterval(timer)
                    location.href = './login.html'
                }
                pagetime.innerHTML = time01
            }, 1000);
            console.log('注册成功');

        }else{
            console.log('注册失败');
        }
    }
    
    
    
    
}

// 改变头部元素样式
function changeColor(onespan){
    onespan.style.backgroundColor = 'rgb(51,187,68)'
    onespan.style.color = 'white'
    onespan.style.borderColor = 'rgb(51,187,68)'
    onespan.nextElementSibling.style.color = 'rgb(51,187,68)'
}