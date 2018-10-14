
"use strict";

$(function () {
    jQuery.support.cors = true;
    $.ajax({
        url: "http://193.112.0.25/getAllSolution",
        type: "get",
        success: function success(data) {
            for (let i = 0; i < data.length; i++) {
                var arr = [];
                if (data[i].type == "不动产") {
                    arr.push(data[i]);
                    console.log(data[i].image)
                    for (let j = 0; j < arr.length; j++) {
                        // var BDC = "<li><a href=\"jiejuexiangqing.html?id=" + data[i].id + "\"><div class=\"top\"><div class=\"imgs\"><img src=\"images/" + data[i].image + "\" alt=\"\"></div></div><div class=\"middle\">" + data[i].title + "</div><div class=\"bottom\">" + data[i].subtitle + "</div></a></li>";
                        // var u1 = $("#u1");
                        // u1.append(BDC);
                        var BDC=$("#u1>li>a").eq(i-1);
                        BDC.attr({href:"jiejuexiangqing.html?id="+ data[i].id }).html("<div class=\"top\"></div><div class=\"middle\">" + data[i].title + "</div><div class=\"bottom\">" + data[i].subtitle + "</div>");
                    }
                } else if (data[i].type == "税务") {
                    arr.push(data[i]);
                    console.log(data[i])
                    for (var _j = 0; _j < arr.length; _j++) {
                        // var SW = "<li><a href=\"jiejuexiangqing.html?id=" + data[i].id + "\"><div class=\"top\"><div class=\"imgs\"><img src=\"images/" + data[i].image + "\" alt=\"\"></div></div><div class=\"middle\">" + data[i].title + "</div><div class=\"bottom\">" + data[i].subtitle + "</div></a></li>";
                        // var u2 = $("#u2");
                        // u2.append(SW);
                        var SW=$("#u2>li>a").eq(i);
                        SW.attr({href:"jiejuexiangqing.html?id="+ data[i].id }).html("<div class=\"top\"><div class=\"imgs\"><img src=\"images/" + data[i].image + "\" alt=\"\"  width=\"175px\" height=\"120px\"></div></div><div class=\"middle\">" + data[i].title + "</div><div class=\"bottom\">" + data[i].subtitle + "</div>");
                    }
                } else if (data[i].type == "住建") {
                    arr.push(data[i]);
                    for (var _j2 = 0; _j2 < arr.length; _j2++) {
                        // var ZJ = "<li><a href=\"jiejuexiangqing.html?id=" + data[i].id + "\"><div class=\"top\"><div class=\"imgs\"><img src=\"images/" + data[i].image + "\" alt=\"\"></div></div><div class=\"middle\">" + data[i].title + "</div><div class=\"bottom\">" + data[i].subtitle + "</div></a></li>";
                        // var u5 = $("#u5");
                        // u5.append(ZJ);
                        var ZJ=$("#u5>li>a").eq(i-1);
                        ZJ.attr({href:"jiejuexiangqing.html?id="+ data[i].id }).html("<div class=\"top\"><div class=\"imgs\"><img src=\"images/" + data[i].image + "\" alt=\"\"  width=\"175px\" height=\"120px\"></div></div><div class=\"middle\">" + data[i].title + "</div><div class=\"bottom\">" + data[i].subtitle + "</div>");

                    }
                } else if (data[i].type == "人社") {
                    arr.push(data[i]);
                    for (var _j3 = 0; _j3 < arr.length; _j3++) {
                        // var RS = "<li><a href=\"jiejuexiangqing.html?id=" + data[i].id + "\"><div class=\"top\"><div class=\"imgs\"><img src=\"images/" + data[i].image + "\" alt=\"\"></div></div><div class=\"middle\">" + data[i].title + "</div><div class=\"bottom\">" + data[i].subtitle + "</div></a></li>";
                        // var u3 = $("#u3");
                        // u3.append(RS);
                        var RS=$("#u3>li>a").eq(i-1);
                        RS.attr({href:"jiejuexiangqing.html?id="+ data[i].id }).html("<div class=\"top\"><div class=\"imgs\"><img src=\"images/" + data[i].image + "\" alt=\"\"  width=\"175px\" height=\"120px\"></div></div><div class=\"middle\">" + data[i].title + "</div><div class=\"bottom\">" + data[i].subtitle + "</div>");

                    }
                } else if (data[i].type == "其他") {
                    arr.push(data[i]);
                    for (var _j4 = 0; _j4 < arr.length; _j4++) {
                        // var QT = "<li><a href=\"jiejuexiangqing.html?id=" + data[i].id + "\"><div class=\"top\"><div class=\"imgs\"><img src=\"images/" + data[i].image + "\" alt=\"\"></div></div><div class=\"middle\">" + data[i].title + "</div><div class=\"bottom\">" + data[i].subtitle + "</div></a></li>";
                        // var u4 = $("#u4");
                        // u4.append(QT);
                        var QT=$("#u4>li>a").eq(i-1);
                        QT.attr({href:"jiejuexiangqing.html?id="+ data[i].id }).html("<div class=\"top\"><div class=\"imgs\"><img src=\"images/" + data[i].image + "\" alt=\"\"  width=\"175px\" height=\"120px\"></div></div><div class=\"middle\">" + data[i].title + "</div><div class=\"bottom\">" + data[i].subtitle + "</div>");
                    }
                }
            }
        }
    });
});