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

