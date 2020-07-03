"use strict";

$("#btnLogin")[0].onclick = function () {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "login.php", true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var result = xhr.responseText;

      if (result == "1") {
        alert("登录成功，即将跳转到首页！");
        window.location.href = "../html/index.html";
      } else if (result == "0") {
        alert("账号或密码错误，请重新登录！");
      } else {
        alert("服务器错误，请联系管理员！");
      }
    }
  }; // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");


  var sendStr = "username=".concat($("#username").val(), "&userpass=").concat($("#userpass").val());
  xhr.send(sendStr);
};