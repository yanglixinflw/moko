
"use strict";

$(function () {
    $.ajax({
        url: "http://193.112.0.25/getAllNewsByType/8",
        type: "get",
        success: function success(data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                var str = "<div class=\"item\"><a href=\"xinwenxiangqing3.html?id=" + data[i].id + "\"><img src=\"images/" + data[i].image + "\" alt=\"\" width=\"252\" height=\"250\"></a></div>";
                $(".owl-carousel").append(str);
            }
        }
    });
});
