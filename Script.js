document.addEventListener("DOMContentLoaded", function () {
  const boutonsAcheter = document.querySelectorAll(".acheter-btn");

  boutonsAcheter.forEach(function (bouton) {
    bouton.addEventListener("click", function () {
      alert("Merci pour votre achat !");
    });
  });
});