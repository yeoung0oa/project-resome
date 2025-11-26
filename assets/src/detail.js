// 이미지 교체
$(document).ready(function(){

  $(".thumbs img").click(function(){

    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let imageSrc = $(this).attr("src");
    $("#largeImg img").attr({"src":imageSrc}).hide().fadeIn();
  });

});

//modal
$(document).ready(function () {

  $(".open-modal").on("click", function (e) {
    e.preventDefault();

    let imgSrc = $(this).data("img");
    let type = $(this).data("type");
    $("#modal-img").attr("src", imgSrc);

    $("#modal-signup-btn").hide();
    $("#modal-login-btn").hide();

    if (type === "signup") {
      $("#modal-signup-btn").show();
    } else if (type === "login") {
      $("#modal-login-btn").show();
    }

    $("#modal").css("display", "flex");
  });

  $("#modal").on("click", function (e) {
    if ($(e.target).is("#modal")) {
      $("#modal").hide();
    }
  });
});


//Heart Click
const wishBtn = document.querySelectorAll('.card-inner .add-to-wish');
wishBtn.forEach(item => {
  item.addEventListener('click', ()=>{
    item.classList.toggle('active');
  });
});

//Morebtn
function makeInfiniteSlide(selector, speed = 1) {
  const el = document.querySelector(selector);
  const clone = el.cloneNode(true);
  el.after(clone);

  let pos = 0;

  function loop() {
    pos -= speed;

    if (Math.abs(pos) >= el.offsetWidth) {
      pos = 0;
    }

    el.style.transform = `translateX(${pos}px)`;
    clone.style.transform = `translateX(${pos + el.offsetWidth}px)`;

    requestAnimationFrame(loop);
  }

  // hover
  [el, clone].forEach(item => {
    item.addEventListener('mouseenter', ()=> speed = 0);
    item.addEventListener('mouseleave', ()=> speed = 1);
  });

  loop();
}

makeInfiniteSlide(".right-slide", 1);
makeInfiniteSlide(".left-slide", 1);


//class-toggle
$(document).ready(function () {
  $(".class-toggle").on("click", function (e) {
    e.preventDefault(); // 🔥 a 태그 기본 클릭 막기

    const content = $(this).nextAll(".class-txt"); 
    content.slideToggle(300); 

    // 🔽 화살표 회전 효과
    $(this).find("img").toggleClass("rotate");
  });
});

//Morebtn
$(document).ready(function () {

    $(".cards .card-row").hide();
    $(".cards .card-row").slice(0, 1).show();

    $(".morebtn").click(function () {
      $(".cards .card-row:hidden").slice(0, 1).slideDown();

      if ($(".cards .card-row:hidden").length === 0) {
        $(this).hide();
      }
    });
  });