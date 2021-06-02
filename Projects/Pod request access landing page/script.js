var wrongEmail =
  '<p class = "wrongMessage"> \'Please Provide correct email address\'</p>';
var form = document.querySelector('#form');
var email = document.querySelector('#email');
var formDiv = document.querySelector('.formDiv');

const validationForm = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var showOnce = 0;

function validateEmail() {
  /*   if (email.value !== validationForm) { */
  if (email.value.match(validationForm)) {
    if (showOnce !== 0) {
      var newElement = document.querySelector('.wrongMessage');
      let x = formDiv.removeChild(newElement);
    }
    showOnce = 0;
  } else {
    if (showOnce === 0) {
      form.insertAdjacentHTML('afterend', wrongEmail);
      showOnce++;
    }
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  /* console.log('clicked'); */
  validateEmail();
});
