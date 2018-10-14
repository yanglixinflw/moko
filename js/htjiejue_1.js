
"use strict";

$(function () {
    jQuery.support.cors = true;
    $.ajax({
        url: "http://193.112.0.25/getAllSolution",
        type: "get",
        data: {},
        beforeSend:function(){
            $(".loader").show();
        },
        success: function success(data) {
            for (var i = 0; i < data.length; i++) {
                var arr = [];
                if (data[i].type == "不动产") {
                    arr.push(data[i]);
                    for (let j = 0; j < arr.length; j++) {
                        var BDC = "<li><a href=\"jiejuexiangqing.html?id=" + data[i].id + "\"><div class=\"top\"><div class=\"imgs\"><img src=\"images/" + data[i].image + "\" alt=\"\" width='176px' height='110px'></div></div><div class=\"middle\">" + data[i].title + "</div><div class=\"bottom\">" + data[i].subtitle + "</div></a></li>";
                        var u1 = $("#u1");
                        u1.append(BDC);
                    }
                } else if (data[i].type == "税务") {
                    arr.push(data[i]);
                    for (let _j = 0; _j < arr.length; _j++) {
                        var SW = "<li><a href=\"jiejuexiangqing.html?id=" + data[i].id + "\"><div class=\"top\"><div class=\"imgs\"><img src=\"images/" + data[i].image + "\" alt=\"\"  width='176px' height='110px'></div></div><div class=\"middle\">" + data[i].title + "</div><div class=\"bottom\">" + data[i].subtitle + "</div></a></li>";
                        var u2 = $("#u2");
                        u2.append(SW);
                        }
                } else if (data[i].type == "住建") {
                    arr.push(data[i]);
                    for (var _j2 = 0; _j2 < arr.length; _j2++) {
                        var ZJ = "<li><a href=\"jiejuexiangqing.html?id=" + data[i].id + "\"><div class=\"top\"><div class=\"imgs\"><img src=\"images/" + data[i].image + "\" alt=\"\"  width='176px' height='110px'></div></div><div class=\"middle\">" + data[i].title + "</div><div class=\"bottom\">" + data[i].subtitle + "</div></a></li>";
                        var u5 = $("#u5");
                        u5.append(ZJ);
                    }
                } else if (data[i].type == "人社") {
                    arr.push(data[i]);
                    for (var _j3 = 0; _j3 < arr.length; _j3++) {
                        var RS = "<li><a href=\"jiejuexiangqing.html?id=" + data[i].id + "\"><div class=\"top\"><div class=\"imgs\"><img src=\"images/" + data[i].image + "\" alt=\"\"  width='176px' height='110px'></div></div><div class=\"middle\">" + data[i].title + "</div><div class=\"bottom\">" + data[i].subtitle + "</div></a></li>";
                        var u3 = $("#u3");
                        u3.append(RS);
                    }
                } else if (data[i].type == "其他") {
                    arr.push(data[i]);
                    for (var _j4 = 0; _j4 < arr.length; _j4++) {
                        var QT = "<li><a href=\"jiejuexiangqing.html?id=" + data[i].id + "\"><div class=\"top\"><div class=\"imgs\"><img src=\"images/" + data[i].image + "\" alt=\"\"  width='176px' height='110px'></div></div><div class=\"middle\">" + data[i].title + "</div><div class=\"bottom\">" + data[i].subtitle + "</div></a></li>";
                        var u4 = $("#u4");
                        u4.append(QT);
                    }
                }
            }
        },
        complete: function () {
            $(".loader").hide();
        }
    });
});
$(function () {
    $(".neiye_biaoti .biaoti_con p span").css("cursor","pointer").click(function () {
        location.href="index.html"
    })
})