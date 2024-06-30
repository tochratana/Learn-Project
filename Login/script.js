// design for login

$(document).ready(function () {
  $(":text").focus(function () {
    $(".handl").css({
      transform: "rotate(0deg)",
      right: "57.5%",
      height: "50px",
      width: "45px",
      top: "163px",
    });
    $(".handr").css({
      transform: "rotate(0deg)",
      left: "57.5%",
      height: "50px",
      width: "45px",
      top: "163px",
    });
    $(".eyeball1").css({
      top: "24px",
      left: "11px",
    });
    $(".eyeball2").css({
      top: "24px",
      left: "15px",
    });
  });
  $(":password").focus(function () {
    $(".eyeball1").css({
      top: "10px",
      left: "10px",
    });
    $(".eyeball2").css({
      top: "10px",
      left: "10px",
    });
    $(".handl").css({
      transform: "rotate(-150deg)",
      top: "92px",
      right: "51.5%",
      height: "90px",
      width: "40px",
    });
    $(".handr").css({
      transform: "rotate(150deg)",
      top: "92px",
      left: "51.7%",
      height: "90px",
      width: "40px",
    });
  });
});
