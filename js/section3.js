$(function () {
    window.bgOption = localStorage.getItem("bgOption")
    function run(QuickLinkCount) {
        var arr = [1, 2, 6, 7, 21, 22, 23, 45, 46, 47, 48, 49, 50, 65, 66];
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
        if (QuickLinkCount == 13 ||
            QuickLinkCount == 17 ||
            QuickLinkCount == 28 ||
            QuickLinkCount == 30 ||
            QuickLinkCount == 32 ||
            QuickLinkCount == 55 ||
            QuickLinkCount == 57 ||
            QuickLinkCount == 61) {
            ChildContent.parent().prevAll().children("#ChildContent").slideUp(300);
        }
        if (QuickLinkCount >= 66) {
            $(this.$("#main #main-simple[value=66]")).css("background", "rgba(238,255,0,0.6").css("boxShadow", "0 0 8px black");
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
            $("#mission-title").val("7.1：HTML5的出现")
            $("#add").append("<iframe frameborder='0' id='iframe' src='./section/section33/1.html' ></iframe>");
            window.QuickLinkCount1 = 1
        }
        else {
            window.QuickLinkCount1--;
            $("#add").children("#iframe").remove();
            $("#add").append("<iframe frameborder='0' id='iframe' src='./section/section33/" + window.QuickLinkCount1 + ".html' ></iframe>");
            console.log(window.QuickLinkCount1);
            let titleContent = $("#mission-title");
            switch (window.QuickLinkCount1) {
                case 1: titleContent.val("7.1：HTML5的出现"); break;
                case 2: titleContent.val("7.2：浏览器对HTML5的兼容性"); break;
                case 3: titleContent.val("7.3.1：DTD的变化"); break;
                case 4: titleContent.val("7.3.2：字符编码的变化"); break;
                case 5: titleContent.val("7.3.3：HTML5语法的变化"); break;
                case 6: titleContent.val("7.4：HTML5的优势"); break;
                case 7: titleContent.val("7.5：本章小结"); break;
                case 8: titleContent.val("8.1.1：基本元素"); break;
                case 9: titleContent.val("8.1.2：文本格式化元素"); break;
                case 10: titleContent.val("8.1.3：超链接和锚点"); break;
                case 11: titleContent.val("8.1.4：列表相关元素"); break;
                case 12: titleContent.val("8.1.5：表格相关元素"); break;
                case 13: titleContent.val("8.2.1：文档结构元素"); break;
                case 14: titleContent.val("8.2.2：文本格式化元素"); break;
                case 15: titleContent.val("8.2.3：页面增强元素"); break;
                case 16: titleContent.val("8.2.4：多媒体元素"); break;
                case 17: titleContent.val("8.3.1：文档结构元素"); break;
                case 18: titleContent.val("8.3.2：文本格式化元素"); break;
                case 19: titleContent.val("8.3.3：页面增强元素"); break;
                case 20: titleContent.val("8.3.4：多媒体元素"); break;
                case 21: titleContent.val("8.4：HTML5废弃的元素"); break;
                case 22: titleContent.val("8.5：HTML5废弃的属性"); break;
                case 23: titleContent.val("8.6：本章小结"); break;
                case 24: titleContent.val("9.1.1：表单元素&lt;form&gt;"); break;
                case 25: titleContent.val("9.1.2：表单控件&lt;input&gt;"); break;
                case 26: titleContent.val("9.1.3：表单控件&lt;label&gt;"); break;
                case 27: titleContent.val("9.1.4：表单控件&lt;select&gt;、&lt;option&gt;和&lt;optgroup&gt;"); break;
                case 28: titleContent.val("9.1.5：表单控件&lt;button&gt;"); break;
                case 29: titleContent.val("9.1.5：表单控件&lt;testarea&gt;"); break;
                case 30: titleContent.val("9.2.1：input元素新增功能类型"); break;
                case 31: titleContent.val("9.2.2：HTML5新增的表单控件&lt;output&gt;"); break;
                case 32: titleContent.val("9.3.1：form属性"); break;
                case 33: titleContent.val("9.3.2：formaction属性"); break;
                case 34: titleContent.val("9.3.3：formmethod属性"); break;
                case 35: titleContent.val("9.3.4：formenctype属性"); break;
                case 36: titleContent.val("9.3.5：formtarget属性"); break;
                case 37: titleContent.val("9.3.6：placeholder属性"); break;
                case 38: titleContent.val("9.3.7：autocomplate属性"); break;
                case 39: titleContent.val("9.3.8：autofocus属性"); break;
                case 40: titleContent.val("9.3.9：list属性"); break;
                case 41: titleContent.val("9.3.10：patten属性"); break;
                case 42: titleContent.val("9.3.11：novalidate属性"); break;
                case 43: titleContent.val("9.3.12：requried属性"); break;
                case 44: titleContent.val("9.3.13：&lt;textarea&gt;新增属性maxlength属性和wrap属性"); break;
                case 45: titleContent.val("9.4：本章小结"); break;
                case 46: titleContent.val("10.1：CSS3简介"); break;
                case 47: titleContent.val("10.2：兄弟选择器"); break;
                case 48: titleContent.val("10.3：新增的属性选择器"); break;
                case 49: titleContent.val("10.4：新增的伪类选择器"); break;
                case 50: titleContent.val("10.5：新增的伪元素选择器"); break;
                case 51: titleContent.val("11.1.1：background-clip"); break;
                case 52: titleContent.val("11.1.2：background-origin"); break;
                case 53: titleContent.val("11.1.3：background-size"); break;
                case 54: titleContent.val("11.1.4：多背景图片"); break;
                case 55: titleContent.val("11.2.1：CSS3新增使用服务器字体"); break;
                case 56: titleContent.val("11.2.2：CSS3新增文本属性"); break;
                case 57: titleContent.val("11.3.1：圆角边框"); break;
                case 58: titleContent.val("11.3.2：box-shadow"); break;
                case 59: titleContent.val("11.3.3：resize"); break;
                case 60: titleContent.val("11.3.4：outline-offset"); break;
                case 61: titleContent.val("11.4.1：CSS的变形属性"); break;
                case 62: titleContent.val("11.4.2：CSS的3D变形属性"); break;
                case 63: titleContent.val("11.4.3：CSS的过渡属性"); break;
                case 64: titleContent.val("11.4.4：CSS的动画属性"); break;
                case 65: titleContent.val("11.5：新增多列属性"); break;
                case 66: titleContent.val("11.6：本章小结"); break;
            }
        }
    });

    $("#next-page").on("click", function () {
        let QuickLinkCount = window.QuickLinkCount1;
        run(QuickLinkCount + 1);
        if (window.QuickLinkCount1 >= 66) {
            $("#add").children("#iframe").remove();
            $("#mission-title").val("11.6：本章小结")
            $("#add").append("<iframe frameborder='0' id='iframe' src='./section/section33/66.html' ></iframe>");
            window.QuickLinkCount1 = 66;
        }
        else {
            window.QuickLinkCount1++;
            $("#add").children("#iframe").remove();
            $("#add").append("<iframe frameborder='0' id='iframe' src='./section/section33/" + window.QuickLinkCount1 + ".html' ></iframe>");
            console.log(window.QuickLinkCount1);
            let titleContent = $("#mission-title");
            switch (window.QuickLinkCount1) {
                case 1: titleContent.val("7.1：HTML5的出现"); break;
                case 2: titleContent.val("7.2：浏览器对HTML5的兼容性"); break;
                case 3: titleContent.val("7.3.1：DTD的变化"); break;
                case 4: titleContent.val("7.3.2：字符编码的变化"); break;
                case 5: titleContent.val("7.3.3：HTML5语法的变化"); break;
                case 6: titleContent.val("7.4：HTML5的优势"); break;
                case 7: titleContent.val("7.5：本章小结"); break;
                case 8: titleContent.val("8.1.1：基本元素"); break;
                case 9: titleContent.val("8.1.2：文本格式化元素"); break;
                case 10: titleContent.val("8.1.3：超链接和锚点"); break;
                case 11: titleContent.val("8.1.4：列表相关元素"); break;
                case 12: titleContent.val("8.1.5：表格相关元素"); break;
                case 13: titleContent.val("8.2.1：文档结构元素"); break;
                case 14: titleContent.val("8.2.2：文本格式化元素"); break;
                case 15: titleContent.val("8.2.3：页面增强元素"); break;
                case 16: titleContent.val("8.2.4：多媒体元素"); break;
                case 17: titleContent.val("8.3.1：文档结构元素"); break;
                case 18: titleContent.val("8.3.2：文本格式化元素"); break;
                case 19: titleContent.val("8.3.3：页面增强元素"); break;
                case 20: titleContent.val("8.3.4：多媒体元素"); break;
                case 21: titleContent.val("8.4：HTML5废弃的元素"); break;
                case 22: titleContent.val("8.5：HTML5废弃的属性"); break;
                case 23: titleContent.val("8.6：本章小结"); break;
                case 24: titleContent.val("9.1.1：表单元素&lt;form&gt;"); break;
                case 25: titleContent.val("9.1.2：表单控件&lt;input&gt;"); break;
                case 26: titleContent.val("9.1.3：表单控件&lt;label&gt;"); break;
                case 27: titleContent.val("9.1.4：表单控件&lt;select&gt;、&lt;option&gt;和&lt;optgroup&gt;"); break;
                case 28: titleContent.val("9.1.5：表单控件&lt;button&gt;"); break;
                case 29: titleContent.val("9.1.5：表单控件&lt;testarea&gt;"); break;
                case 30: titleContent.val("9.2.1：input元素新增功能类型"); break;
                case 31: titleContent.val("9.2.2：HTML5新增的表单控件&lt;output&gt;"); break;
                case 32: titleContent.val("9.3.1：form属性"); break;
                case 33: titleContent.val("9.3.2：formaction属性"); break;
                case 34: titleContent.val("9.3.3：formmethod属性"); break;
                case 35: titleContent.val("9.3.4：formenctype属性"); break;
                case 36: titleContent.val("9.3.5：formtarget属性"); break;
                case 37: titleContent.val("9.3.6：placeholder属性"); break;
                case 38: titleContent.val("9.3.7：autocomplate属性"); break;
                case 39: titleContent.val("9.3.8：autofocus属性"); break;
                case 40: titleContent.val("9.3.9：list属性"); break;
                case 41: titleContent.val("9.3.10：patten属性"); break;
                case 42: titleContent.val("9.3.11：novalidate属性"); break;
                case 43: titleContent.val("9.3.12：requried属性"); break;
                case 44: titleContent.val("9.3.13：&lt;textarea&gt;新增属性maxlength属性和wrap属性"); break;
                case 45: titleContent.val("9.4：本章小结"); break;
                case 46: titleContent.val("10.1：CSS3简介"); break;
                case 47: titleContent.val("10.2：兄弟选择器"); break;
                case 48: titleContent.val("10.3：新增的属性选择器"); break;
                case 49: titleContent.val("10.4：新增的伪类选择器"); break;
                case 50: titleContent.val("10.5：新增的伪元素选择器"); break;
                case 51: titleContent.val("11.1.1：background-clip"); break;
                case 52: titleContent.val("11.1.2：background-origin"); break;
                case 53: titleContent.val("11.1.3：background-size"); break;
                case 54: titleContent.val("11.1.4：多背景图片"); break;
                case 55: titleContent.val("11.2.1：CSS3新增使用服务器字体"); break;
                case 56: titleContent.val("11.2.2：CSS3新增文本属性"); break;
                case 57: titleContent.val("11.3.1：圆角边框"); break;
                case 58: titleContent.val("11.3.2：box-shadow"); break;
                case 59: titleContent.val("11.3.3：resize"); break;
                case 60: titleContent.val("11.3.4：outline-offset"); break;
                case 61: titleContent.val("11.4.1：CSS的变形属性"); break;
                case 62: titleContent.val("11.4.2：CSS的3D变形属性"); break;
                case 63: titleContent.val("11.4.3：CSS的过渡属性"); break;
                case 64: titleContent.val("11.4.4：CSS的动画属性"); break;
                case 65: titleContent.val("11.5：新增多列属性"); break;
                case 66: titleContent.val("11.6：本章小结"); break;
            }
        }
    });
});