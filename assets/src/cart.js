$(document).ready(function(){

  /* 1) 첫 번째 아이템 선택 상태로 */
  $(".wish-item:first .wish-check").addClass("on");

  /* 2) 각 체크박스 토글 */
  $(".wish-check").on("click", function(e){
    e.stopPropagation();
    $(this).toggleClass("on");
  });

  /* 3) 선택삭제 → 선택된 아이템 제거 */
  $(".wish-delete").on("click", function(){
    $(".wish-check.on").each(function(){
      $(this).closest(".wish-item").slideUp(200, function(){
        $(this).remove();
      });
    });
  });

});
