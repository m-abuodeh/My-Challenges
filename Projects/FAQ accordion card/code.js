let question1 = document.querySelectorAll('.q1');
/* let paragraph = document.querySelector('.par'); */

question1.forEach((e, i) => {
  console.log(e);
  console.log(i);

  let par = e.querySelector('.par');
  console.log('par' + par);

  let test = e.removeChild(par);
  let titleText = e.querySelector('.title-text');
  console.log(titleText);

  let arrow = e.querySelector('.arrow');
  e.addEventListener('click', function () {
    console.log('clicked');
    question1[i].classList.toggle('active');

    if (question1[i].classList.contains('active')) {
      question1[i].appendChild(test);
      titleText.style.fontWeight = 700;
      arrow.style.transform = 'rotate(180deg)';
    } else {
      question1[i].removeChild(par);
      titleText.style.fontWeight = 400;
      arrow.style.transform = 'rotate(0deg)';
    }
  });
});

console.log(question1);
