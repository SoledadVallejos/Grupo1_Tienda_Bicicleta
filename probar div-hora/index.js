function queHaciendo() {
    let saludo;
    let hora = new Date().getHours();
    if (hora >= 0 && hora < 6) {
        saludo = "😴 Buenas madrugadas";
    } else if (hora >= 6 && hora < 12) {
        saludo = "☕ Buen día!";
    } else if (hora >= 12 && hora < 19) {
        saludo = "😎 Buenas tardes!";
    } else if (hora >= 19 && hora < 0) {
        saludo = "🌙 Buenas noches!";
    }
    document.getElementById("demo").innerHTML = saludo;
}

document.getElementById("cambiar").innerHTML = "Esto si que es otra onda";
document.getElementById("cabecera").innerHTML = "Hola Marte!!!!";