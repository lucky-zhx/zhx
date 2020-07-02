
// window.onload = function(){
//     var oSmall = document.getElementById("box");
//     var oBig = document.getElementById("bigBox");
//     var oMark = document.getElementById("mark");
//     var oBigImg = oBig.getElementsByTagName("img")[0];


//     oSmall.onmouseover = function(){
//         oMark.style.display = 'block';
//         oBig.style.display = 'block';
//     }
//     oSmall.onmouseout = function(){
//         oMark.style.display = 'none';
//         oBig.style.display = 'none';
//     }

//     //添加鼠标移动事件
//     oSmall.onmousemove = function(ev){
//         var e = ev || window.event;
//         var l = e.clientX - oSmall.offsetLeft - 100;
//         var t = e.clientY - oSmall.offsetTop - 100;
//         //限制遮罩层出界
//         if(l <= 0){
//             l = 0;
//         }
//         if(l >= 122){
//             l = 122;
//         }
//         if(t <= 0){
//             t = 0;
//         }
//         if(t >= 280){
//             t = 280;
//         }

//         oMark.style.left = l + 'px';
//         oMark.style.top = t + 'px';

//         //大图片方向移动对应放大倍数的坐标
//         oBigImg.style.left = -2 * l + 'px';
//         oBigImg.style.top = -2 * t + 'px';
//     }
// }


// var imglist=['../imgs/kw2.jpg','../imgs/kw1.jpg','../imgs/kw3.jpg','../imgs/kw4.jpg'];
// var box = document.querySelector('.left');
// var a = imglist[0];
// fdj(imglist,box,a)