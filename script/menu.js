"use stcrict";

if ($(window).width() < 767) {
  
  function openNavbar() {
    document.querySelector("#navbar").style.width = "100%";
    $(".open").css("display", "none");
    $(".mobile-menu").css("display", "flex");
  }


  function closeNavbar() {
    document.querySelector("#navbar").style.width = "0";
    $(".open").css("display", "block");

  }
  
  

  $(".links a").click(function () {
    document.querySelector(".mobile-menu").style.width = "0";
    $(".open").css("display", "block");
  });
}

function closeMail() {
  $(".overlay").css("display", "none");
}


function closeAgr() {
  $(".agreement").css("display", "none");
  $(".popup").css("display", "flex");
}