(function () {
  var actualizarHora = function () {
    var fecha = new Date();
    var año = fecha.getFullYear();
    var paño = document.getElementById("year");
    paño.textContent = año;
  };

  actualizarHora();
})();

function contacting() {
  alert("I will get in contact whit you as soon as posible");
}

document.getElementById("id-sun").onclick = function () {
  document.getElementById("document").classList.remove("darkmode");
  document.getElementById("id-moon").classList.remove("active");
  document.getElementById("id-sun").classList.add("active");
};

document.getElementById("id-moon").onclick = function () {
  document.getElementById("document").classList.add("darkmode");
  document.getElementById("id-sun").classList.remove("active");
  document.getElementById("id-moon").classList.add("active");
};
