

/* swiper */
document.querySelectorAll('.mySwiper').forEach(function(elem) {
  new Swiper(elem, {
    slidesPerView: 3,
    spaceBetween: -10,
    freeMode: true,
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
$(document).ready(function () {

    $(".category-content .card-row").hide();

    $(".morebtn").click(function () {
      $(".category-content .card-row").slideDown();
        $(this).hide();
    });
  });


//icon click
$(document).ready(function () {

  $(".icons .box").click(function (e) {
    e.preventDefault();

    const target = $(this).data("category"); 
    const $targetSection = $("#" + target); 
    const headerHeight = $(".top").outerHeight();

    $(".icons .box").removeClass("active");
    $(this).addClass("active");

    $(".category-content").removeClass("active").hide();
    $targetSection.addClass("active").show();

    $("html, body").animate({
      scrollTop: $targetSection.offset().top - headerHeight - 80
    }, 300);
  });

});
