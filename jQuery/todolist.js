$(function() {
    loaded();
    $("#goal").on("keydown", function(e) {
        if (e.keyCode === 13) {
            if ($(this).val() === "") {
                alert("请输入内容");
            } else {
                var local = getDate();
                local.push({
                    title: $(this).val(),
                    done: false
                });
                saveDate(local);
                loaded();
                $(this).val("");
            }

        }
    });
    // 删除再渲染
    $("ol, ul").on("click", "a", function() {
        var data = getDate();
        data.splice($(this).attr("id"), 1);
        saveDate(data);
        loaded();
    });
    $("ol, ul").on("click", "input", function() {
        // 获取本地数据
        var data = getDate();
        // 修改本地数据
        var index = $(this).siblings("a").attr("id");
        data[index].done = $(this).prop("checked");
        // 更新本地存储
        saveDate(data);
        // 重新渲染
        loaded();
    });
    // 读取本地存储
    function getDate() {
        var data = localStorage.getItem("todolist");
        if (data !== null) {
            return JSON.parse(data);
        } else {
            return [];
        }
    }
    // 更新本地存储
    function saveDate(d) {
        localStorage.setItem("todolist", JSON.stringify(d));
    }

    // 渲染页面
    function loaded() {
        var newdate = getDate();
        $("ol").html("");
        $("ul").empty();
        var todocount = 0;
        var donecount = 0;
        $.each(newdate, function(i, ele) {
            if (ele.done == false) {
                $("ol").prepend("<li><input type='checkbox'> <p>" + ele.title + "</p> <a href = javascript:;' id = " + i + ">-</a></li>");
                todocount++;
            } else {
                $("ul").prepend("<li><input type='checkbox' checked='chedced'> <p>" + ele.title + "</p> <a href = javascript:;' id = " + i + ">-</a></li>");
                donecount++;
            }
        });
        $(".todoCount").text(todocount);
        $(".doneCount").text(donecount);
    }

});