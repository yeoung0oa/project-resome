<<<<<<< Updated upstream

$(document).ready(function () {
  $(".popular .new-group-list .card2").hide().slice(0, 3).show();
  $(".nearby  .new-group-list .card2").hide().slice(0, 3).show();

  $(".popular .btn-view-more").click(function () {
    $(".popular .new-group-list .card2:hidden").slice(0, 1).slideDown();
    if ($(".popular .new-group-list .card2:hidden").length === 0) {
      $(this).hide();
    }
  });

  $(".nearby .btn-view-more").click(function () {
    $(".nearby .new-group-list .card2:hidden").slice(0, 1).slideDown();
    if ($(".nearby .new-group-list .card2:hidden").length === 0) {
      $(this).hide();
    }
  });


let quick = true;

$(".trigger_btn").click(function () {
  $(this).toggleClass("active");

  const $card   = $(this).closest(".card2");
  const $avatar = $card.find(".card-avatar");
  const $icons  = $card.find(".card-icon li");

  if (quick) {

    $avatar.addClass("active");  // 먼저 보이게 하고

    $card.find(".icon3").stop().animate({ right: "5rem" }, 300);
    $card.find(".icon2").stop().animate({ right: "3rem" }, 300);
    $card.find(".icon1").stop().animate({ right: "1rem" }, 300);

    quick = false;

  } else {

    $card.find(".icon1").stop().animate({ right: "0rem" }, 300);
    $card.find(".icon2").stop().animate({ right: "0rem" }, 300);
    $card.find(".icon3").stop().animate({ right: "0rem" }, 300, function() {

    $avatar.removeClass("active");
    });

    quick = true;
  }
});


  $(".add-to-wish").on("click", function (e) {
    e.stopPropagation();

    const imgEl = $(this).find("img");

    const isPink = imgEl.attr("src").includes("hearticon-1.png");
    const newSrc = isPink
      ? "image/community/hearticon.png" 
      : "image/community/hearticon-1.png";    // 핑크 하트로 변경

    // 자연스러운 fade 전환
    imgEl.stop(true, true).fadeOut(120, function () {
      imgEl.attr("src", newSrc).fadeIn(120);
    });
  });





});
=======

$(document).ready(function () {
  $(".popular .new-group-list .card2").hide().slice(0, 3).show();
  $(".nearby  .new-group-list .card2").hide().slice(0, 3).show();

  $(".popular .btn-view-more").click(function () {
    $(".popular .new-group-list .card2:hidden").slice(0, 1).slideDown();
    if ($(".popular .new-group-list .card2:hidden").length === 0) {
      $(this).hide();
    }
  });

  $(".nearby .btn-view-more").click(function () {
    $(".nearby .new-group-list .card2:hidden").slice(0, 1).slideDown();
    if ($(".nearby .new-group-list .card2:hidden").length === 0) {
      $(this).hide();
    }
  });


let quick = true;

$(".trigger_btn").click(function () {
  $(this).toggleClass("active");

  const $card   = $(this).closest(".card2");
  const $avatar = $card.find(".card-avatar");
  const $icons  = $card.find(".card-icon li");

  if (quick) {

    $avatar.addClass("active");  // 먼저 보이게 하고

    $card.find(".icon3").stop().animate({ right: "5rem" }, 300);
    $card.find(".icon2").stop().animate({ right: "3rem" }, 300);
    $card.find(".icon1").stop().animate({ right: "1rem" }, 300);

    quick = false;

  } else {

    $card.find(".icon1").stop().animate({ right: "0rem" }, 300);
    $card.find(".icon2").stop().animate({ right: "0rem" }, 300);
    $card.find(".icon3").stop().animate({ right: "0rem" }, 300, function() {

    $avatar.removeClass("active");
    });

    quick = true;
  }
});


  $(".add-to-wish").on("click", function (e) {
    e.stopPropagation();

    const imgEl = $(this).find("img");

    const isPink = imgEl.attr("src").includes("hearticon-1.png");
    const newSrc = isPink
      ? "image/community/hearticon.png" 
      : "image/community/hearticon-1.png";    // 핑크 하트로 변경

    // 자연스러운 fade 전환
    imgEl.stop(true, true).fadeOut(120, function () {
      imgEl.attr("src", newSrc).fadeIn(120);
    });
  });





});
>>>>>>> Stashed changes
