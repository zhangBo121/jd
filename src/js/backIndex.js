

var timer
var num = 3
var pageNum = document.querySelector('.pageNum')
timer = setInterval(()=>{
    num--
    if(num<=0){
        location.href = './index.html'
        clearInterval(timer)
    }
    pageNum.innerHTML = num
},1000)