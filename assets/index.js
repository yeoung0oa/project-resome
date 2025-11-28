$(document).ready(function(){

  $(".btn").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $("aside").stop(true, true).fadeIn();
      $(".back").stop(true, true).fadeIn();
    } else {
      $("aside").stop(true, true).fadeOut();
      $(".back").stop(true, true).fadeOut();
      $(".sub").slideUp();
      $(".main").removeClass("open");
    }
  });

  /* 백그라운드 클릭 시 닫기 */
  $(".back").click(function () {
    $(".btn").removeClass("active");
    $("aside").fadeOut();
    $(".back").fadeOut();
    $(".sub").slideUp();
    $(".main").removeClass("open");
  });

  /* 토글 메뉴 */
  $(".header-gnb > .main > a").click(function (e) {
    e.preventDefault(); 

    const parentLi = $(this).parent(".main");

    if (parentLi.hasClass("open")) {
      parentLi.removeClass("open");
      parentLi.find(".sub").stop(true, true).slideUp();
    } else {
      $(".main.open").removeClass("open").find(".sub").slideUp();
      parentLi.addClass("open");
      parentLi.find(".sub").stop(true, true).slideDown();
    }
  });

  /* 이동시 메뉴닫기 */
  $("aside").on("click", "a[data-link]", function () {
    // 1. 햄버거 버튼 모션 초기화
    $(".btn").removeClass("active");
    
    // 2. 메뉴와 배경 숨기기 (fadeOut 사용!)
    $("aside").fadeOut();
    $(".back").fadeOut();

    // 3. 열려있던 서브메뉴들도 초기화
    $(".sub").slideUp();
    $(".main").removeClass("open");
  });
  
});