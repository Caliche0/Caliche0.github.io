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

document.getElementById("sun").onclick = function () {
  document.getElementById("document").classList.remove("darkmode");
  document.getElementById("moon").classList.remove("active");
  document.getElementById("sun").classList.add("active");
};

document.getElementById("moon").onclick = function () {
  document.getElementById("document").classList.add("darkmode");
  document.getElementById("sun").classList.remove("active");
  document.getElementById("moon").classList.add("active");
};
