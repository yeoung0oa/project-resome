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
$(document).on('click', '.select_cus .trigger', function(e) {
  const $select = $(this).closest('.select_cus');
  const $options = $select.find('.option');

  $('.select_cus').not($select).removeClass('active').find('.option').hide();

  $select.toggleClass('active');
  $options.toggle();

  e.stopPropagation();
});

$(document).on('click', '.select_cus .option li', function(e) {
  const $li = $(this);
  const $select = $li.closest('.select_cus');
  const value = $li.data('value');
  const text = $li.text();

  $select.find('.trigger_txt').text(text);
  $select.find('.opt_val').val(value);

  if (value) {
    $select.addClass('select');
  } else {
    $select.removeClass('select');
  }

  $select.removeClass('active').find('.option').hide();
  e.stopPropagation();
});

$(document).on('click', function() {
  $('.select_cus').removeClass('active').find('.option').hide();
});

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

// 결제 버튼 활성화 _____________________________________________________
function checkReserveConditions() {
  const nameInput = $('.reserve-s1 input[type="text"]').val().trim();

  const adult = parseInt($('.reserve-s2 .qty-wrap:eq(0) input').val());
  const kid = parseInt($('.reserve-s2 .qty-wrap:eq(1) input').val());

  const requiredOption = $('.reserve-s4 .select_cus .opt_val').first().val();

  const $button = $('.button2');

  const cond1 = nameInput.length > 0;
  const cond2 = !(adult === 0 && kid === 0);
  const cond3 = requiredOption !== "";

  if (cond1 && cond2 && cond3) {
    $button.prop('disabled', false).addClass('active');
  } else {
    $button.prop('disabled', true).removeClass('active');
  }
}

$(document).ready(function () {
  $('.reserve-s1 input[type="text"]').on('input', checkReserveConditions);

  $('.reserve-s2 .qty input').on('input', checkReserveConditions);
  $('.reserve-s2 .qty .plus, .reserve-s2 .qty .minus').on('click', function () {
    setTimeout(checkReserveConditions, 10); // 값 업데이트 후 체크
  });

  $(document).on('click', '.select_cus .option li', function () {
    setTimeout(checkReserveConditions, 10);
  });

  checkReserveConditions();
});
