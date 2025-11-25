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
});
