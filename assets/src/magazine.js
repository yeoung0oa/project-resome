import { bus } from '/assets/common.js';

$(function () {
  $(".trigger_btn").on("click", function () {
    const card = $(this).closest(".magazine-card");
    const sns = card.find(".magazine-sns");
    const overlay = card.find(".overlay");
    const btns = card.find(".sns-btn");
    const isOpen = $(this).hasClass("active");

    $(".trigger_btn").not(this).removeClass("active");
    $(".magazine-sns").not(sns).removeClass("active");
    $(".overlay").not(overlay).removeClass("active");
    $(".sns-btn").not(btns).animate({ top: "0" }, 0);

    $(this).toggleClass("active");
    sns.toggleClass("active");
    overlay.toggleClass("active");

    if (!isOpen) {
      setTimeout(() => {
        btns.eq(0).animate({ top: "0" }, 250);
        btns.eq(1).animate({ top: "60px" }, 350);
        btns.eq(2).animate({ top: "120px" }, 450);
      }, 50);
    } else {
      btns.animate({ top: "0" }, 200);
    }
  });

  $(".overlay").on("click", function () {
    const card = $(this).closest(".magazine-card");
    const trigger = card.find(".trigger_btn");
    const sns = card.find(".magazine-sns");
    const btns = card.find(".sns-btn");

    trigger.removeClass("active");
    sns.removeClass("active");
    $(this).removeClass("active");
    btns.animate({ top: "0" }, 200);
  });

});

/* 정렬 */
const sortSelect = document.getElementById('select');
const list = document.querySelector('.magazine-list');

sortSelect.addEventListener('change', () => {
  const type = sortSelect.value;

  const items = Array.from(list.querySelectorAll('.magazine'));

  const sorted = items.sort((a, b) => {
    const dateA = new Date(a.dataset.date);
    const dateB = new Date(b.dataset.date);

    return type === 'new' ? dateB - dateA : dateA - dateB;
  });

  sorted.forEach(item => list.appendChild(item));
});