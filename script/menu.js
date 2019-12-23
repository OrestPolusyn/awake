"use stcrict";

function openNavbar() {
    document.querySelector("#navbar").style.width = "100%";
    document.querySelectorAll(".open")[0].style.display = 0;
    $(".mobile-menu").css("display","flex");

  }
  function closeNavbar() {
    document.querySelector("#navbar").style.width = "0";
    document.querySelectorAll(".open")[0].style.opacity = 1;
  }

  