
"use strict";

$(function () {
    $.ajax({
        url: "http://193.112.0.25/getAllNewsByType/8",
        type: "get",
        success: function success(data) {
            for (var i = 0; i < data.length; i++) {
                var str = "<div class=\"owl-item\" style='width: 308px'><a href=\"xinwenxiangqing3.html?id=" + data[i].id + "\" style='width: 100%;height: 100%;margin-left: 20px'><img src=\"images/" + data[i].image + "\" alt=\"\" width=\"252\" height=\"250\" style='margin: auto'></a></div>";
                $(".owl-wrapper").append(str);
            }
        }
    });
});
