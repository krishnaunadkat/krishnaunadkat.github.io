const buttons = document.querySelectorAll('.project');
const overlay = document.querySelector('.overlay');
const overlayImage = document.querySelector('.overlay__inner img');

function open(e) {
  overlay.classList.add('open');
  const src= e.currentTarget.querySelector('img').src;
  overlayImage.src = src;
  console.log("Hello");
}

function close() {
  overlay.classList.remove('open');
  console.log(overlay.classList);
}

console.log("buttons");
console.log(buttons);
buttons.forEach(button => button.addEventListener('click', open));
overlay.addEventListener('click', close);

