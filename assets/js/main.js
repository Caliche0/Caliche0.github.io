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
