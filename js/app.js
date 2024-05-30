document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("changeBackgroundBtn");

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  button.addEventListener("click", function (changeBackground) {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
  });
});
