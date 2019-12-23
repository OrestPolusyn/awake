"use stcrict";

function openNavbar() {
    document.querySelector("#navbar").style.width = "100%";
    $(".open").css("display","none");
    $(".mobile-menu").css("display","flex");

}


function closeNavbar() {
    document.querySelector("#navbar").style.width = "0";
    $(".open").css("display","block");
}

function closeMail() {
  $(".overlay").css("display","none");
}

$(".links a").click(function () {
  document.querySelector("#navbar").style.width = "0";
  $(".open").css("display","block");
});