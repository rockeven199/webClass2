hljs.highlightAll();
window.onload = function () {
    var clipboard = new ClipboardJS("#copy-button1,#copy-button2,#copy-button3,#copy-button4,#copy-button5,#copy-button6,#copy-button7,#copy-button8,#copy-button9");
    clipboard.on('success', function (e) {
        console.log(e);
    });
    clipboard.on('error！', function (e) {
        console.log(e);
    });
    $("#mask").hide(0.5);
    $("#success").text("复制成功！");
    $("[name='copy']").text("复制代码").css({ "fontSize": "12px" });
    $("#CopySuccessInfo").next().remove();
    $(this.$("img")).on("click", function () {
        let src = $(this).attr("src")
        $("#mask").fadeIn(300)
        $("#maskimg").attr("src", src)
    });
    $("#mask svg").on("click", function () {
        $("#mask").fadeOut(300);
    })
    $("#CopyErrorInfo,#CopySuccessInfo").slideUp(1);
    $("#copy-button1,#copy-button2,#copy-button3,#copy-button4,#copy-button5,#copy-button6,#copy-button7,#copy-button8,#copy-button9").click(function () {
        $("#CopySuccessInfo").slideDown(300);
        // $("#CopySuccessInfo").addClass("animate__animated animate__fadeIn");
        setTimeout(function () {
            $("#CopySuccessInfo").slideDown(300)
            $("#CopySuccessInfo").slideDown(300)
            // $("#CopySuccessInfo").removeClass("animate__animated animate__fadeIn");
            // $("#CopySuccessInfo").addClass("animate__animated animate__fadeOut");
        }, 1500);
        setTimeout(function () {
            $("#CopySuccessInfo").slideUp(300)
            // $("#CopySuccessInfo").removeClass("animate__animated animate__fadeOut");
        }, 2000)
    });
    // 添加图片样式
    $("img").attr("title", "点击可放大观察图片").addClass("ml-3");
    $("img").prev("p").addClass("ml-3");
    // 设置背景颜色
    bgcolor = localStorage.getItem("bgOption");
    $("body").css("background", bgcolor);
    if (bgcolor != "#ffffff") {
        $("p,td,div,th").css("color", "white");
    }
    else {
        $("p").css("color", "black")
    }

}

