"use strict";

$(function () {
    var li = $(".left .bottom ul li a");
    var url = window.location.href;
    var result = url.substring(url.lastIndexOf("=") + 1);
    // //lastIndexOf方法返回一个数字，即从开始到所截取部分的长度，不包括要截取的字符
    var result1 = url.substring(url.lastIndexOf("\/") + 1, url.length);
    console.log(result1);
    function delColor() {
        li.css({ color: "#000", borderLeft: "2px solid #eee" });
    }
    if (result1.indexOf("anlixiangqing2") >= 0) {
        delColor();
        li.eq(1).css({ color: "#0f88eb", borderLeft: "2px solid #0f88eb" });
    } else if (result1.indexOf("anlixiangqing3") >= 0) {
        delColor();
        li.eq(2).css({ color: "#0f88eb", borderLeft: "2px solid #0f88eb" });
    } else if (result1.indexOf("anlixiangqing4") >= 0) {
        delColor();
        li.eq(3).css({ color: "#0f88eb", borderLeft: "2px solid #0f88eb" });
    } else if (result1.indexOf("anlixiangqing5") >= 0) {
        delColor();
        li.eq(4).css({ color: "#0f88eb", borderLeft: "2px solid #0f88eb" });
    } else {
        delColor();
        li.eq(0).css({ color: "#0f88eb", borderLeft: "2px solid #0f88eb" });
    }
    jQuery.support.cors = true;
    $.ajax({
        url: "http://193.112.0.25/getSuccessById/" + result,
        type: "get",
        success: function success(data) {
            console.log(data);
            $(".top h1").html(data.title);
            $(".top span").html("\u53D1\u5E03\u65F6\u95F4:" + data.date);
            $("<p><img src=\"images/" + data.image + "\" style=\"display: block; margin: 0 auto\" width=\"100%\"></p>").appendTo("#bottom");
            $("<p class='p'></p>").html(data.body).appendTo("#bottom");
            $(".p").css({ textAlign: "left", textIndent: "2em" });
        }
    });
});
$(function () {
    var li = $(".left .bottom ul li a");
    var I = $(".neiye_biaoti .biaoti_con p i");
    for (let i = 0; i < li.length; i++) {
        li.eq(i).click(function () {
            var id = $(this).attr("id");
            var span = $(this).children("span").html();
            remove();
            delColor();
            I.eq(1).html(span);
            $(this).css({ color: "#0f88eb", borderLeft: "2px solid #0f88eb" });
            jQuery.support.cors = true;
            $.ajax({
                url: "http://193.112.0.25/getAllSuccessByType/"+id,
                type: "get",
                data: {},
                beforeSend:function(){
                    var X;
                    X="<div class='jz' style='width:100%;height: 200px;'><div id=\"shclKeyframes\" style='width:50px;height: 50px; margin:100px auto;'></div></div>";
                    $("#biuuu_city_list li").css("display","none");
                    $("#biuuu_city_list").append(X);
                    $('#shclKeyframes').shCircleLoader({keyframes:"0%{background:black}40%{background:transparent}60%{background:transparent}100%{background:black}"});
                },
                success: function success(data) {
                    var nums = 6; //每页出现的数量
                    var pages = Math.ceil(data.length / nums); //得到总页数
                    var thisDate = function thisDate(curr) {
                        var str = '',
                            last = curr * nums - 1;
                        last = last >= data.length ? data.length - 1 : last;
                        for (var i = curr * nums - nums; i <= last; i++) {
                            str += "<li><a href=\"anlixiangqing.html?id=" + data[i].id + "\"><div class=\"imgs\"><img src=\"images/" + data[i].image + "\" alt=\"\" width=\"252px\" height=\"152px\"></div><div class=\"content\"><h6>" + data[i].title + "</h6><span>\u53D1\u5E03\u65F6\u95F4\uFF1A" + data[i].date + "</span><p>" + data[i].content + "</p></div></a></li>";
                            var ul = $(".neiye_list ul");
                            ul.append(str);
                        }
                        return str;
                    };
                    //调用分页
                    laypage({
                        cont: 'biuuu_city',
                        pages: pages,
                        jump: function jump(obj) {
                            document.getElementById('biuuu_city_list').innerHTML = thisDate(obj.curr);
                        }
                    });
                }
            });
        });
    }
    function remove() {
        $(".con").remove();
    }
    function delColor() {
        li.css({ color: "#000", borderLeft: "2px solid #eee" });
    }
});

$(function () {
    $(".neiye_list .neiye_biaoti .biaoti_con p span").css("cursor","pointer").click(function () {
        location.href="anli.html"
    })
})