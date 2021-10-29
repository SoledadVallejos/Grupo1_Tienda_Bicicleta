/*const { value: email } = await Swal.fire({
    title: 'Input email address',
    input: 'email',
    inputLabel: 'Your email address',
    inputPlaceholder: 'Enter your email address'
  })
  
  if (email) {
    Swal.fire(`Entered email: ${email}`)
  }*/

Swal.fire({
  title: '¿quieres acceder a ofertas personalizadas?',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: 'Si',
  denyButtonText: `No`,
}).then((result) => {
  if (result.isConfirmed) {
    if (!localStorage.getItem("email")) {
      const { value: email } = Swal.fire({
        title: 'Input email address',
        input: 'email',
        inputLabel: 'Your email address',
        inputPlaceholder: 'Ingresa tu email'
      }).then((object) => localStorage.setItem("email", object.value))
    }
    else Swal.fire("ya se registro con el correo", localStorage.getItem("email"))
    window.location.replace("ofertas personalizadas.html")
  } else if (result.isDenied) {
    Swal.fire('Gracias', '', 'info')
  }
  console.log(localStorage.getItem("email"))
})
