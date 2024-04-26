let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let message = document.getElementById("message");
let button = document.querySelector('button');
let errorMessage = document.getElementById("error-message");

let commentList = document.getElementById("comment-list");
let newComment = commentList.firstElementChild.cloneNode(true);
let newCommentTitle = newComment.querySelector('h3');
let newCommentMessage = newComment.querySelector('p');

button.addEventListener('click', (e) => {
    if (firstName.value == "" || lastName.value == "" || message.value == "") {
        errorMessage.removeAttribute('style');
    }  else {
        newCommentTitle.innerText = firstName.value + lastName.value;
        newCommentMessage.innerText = message.value;
        commentList.appendChild(newComment);
    }
})