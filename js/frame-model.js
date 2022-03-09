window.onload = function () {

    if (localStorage.getItem("bgStatus") || localStorage.getItem("bgOption") == null || undefined || " ") {
        console.log("localStorage 为空！！");
        localStorage.setItem("bgStatus", "white");
        localStorage.setItem("bgOption", "#ffffff");
    }

    // 顶部导航栏元素显示
    $(this.$("#header").children("#nav-part")).on("click", function () {
        if ($(this).children("#nav-part-brother").is(":hidden")) {
            $(this).children("#nav-part-brother").slideDown(500);
            $(this).prevAll().children("#nav-part-brother").slideUp(500);
            $(this).nextAll().children("#nav-part-brother").slideUp(500);
        }
        else {
            $(this).children("#nav-part-brother").slideUp(500);
        }
    });

    // 顶部元素跳转
    $(this.$("#nav-part #nav-part-brother")).on("click", function () {
        location.href = "./section" + $(this).val() + ".html"
    });


    // 无子菜单元素li点击跳转
    $(this.$("#main #main-simple")).on("click", function () {
        $("#mission-title").val($(this).children().text());
        let sectionvalue = $("#tipsValue").val();
        let pagenum = $(this).val();
        window.QuickLinkCount1 = pagenum;
        $("#add").children("#iframe").remove();
        $("#add").append("<iframe frameborder='0' id='iframe' src='./section/section" + sectionvalue + "/" + pagenum + ".html' ></iframe>");
    });
    // 页面跳转,子菜单链接点击时样式
    $(this.$("#content").children("#ChildContent").children("a")).click(function (event) {
        event.stopImmediatePropagation();
        let pagevalue = $(this).parent().val();
        window.QuickLinkCount1 = pagevalue;
        let sectionvalue = $("input[id='tipsValue']").val();
        // 隐藏导航栏选项
        $("#header #nav-part #nav-part-brother").slideUp(500);
        // 子菜单样式
        $(this).parent().prevAll().css("boxShadow", "");
        $(this).parent().nextAll().css("boxShadow", "");
        $(this).parent().css("background", "rgba(238,255,0,0.6)");
        $(this).css("padding", "0 5%");
        $(this).parent().prevAll().children("a").css("padding", "");
        $(this).parent().nextAll().children("a").css("padding", "");
        $(this).parent().prevAll().css("background", window.bgOption);
        $(this).parent().nextAll().css("background", window.bgOption);
        $(this).parent().siblings("#menu-button").css("background", "rgba(255, 45, 45, 0.652)")
        $("#add").children("#iframe").remove();
        $("#add").append("<iframe frameborder='0' id='iframe' src='./section/section" + sectionvalue + "/" + pagevalue + ".html' ></iframe>");
    });

    $(this.$($("#main").children("#main-title"))).on("click", function () {
        $("#content #menu-button").css("borderLeftColor", "rgb(26, 179, 26)");
        // main-title
        if ($("#section-title").is(":hidden")) {
        }
        else {
            $("#header #nav-part #nav-part-brother").slideUp(500);
            $("#content").css("boxShadow", "");

            $(this).prevAll("#content").css("boxShadow", "");
            $(this).nextAll("#content").css("boxShadow", "");

            $("#main #content").prevAll().children("#ChildContent").slideUp(500);
            $("#main #content").nextAll().children("#ChildContent").slideUp(500);

            $(this).prevAll().children("#menu-button").css("background", window.bgOption);
            $(this).nextAll().children("#menu-button").css("background", window.bgOption);
            $("#main").children().prevAll().children("#ChildContent").css("transition", "");
        }
    });

    // 点击子菜单标题收缩菜单
    $(this.$($("#main").children("#content").children("#menu-button").children("#section-title"))).on("click", function () {
        // section-title
        if ($(this).children("#ChildContent").is(":hidden")) {
        }
        else {
            $("#header #nav-part #nav-part-brother").slideUp(500);
            $("#content").nextAll().children("#ChildContent").slideUp(500);
            $("#content").prevAll().children("#ChildContent").slideUp(500);
            $("#content").children("#ChildContent").slideUp(500);
        }
    });

    // 主菜单下唯一背景样式
    $(this.$($("#main").children("#main-simple"))).on("click", function () {
        // main>li
        $(this).css("background", "rgba(255, 45, 45, 0.652)");

        $(this).prevAll("li").css("background", window.bgOption);
        $(this).nextAll("li").css("background", window.bgOption);

        $(this).prevAll().css("boxShadow", "");
        $(this).nextAll().css("boxShadow", "");

        $(this).prevAll().children().css("boxShadow", "");
        $(this).nextAll().children().css("boxShadow", "");

        $("#menu-button").css("background", window.bgOption);
        $("#menu-button").css("borderLeftColor", "rgb(26, 179, 26)");

        $("#main").children().prevAll().children("#ChildContent").css("transition", "");
    });

    $(this.$($("#main").children().children("#content-text").parent())).on("click", function () {
        // menu-button
        if ($("#section-title").is(":hidden")) {
        }
        else {
            $("#header #nav-part #nav-part-brother").slideUp(500);

            $("#content").nextAll().children("#ChildContent").slideUp(500);
            $("#content").prevAll().children("#ChildContent").slideUp(500);
            $("#content").children("#ChildContent").slideUp(500);

            $(this).prevAll("ul").children("#menu-button").css("background", window.bgOption).css("borderLeftColor", "rgb(26, 179, 26)");
            $(this).nextAll("ul").children("#menu-button").css("background", window.bgOption).css("borderLeftColor", "rgb(26, 179, 26)");
            $(this).parent().prevAll().css("boxShadow", "");
            $(this).parent().nextAll().css("boxShadow", "")
        }
    });

    // 子菜单标题
    $(this.$("#content #menu-button")).on("click", function () {
        $("#mission-title").val($(this).children().text());
        // #content menu-button
        if ($(this).nextAll("#ChildContent").is(":hidden")) {
            $(this).siblings().slideDown(500);
            $(this).css("borderLeftColor", "#f53325d7");
            $(this).parent().prevAll().css("boxShadow", "");
            $(this).parent().nextAll().css("boxShadow", "");

            $(this).css("background", "rgba(255, 45, 45, 0.652)");
            $(this).parent().prevAll().children("#ChildContent").slideUp(500);
            $(this).parent().nextAll().children("#ChildContent").slideUp(500);

            $(this).css("background", "rgba(255, 45, 45, 0.652)");
            $(this).parent().prevAll().children("#menu-button").css("background", window.bgOption).css("borderLeftColor", "rgb(26, 179, 26)");
            $(this).parent().nextAll().children("#menu-button").css("background", window.bgOption).css("borderLeftColor", "rgb(26, 179, 26)");
            $(this).parent().prevAll().children("li").css("boxShadow", "");
            $(this).parent().nextAll().children("li").css("boxShadow", "");

            $(this).parent().prevAll("li").css("background", window.bgOption);
            $(this).parent().nextAll("li").css("background", window.bgOption);

            $(this).nextAll().css("background", window.bgOption);
            $(this).nextAll().children().css("padding", "");
            $(this).parent().css("boxShadow", "0px 0px 15px black");

            $("#main").children().prevAll().children("#ChildContent").css("transition", "");
        }
        else {
            $("#header #nav-part #nav-part-brother").slideUp(500);
            $(this).siblings().slideUp(500);
            $(this).css("background", window.bgOption).css("borderLeftColor", "rgb(26, 179, 26)");
            $(this).parent().css("boxShadow", "");
            $(this).siblings("#ChildContent").css("boxShadow", "");
            $("#main").children().prevAll().children("#ChildContent").css("transition", "");
        }
    });

    // 子菜单点击事件
    $(this.$("#content #ChildContent")).click(function () {
        // 标题提示
        $("#mission-title").val($(this).children().text());
        // 重置顶部导航栏样式
        $("#header #nav-part #nav-part-brother").slideUp(500);
        // 子菜单下子元素li点击跳转
        let sectionvalue = $("input[id='tipsValue']").val();
        let ChildPageNum = $(this).val();
        window.QuickLinkCount1 = ChildPageNum;
        $("#add").children("#iframe").remove();
        $("#add").append("<iframe frameborder='0' id='iframe' src='./section/section" + sectionvalue + "/" + ChildPageNum + ".html' ></iframe>");
        // 子菜单选项点击样式
        $(this).children().css("padding", "2.5% 5%");
        $(this).css("background", "rgba(238,255,0,0.6");
        $(this).css("boxShadow", "0 0 8px black");
        $(this).prevAll("#ChildContent").css("background", window.bgOption).css("boxShadow", "");
        $(this).nextAll("#ChildContent").css("background", window.bgOption).css("boxShadow", "");
        $(this).prevAll("#ChildContent").children("a").css("padding", "");
        $(this).nextAll("#ChildContent").children("a").css("padding", "");
    });

    // 子菜单划过样式
    $(this.$("#main #content #ChildContent")).hover(function () {
        $(this).css("paddingLeft", "5%");
        if (localStorage.getItem("bgStatus") == "white") {
            $(this).children().css("color", "white").css("background", "#2dc914f6");
        }
        else {
            $(this).children().css("color", "white").css("background", "#2dc914f6");
        }
    }, function () {
        $(this).css("paddingLeft", "");
        if (localStorage.getItem("bgStatus") == "white") {
            $(this).children().css("color", "black").css("background", "");
        }
        else {
            $(this).children().css("color", "white").css("background", "");
        }
    })

    // 主列表划过字体变白
    $(this.$("#main #main-simple")).hover(function () {
        if (localStorage.getItem("bgStatus") == "white") {
            $(this).children().css("color", "white").css("background", "#2dc914f6");
            $(this).children().children().css("color", "white").css("background", "#2dc914f6");
        }
        else {
            $(this).children().css("color", "white").css("background", "#2dc914f6");
            $(this).children().children().css("color", "white").css("background", "#2dc914f6");
        }
    }, function () {
        if (localStorage.getItem("bgStatus") == "white") {
            $(this).children().css("color", "black").css("background", "");
            $(this).children().children().css("color", "black").css("background", "");
        }
        else {
            $(this).children().css("color", "white").css("background", "");
            $(this).children().children().css("color", "white").css("background", "");
        }
    });

    // 切换页面选项划过
    $(this.$($("#header").children("#nav-part").children("#nav-part-brother"))).hover(function () {
        $(this).css("background", "rgba(255, 196, 0, 0.986)");
        $(this).children().css("background", "rgba(255, 196, 0, 0.986)");
    }, function () {
        $(this).css("background", window.bgOption);
        $(this).children().css("background", window.bgOption);
    })

    // aside,nav隐藏、显示
    $("#mission-title").val("首页");
    window.onresize = function () {
        if (!checkFull()) {
            $("aside").css({
                transform: "translate(0)",
            });
            $("#show-article").css({
                width: "78%",
                height: "92%",
                position: "absolute",
                bottom: "0",
            });
            $(".header-container ").css({
                transform: "translateY(0)"
            });
            $("#ui_status").css("right", "1%");
            $("#ui_status").val("全屏");
            $("#next-page,#last-page").fadeOut(500);
            $("#title_status").fadeOut(500);
            $("#mission-title").fadeOut(500);
            $("aside").css({
                transform: "translate(0)",
            });
            $("#show-article").css({
                width: "78%",
                height: "92%",
                position: "absolute",
                bottom: "0",
            });
            $(".header-container ").css({
                transform: "translateY(0)"
            });
            $("#ui_status").css("right", "1%");
            $("#ui_status").val("全屏");
            $("#next-page,#last-page").fadeOut(500);
            $("#title_status").fadeOut(500);
            $("#mission-title").fadeOut(500);
        }
    }
    // 判断是否退出
    function checkFull() {
        var isFull =
            document.fullscreenElement ||
            document.mozFullScreenElement ||
            document.webkitFullscreenElement
        if (isFull === undefined) isFull = false
        return isFull
    }

    // 初始化全屏下ui显示
    $("#mission-title").hide();
    $("#title_status").hide();
    $("#ui_status").css("right", "1%");
    window.uiStatus = false;

    $("#ui_status").click(function () {
        // 判断浏览器版本
        var fullDoc = document.getElementById("main-page");
        function full(fullDoc) {
            if (fullDoc.requestFullscreen) {
                fullDoc.requestFullscreen();
            } else if (fullDoc.mozRequestFullScreen) {
                fullDoc.mozRequestFullScreen();
            } else if (fullDoc.webkitRequestFullscreen) {
                fullDoc.webkitRequestFullscreen();
            } else if (fullDoc.msRequestFullscreen) {
                fullDoc.msRequestFullscreen();
            }
        }
        full(fullDoc);

        // 全屏窗口切换
        if ($("#ui_status").val() == "全屏") {
            $("aside").css({
                transform: "translateX(-200%)",
            });
            $("#show-article").css({
                width: "100%",
                height: "100%",
                position: "absolute",
            });
            $(".header-container ").css({
                transform: "translateY(-200%)",
            });
            $("#ui_status").css("right", "320px");
            $("#ui_status").val("窗口");
            $("#nav-part #nav-part-brother").slideUp(500);
            $("#next-page,#last-page").fadeIn(500)
            $("#title_status").fadeIn(500);
            $("#mission-title").fadeIn(500);
            $("#settings").fadeOut(500);
            setTimeout(() => {
                $("#last-page,#next-page").css("transition", "all 0.5s").css("opacity", "0.1");
            }, 1000);
            $("#last-page,#next-page").hover(function () {
                $(this).css("transition", "all 0.5s").css("opacity", "1")
            }, function () {
                $(this).css("transition", "all 0.5s").css("opacity", "0.1")
            })
        }
        else {
            // 退出屏幕
            function exitFullscreen() {
                if (document.exitFullScreen) {
                    document.exitFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                };
            };
            exitFullscreen();

            // 显示设置
            $("aside").css({
                transform: "translate(0)",
            });
            $("#show-article").css({
                width: "78%",
                height: "92%",
                position: "absolute",
                bottom: "0",
            });
            $(".header-container ").css({
                transform: "translateY(0)"
            });
            $("#ui_status").css("right", "1%");
            $("#ui_status").val("全屏");
            $("#next-page,#last-page").fadeOut(500);
            $("#title_status").fadeOut(500);
            $("#mission-title").fadeOut(500);
            $("#settings").fadeIn(500);

        }
    });

    // 底部input设置
    $("input").css("bottom", "10px");
}

// 欢迎页面
function Welcome() {
    //显示开始页面，考虑到某些设备性能问题就注释掉了    $("#add").append("<iframe frameborder='0' id='iframe' src='./welcome.html' ></iframe>");
    let jqversion = $.fn.jquery;
    console.log("\nWelcome to use it ！！！\n\nJquery Version:\n" + jqversion)
};
Welcome();
//滚动条样式设置
(function ($) {
    $(document).ready(function () {
        $("aside").mCustomScrollbar({
            scrollButtons: {
                enabled: true,
            },
            scrollInertia: 1000,
            mouseWheel: {
                scrollAmount: 300
            },
            keyboard: {
                enable: true
            },
        });
    });
})(jQuery);
