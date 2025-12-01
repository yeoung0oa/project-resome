// tabmenu______________________________________________________________
$(document).ready(function(){

  $(".btn li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");

    let result = $(this).attr("data-alt");
    $(".tab-contents div").removeClass("active");
    $("#"+result).addClass("active").hide().fadeIn();
  });

});


// swiper_____________________________________________________________
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 1,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// select box________________________________________________________
$(window).on('load', function() {
    selectCus();
})

function selectCus() {
  $('.select_cus').each(function() {
    const $select = $(this);
    const $selectTrigger = $select.find('.trigger');
    const $options = $select.find('.option');
    const $hiddenInput = $select.find('.opt_val');

    $selectTrigger.click(function() {
      $options.toggle();
      $select.toggleClass('active');
      $('.select_cus').not($select).find('.option').hide();
      $('.select_cus').not($select).removeClass('active');
    });

    $options.find('li').click(function() {
      const value = $(this).data('value');
      const text = $(this).text();
      $select.find('.trigger_txt').text(text);
      $options.hide();
      $select.removeClass('active');
      if (value != '') {
        $select.addClass('select')
      } else {
        $select.removeClass('select')
      }
      $hiddenInput.val(value);
    });
  });

  $(document).click(function(e) {
    if (!$(e.target).closest('.select_cus').length) {
      $('.select_cus .option').hide();
      $('.select_cus').removeClass('active');
    }
  });
}

//숫자증감__________________________________________________________________
const qtys = document.querySelectorAll('.qty');
qtys.forEach((qtys)=>{
  const minusBtn =qtys.querySelector('.minus');
  const plusBtn =qtys.querySelector('.plus');
  const input =qtys.querySelector('.qty input');

  minusBtn.addEventListener('click', ()=>{
    if(input.value >0){
      input.value = parseInt(input.value)-1;
    };
    if(input.value==0){
      minusBtn.style.cssText = 'opacity:0.5; background-color:#ddd;';
    }else{
      minusBtn.style.cssText = 'opacity:1; background-color:#fff;';
    }
  });

  plusBtn.addEventListener('click', ()=>{
    input.value = parseInt(input.value)+1;
    if(input.value!==0){
      minusBtn.style.cssText = 'opacity:1; background-color:#fff;';
    }
  });

});