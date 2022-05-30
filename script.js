let main = document.getElementById('main');
let second = document.getElementById('second');

let nom = "";
let email = "";

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let erreurName = document.querySelector('.back');
    let erreurEmail = document.querySelector('.backs');

    if (this.elements[0].value == "" && this.elements[1].value == "") {
        erreurName.textContent = "Veuillez saisir votre nom !";
        erreurEmail.textContent = 'Veuillez saisir votre email !';
    } else {
        erreurName.textContent = "";
        let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regexEmail.test(this.elements[1].value)) {
            erreurEmail.textContent = 'Veuillez saisir votre email !';
        } else {
            question = fetch("main.test")
            erreurEmail.textContent = "";
            main.remove();
            //main.classList.add('invisibility');
            second.classList.add('visibility');
        }
    }
})