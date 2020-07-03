<?php
    // 1、接收前端传来的数
    $name = $_POST['username'];
    $pass = $_POST['userpass'];
    // 2、连接数据库
    $conn = mysqli_connect("localhost","root","123456","test");
    // 3、执行sql语句
    $result = mysqli_query($conn,"select * from user where username='{$name}' and userpass='{$pass}'");

    // 4、关闭数据库
    mysqli_close($conn);
    // 3、响应结果 mysqli_fetch_all把结果进行转换
    $arr = mysqli_fetch_all($result, MYSQLI_ASSOC);

    if(count($arr)==1){
        echo "1";
    }else{
        echo "0";
    }
?>