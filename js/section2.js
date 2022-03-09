$(function () {
    window.bgOption = localStorage.getItem("bgOption")
    function run(QuickLinkCount) {
        var arr = [34, 41, 42, 49, 57, 58, 59];
        var ChildContent = $(this.$("#main #content").children("#ChildContent[value=" + QuickLinkCount + "]"))
        var mainSimple = $(this.$("#main #main-simple[value=" + QuickLinkCount + "]"))
        if (arr.indexOf(QuickLinkCount) != -1) {
            mainSimple.prevAll().css("background", window.bgOption).nextAll().css("background", window.bgOption).css("boxShadow", "");
            mainSimple.css("background", "rgba(238,255,0,0.6").css("boxShadow", "0 0 8px black");
            $("#main #content #ChildContent").slideUp("500").css("background", window.bgOption).css("boxShadow", "");
        }
        else {
            $("#main #main-simple").css("background", window.bgOption).css("boxShadow", "");
            $(this.$("#content #ChildContent")).css("background", window.bgOption).css("boxShadow", "").children("a").css("background", "");
            ChildContent.css("background", "rgba(238,255,0,0.6)").css("boxShadow", "0 0 8px black").parent().children("#ChildContent").slideDown("500").prevAll("#content").slideUp("500").nextAll("#content").slideUp(500);
            ChildContent.children("a").css("background", "rgba(238,255,0,0.6)");
        }
        if (QuickLinkCount == 15 ||
            QuickLinkCount == 17 ||
            QuickLinkCount == 36 ||
            QuickLinkCount == 44 ||
            QuickLinkCount == 51 ||
            QuickLinkCount == 56) {
            ChildContent.parent().prevAll().children("#ChildContent").slideUp(300);
        }
        if (QuickLinkCount >= 59) {
            $(this.$("#main #main-simple[value=59]")).css("background", "rgba(238,255,0,0.6").css("boxShadow", "0 0 8px black");
        }
        if (QuickLinkCount == 0) {
            $(this.$("#main #main-simple[value=1]")).css("background", "rgba(238,255,0,0.6").css("boxShadow", "0 0 8px black");
        }
    };


    // ************************************************************************************************
    $("#last-page,#next-page").hide();
    window.QuickLinkCount1 = 0;
    $("#last-page").on("click", function () {
        var QuickLinkCount = window.QuickLinkCount1;
        run(QuickLinkCount - 1);
        if (window.QuickLinkCount1 <= 1) {
            $("#add").children("#iframe").remove();
            $("#mission-title").val("4.1.1：JavaScript的诞生")
            $("#add").append("<iframe frameborder='0' id='iframe' src='./section/section22/1.html' ></iframe>");
            window.QuickLinkCount1 = 1
        }
        else {
            window.QuickLinkCount1--;
            $("#add").children("#iframe").remove();
            $("#add").append("<iframe frameborder='0' id='iframe' src='./section/section22/" + window.QuickLinkCount1 + ".html' ></iframe>");
            console.log(window.QuickLinkCount1);
            let titleContent = $("#mission-title");
            switch (window.QuickLinkCount1) {
                case 1: titleContent.val("4.1.1：JavaScript的诞生"); break;
                case 2: titleContent.val("4.1.2：ECMAScript的版本"); break;
                case 3: titleContent.val("4.2.1：JavaScript的特点"); break;
                case 4: titleContent.val("4.2.2：JavaScript的语法"); break;
                case 5: titleContent.val("4.2.3：JavaScript的关键字"); break;
                case 6: titleContent.val("4.2.4：JavaScript的变量"); break;
                case 7: titleContent.val("4.2.5：数据类型"); break;
                case 8: titleContent.val("4.2.6：运算符"); break;
                case 9: titleContent.val("4.3.1：if条件语句"); break;
                case 10: titleContent.val("4.3.2：switch分支语"); break;
                case 11: titleContent.val("4.3.3：for循环"); break;
                case 12: titleContent.val("4.3.4：for in遍历"); break;
                case 13: titleContent.val("4.3.5：while 循环"); break;
                case 14: titleContent.val("4.3.6：do-while循环"); break;
                case 15: titleContent.val("4.4.1：参数定义"); break;
                case 16: titleContent.val("4.4.2：数组操作"); break;
                case 17: titleContent.val("4.4.3：二位数组"); break;
                case 18: titleContent.val("4.5.1：字符串连接"); break;
                case 19: titleContent.val("4.5.2：字符串搜索"); break;
                case 20: titleContent.val("4.5.3：字符串截取"); break;
                case 21: titleContent.val("4.5.4：字符串替换"); break;
                case 22: titleContent.val("4.5.5：字符串切割"); break;
                case 23: titleContent.val("4.6.1：正则表达式的组成"); break;
                case 24: titleContent.val("4.6.2：正则表达式所用的方法"); break;
                case 25: titleContent.val("4.7.1：对象的声明"); break;
                case 26: titleContent.val("4.7.2：对象的属性"); break;
                case 27: titleContent.val("4.7.1：对象的方法"); break;
                case 28: titleContent.val("4.7.2：对象的遍历"); break;
                case 29: titleContent.val("4.8.1：函数的声明"); break;
                case 30: titleContent.val("4.8.2：函数的返回值"); break;
                case 31: titleContent.val("4.8.1：函数的调用"); break;
                case 32: titleContent.val("4.8.2：闭包函数"); break;
                case 33: titleContent.val("4.8.2：内置函数"); break;
                case 34: titleContent.val("4.9：本章小结"); break;
                case 35: titleContent.val("5.1.1：window对象"); break;
                case 36: titleContent.val("5.1.2：document对象"); break;
                case 37: titleContent.val("5.1.3：location对象"); break;
                case 38: titleContent.val("5.1.4：navigator对象"); break;
                case 39: titleContent.val("5.1.5：screen对象"); break;
                case 40: titleContent.val("5.1.6：history对象"); break;
                case 41: titleContent.val("5.2：BOM操作"); break;
                case 42: titleContent.val("5.3：BOM对象"); break;
                case 43: titleContent.val("5.4.1：获取节点"); break;
                case 44: titleContent.val("5.4.2：获取|设置元素的属性值"); break;
                case 45: titleContent.val("5.4.3：创建|增添节点"); break;
                case 46: titleContent.val("5.4.4：删除节点"); break;
                case 47: titleContent.val("5.4.5：属性操作"); break;
                case 48: titleContent.val("5.5：本章小结"); break;
                case 49: titleContent.val("6.1：事件介绍"); break;
                case 50: titleContent.val("6.2.1：load事件"); break;
                case 51: titleContent.val("6.2.2：resize事件"); break;
                case 52: titleContent.val("6.2.3：scroll事件"); break;
                case 53: titleContent.val("6.2.4：焦点事件"); break;
                case 54: titleContent.val("6.3.1：获取鼠标单击位置"); break;
                case 55: titleContent.val("6.3.2：鼠标悬停和离开"); break;
                case 56: titleContent.val("6.3.3：鼠标拖拽"); break;
                case 57: titleContent.val("6.4：键盘事件"); break;
                case 58: titleContent.val("6.5：事件冒泡与捕获"); break;
                case 59: titleContent.val("6.6：本章小结"); break;
            }
        }
    });

    $("#next-page").on("click", function () {
        var QuickLinkCount = window.QuickLinkCount1;
        run(QuickLinkCount + 1);

        if (window.QuickLinkCount1 >= 59) {
            $("#add").children("#iframe").remove();
            $("#mission-title").val("3.10：本章小结")
            $("#add").append("<iframe frameborder='0' id='iframe' src='./section/section22/59.html' ></iframe>");
            window.QuickLinkCount1 = 59;
        }
        else {
            window.QuickLinkCount1++;
            $("#add").children("#iframe").remove();
            $("#add").append("<iframe frameborder='0' id='iframe' src='./section/section22/" + window.QuickLinkCount1 + ".html' ></iframe>");
            let titleContent = $("#mission-title");
            switch (window.QuickLinkCount1) {
                case 1: titleContent.val("4.1.1：JavaScript的诞生"); break;
                case 2: titleContent.val("4.1.2：ECMAScript的版本"); break;
                case 3: titleContent.val("4.2.1：JavaScript的特点"); break;
                case 4: titleContent.val("4.2.2：JavaScript的语法"); break;
                case 5: titleContent.val("4.2.3：JavaScript的关键字"); break;
                case 6: titleContent.val("4.2.4：JavaScript的变量"); break;
                case 7: titleContent.val("4.2.5：数据类型"); break;
                case 8: titleContent.val("4.2.6：运算符"); break;
                case 9: titleContent.val("4.3.1：if条件语句"); break;
                case 10: titleContent.val("4.3.2：switch分支语"); break;
                case 11: titleContent.val("4.3.3：for循环"); break;
                case 12: titleContent.val("4.3.4：for in遍历"); break;
                case 13: titleContent.val("4.3.5：while 循环"); break;
                case 14: titleContent.val("4.3.6：do-while循环"); break;
                case 15: titleContent.val("4.4.1：参数定义"); break;
                case 16: titleContent.val("4.4.2：数组操作"); break;
                case 17: titleContent.val("4.4.3：二位数组"); break;
                case 18: titleContent.val("4.5.1：字符串连接"); break;
                case 19: titleContent.val("4.5.2：字符串搜索"); break;
                case 20: titleContent.val("4.5.3：字符串截取"); break;
                case 21: titleContent.val("4.5.4：字符串替换"); break;
                case 22: titleContent.val("4.5.5：字符串切割"); break;
                case 23: titleContent.val("4.6.1：正则表达式的组成"); break;
                case 24: titleContent.val("4.6.2：正则表达式所用的方法"); break;
                case 25: titleContent.val("4.7.1：对象的声明"); break;
                case 26: titleContent.val("4.7.2：对象的属性"); break;
                case 27: titleContent.val("4.7.1：对象的方法"); break;
                case 28: titleContent.val("4.7.2：对象的遍历"); break;
                case 29: titleContent.val("4.8.1：函数的声明"); break;
                case 30: titleContent.val("4.8.2：函数的返回值"); break;
                case 31: titleContent.val("4.8.1：函数的调用"); break;
                case 32: titleContent.val("4.8.2：闭包函数"); break;
                case 33: titleContent.val("4.8.2：内置函数"); break;
                case 34: titleContent.val("4.9：本章小结"); break;
                case 35: titleContent.val("5.1.1：window对象"); break;
                case 36: titleContent.val("5.1.2：document对象"); break;
                case 37: titleContent.val("5.1.3：location对象"); break;
                case 38: titleContent.val("5.1.4：navigator对象"); break;
                case 39: titleContent.val("5.1.5：screen对象"); break;
                case 40: titleContent.val("5.1.6：history对象"); break;
                case 41: titleContent.val("5.2：BOM操作"); break;
                case 42: titleContent.val("5.3：BOM对象"); break;
                case 43: titleContent.val("5.4.1：获取节点"); break;
                case 44: titleContent.val("5.4.2：获取|设置元素的属性值"); break;
                case 45: titleContent.val("5.4.3：创建|增添节点"); break;
                case 46: titleContent.val("5.4.4：删除节点"); break;
                case 47: titleContent.val("5.4.5：属性操作"); break;
                case 48: titleContent.val("5.5：本章小结"); break;
                case 49: titleContent.val("6.1：事件介绍"); break;
                case 50: titleContent.val("6.2.1：load事件"); break;
                case 51: titleContent.val("6.2.2：resize事件"); break;
                case 52: titleContent.val("6.2.3：scroll事件"); break;
                case 53: titleContent.val("6.2.4：焦点事件"); break;
                case 54: titleContent.val("6.3.1：获取鼠标单击位置"); break;
                case 55: titleContent.val("6.3.2：鼠标悬停和离开"); break;
                case 56: titleContent.val("6.3.3：鼠标拖拽"); break;
                case 57: titleContent.val("6.4：键盘事件"); break;
                case 58: titleContent.val("6.5：事件冒泡与捕获"); break;
                case 59: titleContent.val("6.6：本章小结"); break;
            }
        }
    });
});