$(function(){
    var url = window.location.href;
    var result = url.substring(url.lastIndexOf("=")+1);
    jQuery.support.cors = true;
    $.ajax({
        url:"http://193.112.0.25/getSolutionById/"+result,
        type:"get",
        success:function(data){
            console.log(data)
            $(".top h1").html(data.title);
            $(".top span").html("\u53D1\u5E03\u65F6\u95F4:" + data.date);
            $("<p class='p'></p>").html(data.body).appendTo("#content");
        }
    })
})

    $(function () {
        $(".neiye_biaoti .biaoti_con p span").css("cursor","pointer").click(function () {
            location.href="jiejue.html"
        })
    })
