function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
    input: document.querySelector('[type="number"]'),
    createButton: document.querySelector('[data-create]'),
    destroyButton: document.querySelector('[data-destroy]'),
    box: document.querySelector('#boxes'),
}

refs.createButton.addEventListener('click', () => {
    refs.box.innerHTML = '';
    let size = 30

    //Новий div, щоб не вставляти в DOM окремо каждий блок в циклі
    const generalDiv = document.createElement('div');
    generalDiv.classList.add('box');

    for (i = 1; i <= refs.input.value; i++) {
        const newDiv = document.createElement('div');
        newDiv.style.backgroundColor = getRandomHexColor();
        newDiv.style.width = `${size}px`;
        newDiv.style.height = `${size}px`;
        generalDiv.append(newDiv);

        size += 10;
    }

    refs.box.append(generalDiv);
    refs.input.value = '';
});

refs.destroyButton.addEventListener('click', () => {
    refs.box.innerHTML = '';
    refs.input.value = '';
});

