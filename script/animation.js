"use stcrict";

$(".hidden-info").hide();
$(".block-info").click(function () {
    $(this).siblings(".hidden-info").slideToggle("slow");
});
$(".block-info").click(function () {
    $(this).toggleClass('up');
});
$(".btn-order").click(function () {
    $(".overlay").show();
    $('html, body').animate({ scrollTop: 0 }, 50);
    return false;
});
$(".btn-conect").click(function () {
    $(".overlay").show();
    $('html, body').animate({ scrollTop: 0 }, 50);
    return false;
})
$(".overlay img").click(function () {
    $(".overlay").hide()
});
$(".btn-send").click(function () {
    $(".popup").hide();
    $(".send-result").show();
    $(".overlay").show();
    $('html, body').animate({ scrollTop: 0 }, 50);
    return false;
});
$(".btn-more").click(function () {
    $(".rpblock").show();
    $(".last-block").css("margin-bottom", "46px");
    $(".btn-more").hide();
});


function clickCheck() {
    const  checkBox = document.querySelectorAll("#check");
    const send = document.querySelectorAll(".btn-send");
    if (checkBox[0].checked == true ){
        send[0].disabled = false;
    } else {
        send[0].disabled = true;
    }
}

function clickCheckBtm() {
    const  checkBox = document.querySelectorAll("#check");
    const send = document.querySelectorAll(".btn-send");
    if (checkBox[1].checked == true ){
        send[1].disabled = false;
    } else {
        send[1].disabled = true;
    }
}
