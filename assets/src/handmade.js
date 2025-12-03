//Heart Click
const wishBtn = document.querySelectorAll('.card-inner .add-to-wish');
wishBtn.forEach(item => {
  item.addEventListener('click', ()=>{
    item.classList.toggle('active');
  });
});

//movie slider
document.querySelectorAll('.swipers').forEach(function(elem) {
  new Swiper(elem, {
    slidesPerView: 3,
    spaceBetween: -10,
    freeMode: true,
  });
});



//icon click
$(document).ready(function () {

  $(".made-icons .box").click(function (e) {
    e.preventDefault();

    const target = $(this).data("category"); 
    const $targetSection = $("#" + target); 

    $(".made-icons .box").removeClass("active");
    $(this).addClass("active");

    $(".category-content").removeClass("active").hide();
    $targetSection.addClass("active").show();

    $("html, body").animate({
      scrollTop: $targetSection.offset().top - 80
    }, 300);
  });

});
