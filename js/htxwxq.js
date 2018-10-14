
"use strict";

$(function () {
    var li = $(".ull li a");
    var url = window.location.href;
    var result = url.substring(url.lastIndexOf("=") + 1);
    // //lastIndexOf方法返回一个数字，即从开始到所截取部分的长度，不包括要截取的字符
    var result1 = url.substring(url.lastIndexOf("\/") + 1, url.length);
    console.log(result1);
    function delColor() {
        li.css({ color: "#000", borderLeft: "2px solid #eee" });
    }
    if (result1.indexOf("xinwenxiangqing2") >= 0) {
        delColor();
        li.eq(1).css({ color: "#0f88eb", borderLeft: "2px solid #0f88eb" });
    } else if (result1.indexOf("xinwenxiangqing3") >= 0) {
        delColor();
        li.eq(2).css({ color: "#0f88eb", borderLeft: "2px solid #0f88eb" });
    } else {
        delColor();
        li.eq(0).css({ color: "#0f88eb", borderLeft: "2px solid #0f88eb" });
    }
    jQuery.support.cors = true;
    $.ajax({
        url: "http://193.112.0.25/getNewsById/" + result,
        type: "get",
        success: function success(data) {
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
    for (var i = 0; i < li.length; i++) {
        li[i].onclick = function () {
            var id = $(this).attr("id");
            var span = $(this).children("span").html();
            remove();
            delColor();
            I.eq(1).html(span);
            $(this).css({ color: "#0f88eb", borderLeft: "2px solid #0f88eb" });
        };
    }
    li.eq(0).click(function () {
        jQuery.support.cors = true;
        $.ajax({
            url: "http://193.112.0.25/getAllNewsByType/" + 6,
            type: "get",
            success: function success(data) {
                var nums = 6; //每页出现的数量
                var pages = Math.ceil(data.length / nums); //得到总页数
                var thisDate = function thisDate(curr) {
                    var str = '',
                        last = curr * nums - 1;
                    last = last >= data.length ? data.length - 1 : last;
                    for (var i = curr * nums - nums; i <= last; i++) {
                        str += "<li><a href=\"xinwenxiangqing.html?id=" + data[i].id + "\"><div class=\"imgs\"><img src=\"images/" + data[i].image + "\" alt=\"\"  width=\"252px\" height=\"152px\"></div><div class=\"content\"><h6>" + data[i].title + "</h6><span>\u53D1\u5E03\u65F6\u95F4\uFF1A" + data[i].date + "</span><p>" + data[i].content + "</p></div></a></li>";
                        var ul = $(".neiye_list ul");
                        ul.append(str);
                    }return str;
                };

                //调用分页
                laypage({
                    cont: 'biuuu_city',
                    pages: pages,
                    jump: function jump(obj) {
                        document.getElementById('biuuu_city_list').innerHTML = thisDate(obj.curr);
                    } });
            }
        });
    });
    li.eq(1).click(function () {
        jQuery.support.cors = true;
        $.ajax({
            url: "http://193.112.0.25/getAllNewsByType/" + 7,
            type: "get",
            success: function success(data) {
                var nums = 6; //每页出现的数量
                var pages = Math.ceil(data.length / nums); //得到总页数
                var thisDate = function thisDate(curr) {
                    var str = '',
                        last = curr * nums - 1;
                    last = last >= data.length ? data.length - 1 : last;
                    for (var i = curr * nums - nums; i <= last; i++) {
                        str += "<li><a href=\"xinwenxiangqing2.html?id=" + data[i].id + "\"><div class=\"imgs\"><img src=\"images/" + data[i].image + "\" alt=\"\" width=\"252px\" height=\"152px\"></div><div class=\"content\"><h6>" + data[i].title + "</h6><span>\u53D1\u5E03\u65F6\u95F4\uFF1A" + data[i].date + "</span><p>" + data[i].content + "</p></div></a></li>";
                        var ul = $(".neiye_list ul");
                        ul.append(str);
                    }return str;
                };

                //调用分页
                laypage({
                    cont: 'biuuu_city',
                    pages: pages,
                    jump: function jump(obj) {
                        document.getElementById('biuuu_city_list').innerHTML = thisDate(obj.curr);
                    } });
            }
        });
    });
    li.eq(2).click(function () {
        jQuery.support.cors = true;
        $.ajax({
            url: "http://193.112.0.25/getAllNewsByType/8",
            type: "get",
            success: function success(data) {
                var nums = 6; //每页出现的数量
                var pages = Math.ceil(data.length / nums); //得到总页数
                var thisDate = function thisDate(curr) {
                    var str = '',
                        last = curr * nums - 1;
                    last = last >= data.length ? data.length - 1 : last;
                    for (var i = curr * nums - nums; i <= last; i++) {
                        str += "<li><a href=\"xinwenxiangqing3.html?id=" + data[i].id + "\"><div class=\"imgs\"><img src=\"images/" + data[i].image + "\" alt=\"\" width=\"252px\" height=\"152px\"></div><div class=\"content\"><h6>" + data[i].title + "</h6><span>\u53D1\u5E03\u65F6\u95F4\uFF1A" + data[i].date + "</span><p>" + data[i].content + "</p></div></a></li>";
                        var ul = $(".neiye_list ul");
                        ul.append(str);
                    }return str;
                };

                //调用分页
                laypage({
                    cont: 'biuuu_city',
                    pages: pages,
                    jump: function jump(obj) {
                        document.getElementById('biuuu_city_list').innerHTML = thisDate(obj.curr);
                    } });
            }
        });
    });
    function remove() {
        $(".con").remove();
    }
    function delColor() {
        li.css({ color: "#000", borderLeft: "2px solid #eee" });
    }
});