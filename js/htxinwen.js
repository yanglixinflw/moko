"use strict";
$(function () {
    var li = $(".left .bottom ul li a");
    var I = $(".neiye_biaoti .biaoti_con p i");
    for (var i = 0; i < li.length; i++) {
        li[i].onclick = function () {
            var span = $(this).children("span").html();
            delColor();
            I.eq(1).html(span);
            $(this).css({ color: "#0f88eb", borderLeft: "2px solid #0f88eb" });
        };
    }
    function delColor() {
        li.css({ color: "#000", borderLeft: "2px solid #eee" });
    }
    li.eq(0).click(function () {
        jQuery.support.cors = true;
        $.ajax({
            url: "http://193.112.0.25/getAllNewsByType/6",
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
            url: "http://193.112.0.25/getAllNewsByType/7",
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
                console.log(data)
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
});

$(function () {
    jQuery.support.cors = true;
    $.ajax({
        url: "http://193.112.0.25/getAllNewsByType/6",
        type: "get",
        data: {},
        success: function success(data) {
            var nums = 6; //每页出现的数量
            var pages = Math.ceil(data.length / nums); //得到总页数
            var thisDate = function thisDate(curr) {
                var str = '',
                    last = curr * nums - 1;
                last = last >= data.length ? data.length - 1 : last;
                for (var i = curr * nums - nums; i <= last; i++) {
                    str += "<li><a href=\"xinwenxiangqing.html?id=" + data[i].id + "\"><div class=\"imgs\"><img src=\"images/" + data[i].image + "\" alt=\"\" width=\"252px\" height=\"152px\"></div><div class=\"content\"><h6>" + data[i].title + "</h6><span>\u53D1\u5E03\u65F6\u95F4\uFF1A" + data[i].date + "</span><p>" + data[i].content + "</p></div></a></li>";
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