"use strict";var goodArr=JSON.parse(localStorage.getItem("goods")),back=document.querySelector(".back");function fn(e){var l=document.querySelector(".list"),n=document.querySelector(".main");goodArr.forEach(function(t){e.forEach(function(e){if(t.id===e.ID-0){var n=document.createElement("li");n.index=t.id,n.innerHTML='\n            <div class="listHeader">\n                <input type="checkbox" class="listHeader_left">\n                <span>'.concat(e["店铺名称"],'</span>\n            </div>\n            <div class="listFooter">\n                <input type="checkbox" class="odd">\n                <img src="').concat(e["图片地址"],'" alt="">\n                <span>').concat(e["商品名称"],"</span>\n                <p class=\"unitPrice\"><b>￥</b><i class='price02'>").concat(e["价格"],"</i></p>\n                <div class=\"num01\"><b class='minus'> - </b><span class='num02'>").concat(t.num,"</span><i class='add'> + </i></div>\n                <p class=\"subtotal\"><b>￥</b><i class='price01'>").concat(t.num*e["价格"],'</i></p>\n                <em class="del">删除</em>\n            </div>\n            '),l.appendChild(n)}})}),n.onclick=function(e){var n=e.target,r=document.querySelector(".all"),i=document.querySelector(".list");if("add"===n.className){var t=n.parentElement.previousElementSibling.lastElementChild.innerHTML-0,l=n.previousElementSibling.innerHTML-0,a=n.parentElement.nextElementSibling.lastElementChild.innerHTML-0,c=n.parentElement.parentElement.parentElement,o=JSON.parse(localStorage.getItem("goods"));10<++l&&(l=10,alert("超出购买上限")),o.forEach(function(e){e.id===c.index&&(e.num=l)}),a=l*t,n.previousElementSibling.innerHTML=l,n.parentElement.nextElementSibling.lastElementChild.innerHTML=a,localStorage.setItem("goods",JSON.stringify(o)),u()}if("minus"===n.className){t=n.parentElement.previousElementSibling.lastElementChild.innerHTML-0,l=n.nextElementSibling.innerHTML-0,a=n.parentElement.nextElementSibling.lastElementChild.innerHTML-0;var s=n.parentElement.parentElement.parentElement,m=JSON.parse(localStorage.getItem("goods"));--l<1&&(l=1,alert("已经减到最少")),m.forEach(function(e){e.id===s.index&&(e.num=l)}),a=l*t,n.nextElementSibling.innerHTML=l,n.parentElement.nextElementSibling.lastElementChild.innerHTML=a,localStorage.setItem("goods",JSON.stringify(m)),u()}if("odd"===n.className){for(var d=document.querySelectorAll(".odd"),E=[],p=0;p<d.length;p++)d[p].checked?(E.push("a"),d[p].parentElement.previousElementSibling.firstElementChild.checked=!0):(E.push("b"),d[p].parentElement.previousElementSibling.firstElementChild.checked=!1);!function(e,n){for(var t=0;t<e.length;t++)if(e[t]===n)return!0;return!1}(E,"b")?r.checked=!0:r.checked=!1,u()}if("all"===n.className){for(var d=document.querySelectorAll(".odd"),p=0;p<d.length;p++)r.checked?(d[p].checked=!0,d[p].parentElement.previousElementSibling.firstElementChild.checked=!0):(d[p].checked=!1,d[p].parentElement.previousElementSibling.firstElementChild.checked=!1);u()}function u(){for(var e=document.querySelectorAll(".odd"),n=0,t=0,l=0;l<e.length;l++)if(e[l].checked){var i=e[l].parentElement.lastElementChild.previousElementSibling.previousElementSibling.nextElementSibling.previousElementSibling.firstElementChild.nextElementSibling.innerHTML-0;n+=e[l].parentElement.lastElementChild.previousElementSibling.lastElementChild.innerHTML-0,t+=i}r.parentElement.parentElement.lastElementChild.lastElementChild.previousElementSibling.innerHTML=n,r.parentElement.parentElement.lastElementChild.firstElementChild.firstElementChild.innerHTML=t}if("del"===n.className){var g=JSON.parse(localStorage.getItem("goods")),h=n.parentElement.parentElement;g.forEach(function(e,n){e.id===h.index&&g.splice(n,1)}),localStorage.setItem("goods",JSON.stringify(g)),i.removeChild(n.parentElement.parentElement),u()}"dels"===n.className&&function(){d=document.querySelectorAll(".odd");var l=JSON.parse(localStorage.getItem("goods")),e=function(){var t=d[p].parentElement.parentElement;d[p].checked&&(i.removeChild(d[p].parentElement.parentElement),l.forEach(function(e,n){e.id===t.index&&l.splice(n,1)}),localStorage.setItem("goods",JSON.stringify(l)))};for(p=0;p<d.length;p++)e();l&&(r.checked=!1),u()}();if("listHeader_left"===n.className){d=document.querySelectorAll(".odd");var f=document.querySelectorAll(".listHeader_left"),S=n.parentElement.nextElementSibling.firstElementChild;console.log(S),S.checked=n.checked;var v=[];Array.from(f).forEach(function(e){v.push(e.checked)}),r.checked=v.every(function(e){return e})}}}back.onclick=function(){location.href="./goodslist.html"},ajax({url:"../data/goodslist.json",type:"get",dataType:"json",data:"",success:function(e){fn(e)}});