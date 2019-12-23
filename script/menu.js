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

  