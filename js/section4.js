$(function () {
    window.bgOption = localStorage.getItem("bgOption")
    function run(QuickLinkCount) {
        var arr = [27, 49, 53, 54, 55, 56, 57, 58]
        var ChildContent = $(this.$("#main #content").children("#ChildContent[value=" + QuickLinkCount + "]"))
        var mainSimple = $(this.$("#main #main-simple[value=" + QuickLinkCount + "]"))
        if (arr.indexOf(QuickLinkCount) == -1) {
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
        if (QuickLinkCount == 5 ||
            QuickLinkCount == 14 ||
            QuickLinkCount == 20 ||
            QuickLinkCount == 30 ||
            QuickLinkCount == 35 ||
            QuickLinkCount == 43 ||
            QuickLinkCount == 45 ||
            QuickLinkCount == 47
        ) {
            ChildContent.parent().prevAll().children("#ChildContent").slideUp(300);
        }
        if (QuickLinkCount >= 58) {
            $(this.$("#main #main-simple[value=58]")).css("background", "rgba(238,255,0,0.6").css("boxShadow", "0 0 8px black");
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
            $("#mission-title").val("12.1.1：JQuery简介")
            $("#add").append("<iframe frameborder='0' id='iframe' src='./section/section1/58.html' ></iframe>");
            window.QuickLinkCount1 = 0
        }
        else {
            window.QuickLinkCount1--;
            $("#add").children("#iframe").remove();
            $("#add").append("<iframe frameborder='0' id='iframe' src='./section/section44/" + window.QuickLinkCount1 + ".html' ></iframe>");
            console.log(window.QuickLinkCount1);
            let titleContent = $("#mission-title");
            switch (window.QuickLinkCount1) {
                case 1: titleContent.val("12.1.1：JQuery简介"); break;
                case 2: titleContent.val("12.1.2：JQuery优势"); break;
                case 3: titleContent.val("12.1.3：JQuery安装"); break;
                case 4: titleContent.val("12.1.4：JQuery语法"); break;
                case 5: titleContent.val("12.2.1：id选择器"); break;
                case 6: titleContent.val("12.2.2：类选择器"); break;
                case 7: titleContent.val("12.2.3：标记选择器"); break;
                case 8: titleContent.val("12.2.4：属性选择器"); break;
                case 9: titleContent.val("12.2.5：位置选择器"); break;
                case 10: titleContent.val("12.2.6：后代选择器"); break;
                case 11: titleContent.val("12.2.7：子代选择器"); break;
                case 12: titleContent.val("12.2.8：选择器对象"); break;
                case 13: titleContent.val("12.2.9：选择器对象遍历应用及页面初始化"); break;
                case 14: titleContent.val("12.3.1：查找HTML元素"); break;
                case 15: titleContent.val("12.3.2：创建HTML元素"); break;
                case 16: titleContent.val("12.3.3：插入HTML元素"); break;
                case 17: titleContent.val("12.3.4：删除HTML元素"); break;
                case 18: titleContent.val("12.3.5：复制HTML元素"); break;
                case 19: titleContent.val("12.3.6：替换HTML元素"); break;
                case 20: titleContent.val("12.4.1：事件绑定"); break;
                case 21: titleContent.val("12.4.2：鼠标事件"); break;
                case 22: titleContent.val("12.4.3：键盘事件"); break;
                case 23: titleContent.val("12.4.4：表单事件"); break;
                case 24: titleContent.val("12.4.5：窗口事件"); break;
                case 25: titleContent.val("12.4.6：事件冒泡"); break;
                case 26: titleContent.val("12.4.7：事件解除"); break;
                case 27: titleContent.val("12.5：本章小结"); break;
                case 28: titleContent.val("13.1.1：元素及浏览器窗口的宽和高"); break;
                case 29: titleContent.val("13.1.2：字符串搜索"); break;
                case 30: titleContent.val("13.2.1：标签内容操作"); break;
                case 31: titleContent.val("13.2.2：标签属性操作"); break;
                case 32: titleContent.val("13.2.3：图片轮换效果"); break;
                case 33: titleContent.val("13.2.4：标签样式操作"); break;
                case 34: titleContent.val("13.2.5：选项卡效果"); break;
                case 35: titleContent.val("13.3.1：隐藏和显示"); break;
                case 36: titleContent.val("13.3.2：遮罩层"); break;
                case 37: titleContent.val("13.3.3：淡入和淡出"); break;
                case 38: titleContent.val("13.3.4：动画效果滑动"); break;
                case 39: titleContent.val("13.3.5：页面右下角弹层"); break;
                case 40: titleContent.val("13.3.6：自定义动画方法"); break;
                case 41: titleContent.val("13.3.7：鼠标位置获取"); break;
                case 42: titleContent.val("13.3.8：两级联动"); break;
                case 43: titleContent.val("13.4.1：弹窗移动分析"); break;
                case 44: titleContent.val("13.4.2：弹窗移动实现"); break;
                case 45: titleContent.val("13.5.1：图片左右滚动分析"); break;
                case 46: titleContent.val("13.5.2：图片左右滚动实现"); break;
                case 47: titleContent.val("13.6.1：图片放大效果分析"); break;
                case 48: titleContent.val("13.6.2：图片放大效果实现"); break;
                case 49: titleContent.val("13.7：本章小结"); break;
                case 50: titleContent.val("14.1.1：AJAX工作原理"); break;
                case 51: titleContent.val("14.1.2：AJAX原生写法"); break;
                case 52: titleContent.val("14.1.3：JQuery中AJAX语法"); break;
                case 53: titleContent.val("14.2：JSON对象"); break;
                case 54: titleContent.val("14.3：XML使用"); break;
                case 55: titleContent.val("14.4：load()"); break;
                case 56: titleContent.val("14.5：get()和post()"); break;
                case 57: titleContent.val("14.6：AJAX跨域"); break;
                case 58: titleContent.val("14.7：本章小结"); break;
            }
        }
    });

    $("#next-page").on("click", function () {
        let QuickLinkCount = window.QuickLinkCount1;
        run(QuickLinkCount + 1);
        if (window.QuickLinkCount1 >= 58) {
            $("#add").children("#iframe").remove();
            $("#mission-title").val("14.7：本章小结")
            $("#add").append("<iframe frameborder='0' id='iframe' src='./section/section44/58.html' ></iframe>");
            window.QuickLinkCount1 = 58;
        }
        else {
            window.QuickLinkCount1++;
            $("#add").children("#iframe").remove();
            $("#add").append("<iframe frameborder='0' id='iframe' src='./section/section44/" + window.QuickLinkCount1 + ".html' ></iframe>");
            console.log(window.QuickLinkCount1);
            let titleContent = $("#mission-title");
            switch (window.QuickLinkCount1) {
                case 1: titleContent.val("12.1.1：JQuery简介"); break;
                case 2: titleContent.val("12.1.2：JQuery优势"); break;
                case 3: titleContent.val("12.1.3：JQuery安装"); break;
                case 4: titleContent.val("12.1.4：JQuery语法"); break;
                case 5: titleContent.val("12.2.1：id选择器"); break;
                case 6: titleContent.val("12.2.2：类选择器"); break;
                case 7: titleContent.val("12.2.3：标记选择器"); break;
                case 8: titleContent.val("12.2.4：属性选择器"); break;
                case 9: titleContent.val("12.2.5：位置选择器"); break;
                case 10: titleContent.val("12.2.6：后代选择器"); break;
                case 11: titleContent.val("12.2.7：子代选择器"); break;
                case 12: titleContent.val("12.2.8：选择器对象"); break;
                case 13: titleContent.val("12.2.9：选择器对象遍历应用及页面初始化"); break;
                case 14: titleContent.val("12.3.1：查找HTML元素"); break;
                case 15: titleContent.val("12.3.2：创建HTML元素"); break;
                case 16: titleContent.val("12.3.3：插入HTML元素"); break;
                case 17: titleContent.val("12.3.4：删除HTML元素"); break;
                case 18: titleContent.val("12.3.5：复制HTML元素"); break;
                case 19: titleContent.val("12.3.6：替换HTML元素"); break;
                case 20: titleContent.val("12.4.1：事件绑定"); break;
                case 21: titleContent.val("12.4.2：鼠标事件"); break;
                case 22: titleContent.val("12.4.3：键盘事件"); break;
                case 23: titleContent.val("12.4.4：表单事件"); break;
                case 24: titleContent.val("12.4.5：窗口事件"); break;
                case 25: titleContent.val("12.4.6：事件冒泡"); break;
                case 26: titleContent.val("12.4.7：事件解除"); break;
                case 27: titleContent.val("12.5：本章小结"); break;
                case 28: titleContent.val("13.1.1：元素及浏览器窗口的宽和高"); break;
                case 29: titleContent.val("13.1.2：字符串搜索"); break;
                case 30: titleContent.val("13.2.1：标签内容操作"); break;
                case 31: titleContent.val("13.2.2：标签属性操作"); break;
                case 32: titleContent.val("13.2.3：图片轮换效果"); break;
                case 33: titleContent.val("13.2.4：标签样式操作"); break;
                case 34: titleContent.val("13.2.5：选项卡效果"); break;
                case 35: titleContent.val("13.3.1：隐藏和显示"); break;
                case 36: titleContent.val("13.3.2：遮罩层"); break;
                case 37: titleContent.val("13.3.3：淡入和淡出"); break;
                case 38: titleContent.val("13.3.4：动画效果滑动"); break;
                case 39: titleContent.val("13.3.5：页面右下角弹层"); break;
                case 40: titleContent.val("13.3.6：自定义动画方法"); break;
                case 41: titleContent.val("13.3.7：鼠标位置获取"); break;
                case 42: titleContent.val("13.3.8：两级联动"); break;
                case 43: titleContent.val("13.4.1：弹窗移动分析"); break;
                case 44: titleContent.val("13.4.2：弹窗移动实现"); break;
                case 45: titleContent.val("13.5.1：图片左右滚动分"); break;
                case 46: titleContent.val("13.5.2：图片左右滚动实"); break;
                case 47: titleContent.val("13.6.1：图片放大效果分"); break;
                case 48: titleContent.val("13.6.2：图片放大效果实"); break;
                case 49: titleContent.val("13.7：本章小结"); break;
                case 50: titleContent.val("AJAX简介 | 14.1.1：AJAX工作原理"); break;
                case 51: titleContent.val("14.1.2：AJAX原生写法"); break;
                case 52: titleContent.val("14.1.3：JQuery中AJAX语法"); break;
                case 53: titleContent.val("14.2：JSON对象"); break;
                case 54: titleContent.val("14.3：XML使用"); break;
                case 55: titleContent.val("14.4：load()"); break;
                case 56: titleContent.val("14.5：get()和post()"); break;
                case 57: titleContent.val("14.6：AJAX跨域"); break;
                case 58: titleContent.val("14.7：本章小结"); break;
            }
        }
    });
});