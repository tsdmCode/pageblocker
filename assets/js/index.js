const all = document.getElementById('all');
const promotional = document.getElementById('promotional');
const needed = document.getElementById('needed');

document.addEventListener('DOMContentLoaded', function () {
  const dialog = document.getElementById('dialog');
  const yesButton = document.getElementById('consent');
  const noButton = document.getElementById('noConsent');
  localStorage.clear();
  if (localStorage.getItem('consentGiven') === 'true') {
    console.log('got here!');
    return;
  } else {
    dialog.showModal();
  }

  yesButton.addEventListener('click', function (e) {
    e.preventDefault();

    if (!all.checked && !promotional.checked && !needed.checked) {
      redirect();
    } else {
      localStorage.setItem('consentGiven', 'true');
      const checkBoxes = document.querySelectorAll('.inputCheck');
      checkBoxes.forEach((i) => {
        if (i.checked) {
          console.log(i.id);
        }
      });
      dialog.close();
    }
  });
  noButton.addEventListener('click', (e) => {
    e.preventDefault();
    redirect();
  });
  function redirect() {
    window.location.href = 'https://en.wikipedia.org/wiki/Cookie_monster';
  }
});
