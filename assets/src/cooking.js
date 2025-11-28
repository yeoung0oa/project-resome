import { bus } from '/assets/common.js';

/* swiper */
export default{
  init(root){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  },
  dispose(root){}
};


//Heart Click
const wishBtn = document.querySelectorAll('.card-inner .add-to-wish');
wishBtn.forEach(item => {
  item.addEventListener('click', ()=>{
    item.classList.toggle('active');
  });
});

//Morebtn
$(document).ready(function () {

    $(".cards .card-row").hide();
    $(".cards .card-row").slice(0, 3).show();

    $(".morebtn").click(function () {
      $(".cards .card-row:hidden").slice(0, 1).slideDown();

      if ($(".cards .card-row:hidden").length === 0) {
        $(this).hide();
      }
    });
  });


//icon click
$(document).ready(function () {

  $(".icons .box").click(function (e) {
    e.preventDefault();

    const target = $(this).data("category"); 
    const $targetSection = $("#" + target); 

    $(".icons .box").removeClass("active");
    $(this).addClass("active");

    $(".category-content").removeClass("active").hide();
    $targetSection.addClass("active").show();

    $("html, body").animate({
      scrollTop: $targetSection.offset().top - 80
    }, 300);
  });

});
