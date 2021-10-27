function toggleMenu() {
    const toggle = document.querySelector('.toggle');
    const nav = document.querySelector('.nav-ul');
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
}

// alert saludo (dependiendo la hora)

Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'
})
