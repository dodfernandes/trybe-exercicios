const submitBTN = document.querySelector('#btn-submit');
const formname = document.querySelector('#name');
const formemail = document.querySelector('#email');
const textfield = document.querySelector('#formarea');

function breakPattern(event) {
    event.preventDefault();
}
submitBTN.addEventListener('click', breakPattern);

function allChecker() {
    let counter = 0;
    let name = formname.value;
    let email = formemail.value;
    let formtext = textfield.value;
    if (name.length < 10 || name.length > 40) {
        counter += 1;
    } if (email.length < 10 || email.length > 50) {
        counter += 1;
    } if (formtext.length > 500) {
        counter += 1;
    } else {
    }
    
    if (counter === 0) {
        return alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
    } else {
    return alert('Dados Inválidos');
    }
}

submitBTN.addEventListener('click', allChecker);
