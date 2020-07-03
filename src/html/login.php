<?php
    $name = $_POST['username'];
    $pass = $_POST['userpass'];

    $conn = mysqli_connect("localhost","root","1234567","test");

    $result = mysqli_query($conn,"select * from user where username='{$name}' and password='{$pass}'");
   
    mysqli_close($conn);

    $arr = mysqli_fetch_all($result, MYSQLI_ASSOC);

    if(count($arr)==1){
        echo "1";
    }else{
        echo "0";
    }
?>