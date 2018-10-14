function login() {
    var username = $("#username").val();
    var password = $("#password").val();
    var checknumber = $("#checknumber").val();
    $.ajax({
        // 这里替换登录的提交地址
        url:"YOUR_URL",
        type:"post",
        data:{username:username,
            password:password,
            checknumber:checknumber},
        success:function(data){
            // 成功的处理
            window.location.href='./solution/budonglist.html';
        },
        error:function(e){
            // 错误的处理
            alert("用户名密码错误！");
        }
    });
}

function changeCheckNum() {
    $.ajax({
        // 这里替换验证码的获取地址
        url:"YOUR_URL",
        type:"post",
        success:function(data){
            // 成功后将内容替换
            $('#checknumber_img').src = 'https://www.baidu.com/img/bd_logo1.png';
        },
        error:function(e){
            // 错误的处理
            alert("出现错误，再试一次！");
        }
    });
}