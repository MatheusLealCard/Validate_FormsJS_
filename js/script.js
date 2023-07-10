const form = document.querySelector('#form');
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const jobSelect = document.querySelector('#job');
const messageTextArea = document.querySelector('#message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if(nameInput.value === ''){
        alert('Por favor preencha o seu nome');
        return;
    }

    if(emailInput.value === ''){
        alert('Por favor preencha o email')
        return;
    }

    if(passwordInput.value === ''){
        alert('Preencha sua senha');
        return;
    }

    if(emailInput.value === ''){
        alert('Por favor preencha o email')
        return;
    }

    if(jobSelect.value === '') {
        alert('Preencha sua situaçao de trabalho')
        return;
    }

    if(messageTextArea.value === ''){
        alert('Preencha o campo de texto')
        return;
    }

    form.submit();
})

