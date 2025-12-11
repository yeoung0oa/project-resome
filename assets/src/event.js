// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 1,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


//Heart Click
const wishBtn = document.querySelectorAll('.card-inner .add-to-wish');
wishBtn.forEach(item => {
  item.addEventListener('click', ()=>{
    item.classList.toggle('active');
  });
});

//스크롤
const headerHeight = 70;

document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      const top = targetEl.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});