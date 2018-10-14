"use strict";
$(function () {
    jQuery.support.cors = true;
    $.ajax({
        url: "http://193.112.0.25/getSixNews",
        type: "get",
        success: function success(data) {
            console.log(data);
            var a = "<div class=\"left_con left1\" style=\"background:url(images/" + data[0].image + ") no-repeat center center;background-size:cover;opacity: 1\"><a href=\"xinwenxiangqing.html?id=" + data[0].id + "\">" + data[0].title + "</a></div>";
            var ul = $(".left ul");
            ul.after(a);
            for (var i = data.length - 1; i > 0; i--) {
                var b = "<div class=\"left_con\" style=\"background:url(images/" + data[i].image + ") no-repeat center center;background-size:cover;opacity: 0\"><a href=\"xinwenxiangqing.html?id=" + data[i].id + "\">" + data[i].title + "</a></div>";
                var left = $(".left1");
                left.after(b);
            }
            for (var _i = 0; _i < data.length; _i++) {
                var c = "<li><a href=\"xinwenxiangqing.html?id=" + data[_i].id + "\">" + data[_i].title + "</a><span>" + data[_i].date + "</span></li>";
                var right = $(".right_bottom ul");
                right.append(c);
            }
        }
    });
});