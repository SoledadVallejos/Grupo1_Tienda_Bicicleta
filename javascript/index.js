function toggleMenu() {
    const toggle = document.querySelector(".toggle");
    const nav = document.querySelector(".nav-ul");
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
}

//el prompt es a modo de prueba. Introducir nombre del usuario en el saludo.

//let nombre = prompt("Nombre: ");

// function queHaciendo() {
//     let saludo;
//     let hora = new Date().getHours();
//     if (hora >= 0 && hora < 6) {
//         saludo = nombre + "😴 Buenas madrugadas";
//     } else if (hora >= 6 && hora < 12) {
//         saludo = nombre + "☕ Buen día!";
//     } else if (hora >= 12 && hora < 19) {
//         saludo = nombre + "😎 Buenas tardes!";
//     } else {
//         saludo = nombre + "🌙 Buenas noches!";
//     }
//     document.getElementById("demo").innerHTML = saludo;
// }

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

//boton ir hasta arriba
window.onload = () => {
    const buttonDown = document.getElementById("button-down");
    buttonDown.addEventListener("click", () => {
        window.scrollTo(0, 0);
    });
};

//cupon
Swal.fire({
    title: 'Custom width, padding, background.',
    width: 600,
    padding: '3em',
    background: '#fff url(/images/trees.png)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `
})


/* funcion para capturar input formulario */
const botonEnviar = document.getElementById("botonenviar")
const obtenerDatos= ()=>{
    let nombre = document.getElementById("nombre4")
    let email = document.getElementById("email4")
    let datos = {
        "Nombre": nombre.value,
        "Email": email.value
    }
    localStorage.setItem("datos",JSON.stringify(datos))
}
//botonEnviar.addEventListener("click", obtenerDatos)

/* Validacion formulario */

const formulario = document.getElementById("form")
const validar = (e)=>{
    let nombre = document.getElementById("nombre4")
    let email = document.getElementById("email4")
    if (nombre.value == "" || email.value == "") {
        e.preventDefault()
        e.stopPropagation()
        alert("los campos no pueden estar vacios")
    }else{
        obtenerDatos()
    }
}
formulario.addEventListener("submit", validar)
function tocame() {
    let random = Math.floor(Math.random() * 6);
    let cupon;
    switch (random) {
        case 1:
            cupon = "5HOTSALE para obtener un 5% de descuento";
            break;
        case 2:
            cupon = "10HOTSALE para obtener un 10% de descuento";
            break;
        case 3:
            cupon = "15HOTSALE para obtener un 15% de descuento";
            break;
        case 4:
            cupon = "20HOTSALE para obtener un 20% de descuento";
            break;
        case 5:
            cupon = "25HOTSALE para obtener un 25% de descuento";
            break;
        default:
            cupon = "Segui participando!";
            break;
    }
    if (cupon === "Segui participando!") {
        Swal.fire({
            title: "Suerte en la proxima, " + cupon,
            width: 500,
            padding: "3em",
            background: "#fff url()",
            backdrop: `
        rgba(99, 171, 204, 0.4)
          no-repeat
        `,
        });
    } else if (cupon !== "Segui participando!") {
        Swal.fire({
            title: "Te has ganado un cupon de: " + cupon,
            width: 500,
            padding: "3em",
            background: "#fff url()",
            backdrop: `
        rgba(99, 171, 204, 0.4)
          url("/images/confite.gif")
          center center
          no-repeat
        `,
        });
    }
}
