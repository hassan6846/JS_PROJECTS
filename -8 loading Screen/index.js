$("body").css("overflow", "hidden");
window.addEventListener("load", function () {
  var loadingScreen = document.getElementById("loading-screen");

  setTimeout(() => {
    loadingScreen.style.display = "none";

    const body = document.querySelector("body");
    $(body).css("overflow", "auto");
  }, 3000);
});
