//---- Mostrar senha - Cadastro ------//

function showPass() {
    let x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }

    let y = document.getElementById("confirm_password");
    if (y.type === "password") {
        y.type = "text";
    } else {
        y.type = "password";
    }
}

//---- Alerta sendEmail footer ----//

function sendEmail() {
    let send = document.forms["sendEmail"].value;
    if (send == " ") {
        alert('Formulário incompleto')
        
    }
    else {

        alert('Sua mensagem foi recebida, logo retornaremos seu contato.')
    }
}

//---- Menu lateral ----//

let btnMenu = document.getElementById("btnMenu")
let nav = document.getElementById("nav")

btnMenu.addEventListener("click",() => {
    nav.classList.toggle("active");
    btnMenu.classList.toggle("active");
});

