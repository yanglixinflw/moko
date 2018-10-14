var winHeight;

function setHeight() {
    if (window.innerHeight) {
        winHeight = window.innerHeight;
    } else if ((document.body) && (document.body.clientHeight)){
        winHeight = document.body.clientHeight;
    }
    if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
        winHeight=document.documentElement.clientHeight;
    }

    if (document.getElementsByClassName("bo_content").length > 0) {
        document.getElementsByClassName("bo_content")[0].style.height = (winHeight - 100) + "px";
    }

    if (document.getElementsByClassName("bo_content_no_second").length > 0) {
        document.getElementsByClassName("bo_content_no_second")[0].style.height = (winHeight - 100) + "px";
    }
}

window.onload = function(){
    setHeight();
};

window.onresize = function(){
    setHeight();
};