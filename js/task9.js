const refs = {
    button: document.querySelector('.change-color'),
    color: document.querySelector('.color'),
  };

refs.button.addEventListener('click', () => {
    let color = getRandomHexColor();
    document.body.style.backgroundColor = color;
    refs.color.textContent = color;

});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}