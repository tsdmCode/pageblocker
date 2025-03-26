const all = document.getElementById('all');
const promotional = document.getElementById('promotional');
const needed = document.getElementById('needed');
const main = document.getElementsByTagName('main')[0];

document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.getElementById('dialog');
  const yesButton = document.getElementById('consent');
  const noButton = document.getElementById('noConsent');
  // localStorage.clear(); // turn this on if you need to debug
  if (localStorage.getItem('consentGiven') === 'true') {
    //gets the cookie
    console.log('got here!');
    main.style.filter = 'blur(0px)';
    return;
  } else {
    dialog.showModal();
  }

  yesButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (!all.checked && !promotional.checked && !needed.checked) {
      alert('Click en af dem, tak!');
    } else {
      localStorage.setItem('consentGiven', 'true'); //sets cookie
      const checkBoxes = document.querySelectorAll('.inputCheck');
      checkBoxes.forEach((i) => {
        if (i.checked) {
          console.log(i.id);
        }
      });
      main.style.filter = 'blur(0px)';
      dialog.close();
    }
  });
  noButton.addEventListener('click', (e) => {
    e.preventDefault();
    redirect();
  });
  const redirect = () => {
    window.location.href = 'https://en.wikipedia.org/wiki/Cookie_monster';
  };
});
