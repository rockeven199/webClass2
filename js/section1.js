$(function () {
    window.bgOption = localStorage.getItem("bgOption")
    //基础封装
    function run(QuickLinkCount) {
        var arr = [1, 8, 9, 29, 30, 31, 32, 33, 34, 35, 58];//单独选项页数数组
        var ChildContent = $(this.$("#main #content").children("#ChildContent[value=" + QuickLinkCount + "]"))//获取包含子元素的选项页数id
        var mainSimple = $(this.$("#main #main-simple[value=" + QuickLinkCount + "]"));//获取单独选项元素的页码值
        if (arr.indexOf(QuickLinkCount) != -1) {
            mainSimple.prevAll().css("background", window.bgOption).nextAll().css("background", window.bgOption).css("boxShadow", "");//设置样式
            mainSimple.css("background", "rgba(238,255,0,0.6").css("boxShadow", "0 0 8px black");
            $("#main #content #ChildContent").slideUp("500").css("background", window.bgOption).css("boxShadow", "");
        }
        else {
            $("#main #main-simple").css("background", window.bgOption).css("boxShadow", "");
            $(this.$("#content #ChildContent")).css("background", window.bgOption).css("boxShadow", "").children("a").css("background", "");
            ChildContent.css("background", "rgba(238,255,0,0.6)").css("boxShadow", "0 0 8px black").parent().children("#ChildContent").slideDown("500").prevAll("#content").slideUp("500").nextAll("#content").slideUp(500);
            ChildContent.children("a").css("background", "rgba(238,255,0,0.6)");
        }

        // 页面循环

        if (QuickLinkCount == 15 || QuickLinkCount == 17 || QuickLinkCount == 36 || QuickLinkCount == 44 || QuickLinkCount == 51 || QuickLinkCount == 56) {
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
    // 页面标题查找,页面切换
    window.QuickLinkCount1 = 0;
    $("#last-page,#next-page").hide();
    $("#last-page").on("click", function () {
        var QuickLinkCount = window.QuickLinkCount1;
        run(QuickLinkCount - 1);

        if (window.QuickLinkCount1 <= 1) {
            $("#add").children("#iframe").remove();
            $("#mission-title").val("1.1：Web的诞生")
            $("#add").append("<iframe frameborder='0' id='iframe' src='./section/section11/1.html' ></iframe>");
            window.QuickLinkCount1 = 1;
        }
        else {
            window.QuickLinkCount1--;
            $("#add").children("#iframe").remove();
            $("#add").append("<iframe frameborder='0' id='iframe' src='./section/section11/" + window.QuickLinkCount1 + ".html' ></iframe>");
            console.log(window.QuickLinkCount1);
            let titleContent = $("#mission-title");
            switch (window.QuickLinkCount1) {
                case 1: titleContent.val("1.1：Web的诞生"); break;
                case 2: titleContent.val("1.2.1：WWW"); break;
                case 3: titleContent.val("1.2.2：WebSite"); break;
                case 4: titleContent.val("1.2.3：URL"); break;
                case 5: titleContent.val("1.2.4：Web标准"); break;
                case 6: titleContent.val("1.2.5：Web浏览器"); break;
                case 7: titleContent.val("1.2.6：Web服务器"); break;
                case 8: titleContent.val("1.3：Web开发"); break;
                case 9: titleContent.val("1.4：本章小结"); break;
                case 10: titleContent.val("2.1.1：标记语言"); break;
                case 11: titleContent.val("2.1.2：从HTML到XHTML"); break;
                case 12: titleContent.val("2.1.3：HTML基本结构"); break;
                case 13: titleContent.val("2.1.4：HTML的相关基本定义"); break;
                case 14: titleContent.val("2.1.5：HTML的常用开发工具"); break;
                case 15: titleContent.val("2.2.1：HTML的标准全局属性"); break;
                case 16: titleContent.val("2.2.2：HTML的全局事件属性"); break;
                case 17: titleContent.val("2.3.1：HTML的主体元素"); break;
                case 18: titleContent.val("2.3.2：HTML的无语义元素"); break;
                case 19: titleContent.val("2.3.3：HTML的标题元素"); break;
                case 20: titleContent.val("2.3.4：HTML的段落元素"); break;
                case 21: titleContent.val("2.3.5：HTML的注释元素"); break;
                case 22: titleContent.val("2.3.6：HTML的格式化元素"); break;
                case 23: titleContent.val("2.3.7：HTML的图片元素"); break;
                case 24: titleContent.val("2.3.8：HTML的超连接元素"); break;
                case 25: titleContent.val("2.3.9：HTML的列表元素"); break;
                case 26: titleContent.val("2.3.10：HTML的表格元素"); break;
                case 27: titleContent.val("2.3.11：HTML的表单元素"); break;
                case 28: titleContent.val("2.3.12：HTML的框架元素"); break;
                case 29: titleContent.val("2.4：HTML的预留字符"); break;
                case 30: titleContent.val("2.5：本章小结"); break;
                case 31: titleContent.val("3.1：什么是CSS"); break;
                case 32: titleContent.val("3.2：CSS的历史"); break;
                case 33: titleContent.val("3.3：CSS样式单的使用方式"); break;
                case 34: titleContent.val("3.4：CSS的两个特性"); break;
                case 35: titleContent.val("3.5：CSS的基本语法"); break;
                case 36: titleContent.val("3.6.1：元素选择器"); break;
                case 37: titleContent.val("3.6.2：通配符选择器"); break;
                case 38: titleContent.val("3.6.3：属性选择器"); break;
                case 39: titleContent.val("3.6.4：派生选择器|上下文选择器"); break;
                case 40: titleContent.val("3.6.5：id选择器"); break;
                case 41: titleContent.val("3.6.6：类选择器"); break;
                case 42: titleContent.val("3.6.7：伪类选择器"); break;
                case 43: titleContent.val("3.6.8：伪元素选择器"); break;
                case 44: titleContent.val("3.7.1：CSS背景属性"); break;
                case 45: titleContent.val("3.7.2：CSS字体属性"); break;
                case 46: titleContent.val("3.7.3：CSS文本属性"); break;
                case 47: titleContent.val("3.7.4：CSS尺寸属性"); break;
                case 48: titleContent.val("3.7.5：CSS列表属性"); break;
                case 49: titleContent.val("3.7.6：CSS表格属性"); break;
                case 50: titleContent.val("3.7.7：CSS内容属性"); break;
                case 51: titleContent.val("3.8.1：CSS内边距"); break;
                case 52: titleContent.val("3.8.2：CSS值复制"); break;
                case 53: titleContent.val("3.8.3：CSS外边距属性"); break;
                case 54: titleContent.val("3.8.4：CSS边框属性"); break;
                case 55: titleContent.val("3.8.5：CSS轮廓属性"); break;
                case 56: titleContent.val("3.9.1：CSS浮动属性"); break;
                case 57: titleContent.val("3.9.2：CSS定位属性"); break;
                case 58: titleContent.val("3.10：本章小结"); break;
            }
        }
    });

    //同上
    $("#next-page").on("click", function () {
        let QuickLinkCount = window.QuickLinkCount1;
        run(QuickLinkCount + 1);

        if (window.QuickLinkCount1 >= 58) {
            $("#add").children("#iframe").remove();
            $("#mission-title").val("3.10：本章小结")
            $("#add").append("<iframe frameborder='0' id='iframe' src='./section/section11/58.html' ></iframe>");
            window.QuickLinkCount1 = 58;
        }
        else {
            window.QuickLinkCount1++;
            $("#add").children("#iframe").remove();
            $("#add").append("<iframe frameborder='0' id='iframe' src='./section/section11/" + window.QuickLinkCount1 + ".html' ></iframe>");
            console.log(window.QuickLinkCount1);
            let titleContent = $("#mission-title");
            switch (window.QuickLinkCount1) {
                case 1: titleContent.val("1.1：Web的诞生"); break;
                case 2: titleContent.val("1.2.1：WWW"); break;
                case 3: titleContent.val("1.2.2：WebSite"); break;
                case 4: titleContent.val("1.2.3：URL"); break;
                case 5: titleContent.val("1.2.4：Web标准"); break;
                case 6: titleContent.val("1.2.5：Web浏览器"); break;
                case 7: titleContent.val("1.2.6：Web服务器"); break;
                case 8: titleContent.val("1.3：Web开发"); break;
                case 9: titleContent.val("1.4：本章小结"); break;
                case 10: titleContent.val("2.1.1：标记语言"); break;
                case 11: titleContent.val("2.1.2：从HTML到XHTML"); break;
                case 12: titleContent.val("2.1.3：HTML基本结构"); break;
                case 13: titleContent.val("2.1.4：HTML的相关基本定义"); break;
                case 14: titleContent.val("2.1.5：HTML的常用开发工具"); break;
                case 15: titleContent.val("2.2.1：HTML的标准全局属性"); break;
                case 16: titleContent.val("2.2.2：HTML的全局事件属性"); break;
                case 17: titleContent.val("2.3.1：HTML的主体元素"); break;
                case 18: titleContent.val("2.3.2：HTML的无语义元素"); break;
                case 19: titleContent.val("2.3.3：HTML的标题元素"); break;
                case 20: titleContent.val("2.3.4：HTML的段落元素"); break;
                case 21: titleContent.val("2.3.5：HTML的注释元素"); break;
                case 22: titleContent.val("2.3.6：HTML的格式化元素"); break;
                case 23: titleContent.val("2.3.7：HTML的图片元素"); break;
                case 24: titleContent.val("2.3.8：HTML的超连接元素"); break;
                case 25: titleContent.val("2.3.9：HTML的列表元素"); break;
                case 26: titleContent.val("2.3.10：HTML的表格元素"); break;
                case 27: titleContent.val("2.3.11：HTML的表单元素"); break;
                case 28: titleContent.val("2.3.12：HTML的框架元素"); break;
                case 29: titleContent.val("2.4：HTML的预留字符"); break;
                case 30: titleContent.val("2.5：本章小结"); break;
                case 31: titleContent.val("3.1：什么是CSS"); break;
                case 32: titleContent.val("3.2：CSS的历史"); break;
                case 33: titleContent.val("3.3：CSS样式单的使用方式"); break;
                case 34: titleContent.val("3.4：CSS的两个特性"); break;
                case 35: titleContent.val("3.5：CSS的基本语法"); break;
                case 36: titleContent.val("3.6.1：元素选择器"); break;
                case 37: titleContent.val("3.6.2：通配符选择器"); break;
                case 38: titleContent.val("3.6.3：属性选择器"); break;
                case 39: titleContent.val("3.6.4：派生选择器|上下文选择器"); break;
                case 40: titleContent.val("3.6.5：id选择器"); break;
                case 41: titleContent.val("3.6.6：类选择器"); break;
                case 42: titleContent.val("3.6.7：伪类选择器"); break;
                case 43: titleContent.val("3.6.8：伪元素选择器"); break;
                case 44: titleContent.val("3.7.1：CSS背景属性"); break;
                case 45: titleContent.val("3.7.2：CSS字体属性"); break;
                case 46: titleContent.val("3.7.3：CSS文本属性"); break;
                case 47: titleContent.val("3.7.4：CSS尺寸属性"); break;
                case 48: titleContent.val("3.7.5：CSS列表属性"); break;
                case 49: titleContent.val("3.7.6：CSS表格属性"); break;
                case 50: titleContent.val("3.7.7：CSS内容属性"); break;
                case 51: titleContent.val("3.8.1：CSS内边距"); break;
                case 52: titleContent.val("3.8.2：CSS值复制"); break;
                case 53: titleContent.val("3.8.3：CSS外边距属性"); break;
                case 54: titleContent.val("3.8.4：CSS边框属性"); break;
                case 55: titleContent.val("3.8.5：CSS轮廓属性"); break;
                case 56: titleContent.val("3.9.1：CSS浮动属性"); break;
                case 57: titleContent.val("3.9.2：CSS定位属性"); break;
                case 58: titleContent.val("3.10：本章小结"); break;
            }
        }
    });
});
