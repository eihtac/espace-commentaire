let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let message = document.getElementById("message");
let button = document.querySelector('button');
let errorMessage = document.getElementById("error-message");


button.addEventListener('click', (e) => {
    if (firstName.value == "" || lastName.value == "" || message.value == "") {
        errorMessage.removeAttribute('style')
    }  
})