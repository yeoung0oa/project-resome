
$(document).ready(function () {

    function updateSelectAllState() {
        const total = $(".wl-item").length;
        const selected = $(".wl-item[data-selected='true']").length;
        const all = total > 0 && total === selected;

        $(".wl-selectall").attr("data-all", all ? "true" : "false");
    }

    updateSelectAllState();

    $(".wl-itemcheck").on("click", function (e) {
        e.stopPropagation();

        const $button = $(this);
        const $item = $button.closest(".wl-item");
        const isSelected = $item.attr("data-selected") === "true";
        const newState = isSelected ? "false" : "true";

        $item.attr("data-selected", newState);
        $button.attr("aria-pressed", newState); 
        
        updateSelectAllState();
    });

    $(".wl-selectall").on("click", function () {
        const isAll = $(this).attr("data-all") === "true";
        const newState = isAll ? "false" : "true";

        $(".wl-item").attr("data-selected", newState);
        $(".wl-itemcheck").attr("aria-pressed", newState); 

        $(this).attr("data-all", newState);
    });

    $(".wl-delete").on("click", function () {
        const $selectedItems = $(".wl-item[data-selected='true']");

        if ($selectedItems.length === 0) {
            alert("삭제할 항목을 선택해주세요.");
            return;
        }

        $selectedItems.slideUp(200, function () {
            $(this).remove();
            updateSelectAllState(); 
        });
    });
});