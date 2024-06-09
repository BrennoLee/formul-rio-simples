document.addEventListener('DOMContentLoaded', function() {
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');

    let form = document.getElementById('contact-form');
    let mensagemDiv = document.getElementById('message'); 

    form.addEventListener('submit', function(event){
        event.preventDefault();

        if (form.checkValidity()){
            mensagemDiv.textContent = "O formulário foi enviado com sucesso!";
            mensagemDiv.style.color = "green"; 
            form.reset();
        } else {
            mensagemDiv.textContent = "Por favor preencha corretamente todos os campos!"
            mensagemDiv.style.color = "red";
        }
    });

    emailInput.addEventListener('focus', function() {
        emailInput.style.borderColor = "black";
    });

    passwordInput.addEventListener('focus', function() {
        passwordInput.style.borderColor = "black";
    });
});
