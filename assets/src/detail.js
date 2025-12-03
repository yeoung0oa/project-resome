export default {
  init(appEl, { Common, bus }) {

    // 이미지 교체
    $(".thumbs img").on("click", function () {
      $(this).addClass("active").siblings().removeClass("active");
      $("#largeImg img").attr("src", $(this).attr("src")).hide().fadeIn();
    });

    // 모달
    $(".open-modal").on("click", function (e) {
      e.preventDefault();

      const imgSrc = $(this).data("img");
      const type = $(this).data("type");

      $("#modal-img").attr("src", imgSrc);
      $("#modal-signup-btn").hide();
      $("#modal-login-btn").hide();

      if (type === "signup") $("#modal-signup-btn").show();
      if (type === "login") $("#modal-login-btn").show();

      $("#modal").css("display", "flex");
    });

    $("#modal").on("click", function (e) {
      if ($(e.target).is("#modal")) $("#modal").hide();
    });

    //review
    document.querySelectorAll('.swiper').forEach(function(elem) {
      new Swiper(elem, {
        slidesPerView: 1.3,
        spaceBetween: 20,
      });
    });

    // wish 버튼
    document.querySelectorAll(".add-to-wish").forEach(btn => {
      btn.addEventListener("click", () => btn.classList.toggle("active"));
    });

    // class-toggle
    $(".class-toggle").on("click", function (e) {
      e.preventDefault();
      $(this).nextAll(".class-txt").slideToggle(300);
      $(this).find("img").toggleClass("rotate");
    });

    // Infinite slide
    function makeInfiniteSlide(selector, speed = 1) {
      const el = document.querySelector(selector);
      if (!el) return;

      const clone = el.cloneNode(true);
      el.after(clone);

      let pos = 0;

      function loop() {
        pos -= speed;
        if (Math.abs(pos) >= el.offsetWidth) pos = 0;

        el.style.transform = `translateX(${pos}px)`;
        clone.style.transform = `translateX(${pos + el.offsetWidth}px)`;

        requestAnimationFrame(loop);
      }

      [el, clone].forEach(item => {
        item.addEventListener("mouseenter", () => speed = 0);
        item.addEventListener("mouseleave", () => speed = 1);
      });

      loop();
    }

    makeInfiniteSlide(".right-slide");
    makeInfiniteSlide(".left-slide");

    // More button
    $(".cards-1 .card-row-1").hide().slice(0, 1).show();

    $(".morebtn").on("click", function () {
      $(".cards-1 .card-row-1:hidden").slice(0, 1).slideDown();
      if ($(".cards-1 .card-row-1:hidden").length === 0) $(this).hide();
    });

  },

  dispose() {

  }

};
