var nameBtn = document.querySelector('.name-btn');
var nameInput = document.querySelector('.name-input');
var alteredName = document.querySelector('.alter-name');

nameBtn.addEventListener('click', changeName);

function changeName (e) {
  e.preventDefault();
  alteredName.innerText = nameInput.value;
}
