// 颜色定义
function green() {
    localStorage.setItem("bgOption", "#00ab72");
    window.bgOption = "#00ab72";
    $("#header #nav-part #nav-part-title,#nav-part-brother,.title,section").css("background", "#00ab72").css("color", "white");
    $(".title>a>h3").css("color", "white");
    $("#nav-part-brother>a").css("color", "white");
    $("#settings").css("background", "#00ab72").css("color", "white");
    $("#setting-control").css("background", "#00ab72").css("color", "white");
    $(".color-area").css({
        borderTop: "1px solid rgb(255,255,255)",
        borderBottom: "1px solid rgb(255,255,255)"
    });
    $("aside li,aside,h4>a,li>a").css("background", "#00ab72").css("color", "white");
};

function red() {
    localStorage.setItem("bgOption", "#FF6C55");
    window.bgOption = "#FF6C55";
    $("#header #nav-part #nav-part-title,#nav-part-brother,.title,section").css("background", "#FF6C55").css("color", "white");
    $(".title>a>h3").css("color", "white");
    $("#nav-part-brother>a").css("color", "white");
    $("#settings").css("background", "#FF6C55").css("color", "white");
    $("#setting-control").css("background", "#FF6C55").css("color", "white");
    $(".color-area").css({
        borderTop: "1px solid rgb(255,255,255)",
        borderBottom: "1px solid rgb(255,255,255)"
    });
    $("aside li,aside,h4>a,li>a").css("background", "#FF6C55").css("color", "white");
};

function pink() {
    localStorage.setItem("bgOption", "#FF6F9C");
    window.bgOption = "#FF6F9C";
    $("#header #nav-part #nav-part-title,#nav-part-brother,.title,section").css("background", "#FF6F9C").css("color", "white");
    $(".title>a>h3").css("color", "white");
    $("#nav-part-brother>a").css("color", "white");
    $("#settings").css("background", "#FF6F9C").css("color", "white");
    $("#setting-control").css("background", "#FF6F9C").css("color", "white");
    $(".color-area").css({
        borderTop: "1px solid rgb(255,255,255)",
        borderBottom: "1px solid rgb(255,255,255)"
    });
    $("aside li,aside,h4>a,li>a").css("background", "#FF6F9C").css("color", "white");
};

function orange() {
    localStorage.setItem("bgOption", "#ff9e37f6");
    window.bgOption = "#ff9e37f6";
    $("#header #nav-part #nav-part-title,#nav-part-brother,.title,section").css("background", "#ff9e37f6").css("color", "white");
    $(".title>a>h3").css("color", "white");
    $("#nav-part-brother>a").css("color", "white");
    $("#settings").css("background", "#ff9e37f6").css("color", "white");
    $("#setting-control").css("background", "#ff9e37f6").css("color", "white");
    $(".color-area").css({
        borderTop: "1px solid rgb(255,255,255)",
        borderBottom: "1px solid rgb(255,255,255)"
    });
    $("aside li,aside,h4>a,li>a").css("background", "#ff9e37f6").css("color", "white");
};

function white() {
    localStorage.setItem("bgOption", "#ffffff");
    window.bgOption = "#ffffff";
    $("#header #nav-part #nav-part-title,#nav-part-brother,.title,section").css("background", "white").css("color", "black");
    $(".title>a>h3").css("color", "black");
    $("#nav-part-brother>a").css("color", "black");
    $("#settings").css("background", "").css("color", "black");
    $("#setting-control").css("background", "white").css("color", "black");
    $(".color-area").css({
        borderTop: "1px solid black",
        borderBottom: "1px solid black"
    });
    $("aside li,aside,h4>a,li>a").css("background", "white").css("color", "black");
};

function black() {
    localStorage.setItem("bgOption", "#292929");
    window.bgOption = "#292929";
    $("#header #nav-part #nav-part-title,#nav-part-brother,.title,section").css("background", "#292929").css("color", "white");
    $(".title>a>h3").css("color", "white");
    $("#nav-part-brother>a").css("color", "white");
    $("#settings").css("background", "#292929").css("color", "white");
    $("#setting-control").css("background", "#292929").css("color", "white");
    $(".color-area").css({
        borderTop: "1px solid rgb(255,255,255)",
        borderBottom: "1px solid rgb(255,255,255)"
    });
    $("aside li,aside,h4>a,li>a").css("background", "#292929").css("color", "white");
};
$(document).ready(function () {
    var bgStatus2 = localStorage.getItem("bgStatus");
    if (bgStatus2 == "green") { green() }
    if (bgStatus2 == "red") { red() }
    if (bgStatus2 == "pink") { pink() }
    if (bgStatus2 == "orange") { orange() }
    if (bgStatus2 == "white") { white() }
    if (bgStatus2 == "black") { black() }

    var bgStatus = "#" + localStorage.getItem("bgStatus");
    $(bgStatus).attr("checked", "checked");
    $(".color-item input[name=bgcolor]").change(function () {
        localStorage.setItem("bgStatus", $(this).attr("id"));
        // 颜色查找
        var bgLocalCache = localStorage.getItem("bgStatus");
        const bgSearch = {
            green: bgLocalCache.indexOf("green") > -1,
            red: bgLocalCache.indexOf("red") > -1,
            pink: bgLocalCache.indexOf("pink") > -1,
            orange: bgLocalCache.indexOf("orange") > -1,
            white: bgLocalCache.indexOf("white") > -1,
            black: bgLocalCache.indexOf("black") > -1
        };
        if (bgSearch.green) { green() }
        if (bgSearch.red) { red() }
        if (bgSearch.pink) { pink() }
        if (bgSearch.orange) { orange() }
        if (bgSearch.white) { white() }
        if (bgSearch.black) { black() }
    });

    // 点击选项按钮时界面效果
    bodyControlStatus = false;
    $("#settings").on("click", function () {
        if (bodyControlStatus == false) {
            $("#body-control").css({
                transition: "all 1s",
                transform: "translateX(20%)"
            });
            $("#settings").css({
                transition: "all 1s",
                transform: "rotate(90deg)"
            });
            $("#setting-control").css("transform", "translateX(0)")
            bodyControlStatus = true;
            $("#ui_status").fadeOut(300);
        }
        else {
            $("#body-control").css({
                transition: "all 1s",
                transform: ""
            });
            $("#settings").css({
                transition: "all 1s",
                transform: "rotate(0deg)"
            });
            $("#setting-control").css({
                transition: "all 1s",
                transform: "translateX(-100%)"
            })
            bodyControlStatus = false;
            $("#ui_status").fadeIn(300);
        }
    })
})