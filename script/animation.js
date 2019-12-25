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
    $(".overlay").css("position", "fixed")
});

$(".btn-conect").click(function () {
    $(".overlay").show();
    $(".agr-img").hide();
});

$(".res-img").click(function () {
    $(".overlay").css("display", "none");
    $(".popup").css("display", "block");
    $(".send-result").css("display", "none");

});

$(".btn-send").click(function () {
    $(".popup").hide();
    $(".send-result").show();
    $(".overlay").show();
    $(".overlay").css("position", "fixed");
    $(".agr-img").hide();
    $(".confir")[0].reset();
    $(".pop-confir")[0].reset();
});


$(".btn-more").click(function () {
    $(".rpblock").show();
    $(".last-block").css("margin-bottom", "46px");
    $(".btn-more").hide();
});

$(".overlay-img").click(function () {
    $(".overlay-img").hide();
    $(".overlay-img img").css("display", "none");
});

$("a#check").click(function () {
    $(".agreement").show();
    $(".popup").hide();
    $(".res-img").hide();
    $(".agr-img").show();
});

$(".agr-img").click(function () {
    $(".agreement").hide();
    $(".popup").show();
    $(".agr-img").hide();
    $(".res-img").show();
});

$(".columns img").click(function () {
    $(".overlay-img").show();
})

$(".cara").click(function () {
    $("#cara_presentation").css("display", "block");
});

$(".ohueno").click(function () {
   $("#ohueno").css("display", "block");
})

$(".salads").click(function () {
    $("#salads").css("display", "block");
});

$(".nirvana").click(function () {
    $("#nirvana").css("display", "block");
});

$(".sushi").click(function () {
    $("#sushi").css("display", "block");
});


function clickCheck() {
    const checkBox = document.querySelectorAll("#check");
    const send = document.querySelectorAll(".btn-send");
    if (checkBox[0].checked == true) {
        send[0].disabled = false;
    } else {
        send[0].disabled = true;
    }
}

function clickCheckBtm() {
    const checkBox = document.querySelectorAll("#check");
    const send = document.querySelectorAll(".btn-send");
    if (checkBox[2].checked == true) {
        send[1].disabled = false;
    } else {
        send[1].disabled = true;
    }
}

