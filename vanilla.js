let formulaire = document.querySelector('.mb-2');

const person = {
    nom: '',
    email: '',
    points: 0,
};

formulaire.addEventListener('click', function(event) {
    event.preventDefault();
    person.nom = this.elements[0].value;
    person.email = this.elements[1].value;
    console.log(person);
});