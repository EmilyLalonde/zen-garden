var nameBtn = document.querySelector('.name-btn');
var nameInput = document.querySelector('.name-input');
var alteredName = document.querySelector('.alter-name');
var articleBtns = document.querySelector('.article-btns');
var titleInput = document.querySelector('.title-change');
var bodyInput = document.querySelector('.body-change');
var titleOne = document.querySelector('.title-1');
var titleTwo = document.querySelector('.title-2');
var titleThree = document.querySelector('.title-3');
var changeBtn = document.querySelector('.change-btn');

nameBtn.addEventListener('click', changeName);
document.addEventListener('click', changeAppearance);
// changeBtn.addEventListener('click', changeColumns);

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

// function changeColumns (e) {
//   // var changeOne = document.querySelector('.how-change')
//   if(e.target && e.tagrget.className == 'how-change') {
//     titleOne.innerText = titleInput.value;
//   }
// }