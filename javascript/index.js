function toggleMenu() {
  const toggle = document.querySelector(".toggle");
  const nav = document.querySelector(".nav-ul");
  toggle.classList.toggle("active");
  nav.classList.toggle("active");
}

//saludar dependiendo la hora
function queHaciendo() {
  let saludo;
  let hora = new Date().getHours();
  if (hora >= 0 && hora < 6) {
    saludo = "😴 Buenas madrugadas";
  } else if (hora >= 6 && hora < 12) {
    saludo = "☕ Buen día!";
  } else if (hora >= 12 && hora < 19) {
    saludo = "😎 Buenas tardes!";
  } else {
    saludo = "🌙 Buenas noches!";
  }
  document.getElementById("demo").innerHTML = saludo;
}
