const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true, //인디케이터(블릿) 클릭 활성화
  },
  autoplay: {
    delay: 3000,
  },
});