function selectedAll() {
    var checkboxes = $('input[type=checkbox]');
    var selectedAll = true;
    for(var i=0;i<checkboxes.length;i++){
        if (!checkboxes[i].checked) {
            selectedAll = false;
            break;
        }
    }
    if (selectedAll) {
        for(var i=0;i<checkboxes.length;i++){
            checkboxes[i].checked= false;
        }
    } else {
        for(var i=0;i<checkboxes.length;i++){
            checkboxes[i].checked= true;
        }
    }

}

function deleteSelected() {
    var checkboxes = $('input[type=checkbox]');
    for(var i=0;i<checkboxes.length;i++){
        if (checkboxes[i].checked) {
            // 点击删除事件会在这里触发
            alert("模拟删除第" + (i+1) + "条。");
        }
    }
}