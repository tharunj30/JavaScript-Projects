const revealBtn = document.querySelector('.reveal-btn');
console.log(revealBtn);
const hiddenContent = document.querySelector('.hidden-content');

function revealContent() {
  if (hiddenContent.classList.contains('reveal-btn')) {
    hiddenContent.classList.remove('reveal-btn');
  } else {
    hiddenContent.classList.add('reveal-btn');
  }
}

revealBtn.addEventListener('click', revealContent);
