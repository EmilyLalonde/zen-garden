var nameBtn = document.querySelector('.name-btn');
var nameInput = document.querySelector('.name-input');
var alteredName = document.querySelector('.alter-name');
var articleBtns = document.querySelector('.article-btns');

nameBtn.addEventListener('click', changeName);
document.addEventListener('click', changeAppearance);

function changeName (e) {
  e.preventDefault();
  alteredName.innerText = nameInput.value;
}

function changeAppearance (e) {
  if (e.target && e.target.className == 'article-btns') {
    var disappear = e.target.previousElementSibling;
    if(disappear.style.display == 'none') {
      disappear.style.display = 'block';
    }else{
      disappear.style.display = 'none';
    }
  }
}