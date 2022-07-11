const form = document.getElementById(`myForm`);

// EVENTO SUBMIT
form.addEventListener("submit", (e) => {
    e.preventDefault();


    const usuario = [
        user = document.getElementById(`username`).value,
        password = document.getElementById(`password`).value,
        enter = document.getElementById(`submit`)
    ]

    const lblUsuarioOObject = [
        lblPassword = document.getElementById(`LblPassword`),
        lblUsuario = document.getElementById(`LblUsuario`)
    ]

    if (usuario[1].length < 8){
        lblUsuarioOObject[0].textContent = "Debe tener 8 caracteres";
        lblUsuarioOObject[0].style.color = "Red";
        
        setTimeout(() => {
            lblUsuarioOObject[0].textContent = "Password";
        lblUsuarioOObject[0].style.color = "white";
        }, 5000)

    } else { 
        console.log(`Tu nombre es:`, usuario[0], usuario[1]);
        window.location.href = `./pepe.html`
}
    
})


