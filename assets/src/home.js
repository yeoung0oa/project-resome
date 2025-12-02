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

/* s0-slide */
$(document).ready(function(){

  let slideContainer = $('.slide'),
    slideWidth = slideContainer.width(),
    slideHeight = slideContainer.height(),
    slideCount = $('.slide-items li').length,
    slideItemsWidth = slideWidth * slideCount,
    slidePrev = slideContainer.find(".control .prev"),
    slideNext = slideContainer.find(".control .next");

  let pageNumber = 0;

  $(".control-page span:nth-child(2)").text(slideCount);
  $(".control-page span:nth-child(1)").text(pageNumber+1);

  $('.slide-item').css({'width': slideWidth, 'height': slideHeight});
  $('.slide-items').css({'width': slideItemsWidth, 'height': slideHeight, 'position':'relative', 'left': 0});
  $('.slide-item:last-child').prependTo($('.slide-items'));
  $('.slide-items').css({'margin-left': -slideWidth});

  function slideLeft(){
    $('.slide-items').stop().animate({'left': -slideWidth}, 500, function(){
      $('.slide-items').css({'left': 0});
      $('.slide-item:first-child').appendTo('.slide-items');

      pageNumber++;
      if(pageNumber > slideCount-1){
        pageNumber = 0;
      }
      $(".control-page span:nth-child(1)").text(pageNumber+1);
    });
  };

  function slideRight(){
    $('.slide-items').stop().animate({left: slideWidth}, 500, function(){
      $('.slide-items').css({'left': 0});
      $('.slide-item:last-child').prependTo('.slide-items');
    });

    pageNumber--;
    if(pageNumber < 0){
      pageNumber = slideCount-1;
    }
    $(".control-page span:nth-child(1)").text(pageNumber+1);
  };

  let slideAuto = setInterval(slideLeft, 4000);

  slidePrev.on('click', function(e){
    e.preventDefault();
    clearInterval(slideAuto); 
    slideRight();
  });

  slideNext.on('click', function(e){
    e.preventDefault();
    clearInterval(slideAuto);
    slideLeft();
  });

  /* 하트 클릭 */
  const wishBtn = document.querySelectorAll('.s1-card-img .add-to-wish');
  wishBtn.forEach(item => {
    item.addEventListener('click', ()=>{
      item.classList.toggle('active');
    });
  });
  /* 하트 클릭2 */
  const placeBtn = document.querySelectorAll('.place_icon');
  placeBtn.forEach(item => {
    item.addEventListener('click', ()=>{
      item.classList.toggle('active');
    });
  });
  /* 하트클릭3 */
  const communityBtn = document.querySelectorAll('.swiper3 .card .card-inner .add-to-wish');
  communityBtn.forEach(item => {
    item.addEventListener('click', ()=>{
      item.classList.toggle('active');
    });
  });
  /* 하트클릭4 */
  const storyBtn = document.querySelectorAll('.best-card img:nth-of-type(2)');
  storyBtn.forEach(item => {
    item.addEventListener('click', ()=>{
      item.classList.toggle('active');
    });
  });

  /* 장소 탭메뉴 */
  $(".swiper2").not(":last").click(function(){
    $(this).addClass("active").siblings().removeClass("active");

    let result = $(this).attr("data-alt");
    $(".place-tab-contents > div").removeClass("active");
    $("#"+result).addClass("active").hide().fadeIn();
  });

  /* BEST 탭메뉴 */
  $(".best-list").click(function(){
    $(this).addClass("active").siblings().removeClass("active");

    let result = $(this).attr("data-alt");
    $(".best-container .best-cards").removeClass("active");
    $("#"+result).addClass("active").hide().fadeIn();
  });

});
