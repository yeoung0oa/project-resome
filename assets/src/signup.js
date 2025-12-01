document.getElementById("checkBtn").addEventListener("click", function () {
  const guide = document.getElementById("idGuide");

  guide.textContent = "사용가능한 ID입니다!";
  guide.classList.add("guide-success");
});

const genderButtons = document.querySelectorAll(".gender-box button");

genderButtons.forEach(button => {
  button.addEventListener("click", () => {
    // 모든 버튼 active 제거
    genderButtons.forEach(btn => btn.classList.remove("active"));

    // 클릭한 버튼에 active 추가
    button.classList.add("active");
  });
});