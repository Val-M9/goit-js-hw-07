function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const userInput = document.querySelector('#controls > input');
const createBoxesBtn = document.querySelector('button[data-create');
const destroyBoxesBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

const handleGenerateBoxes = () => {
  const inputValue = Number(userInput.value);
  if (inputValue < 1 || inputValue > 100) {
    return;
  }

  handleDestroyBoxes();
  const markup = Array.from({ length: inputValue }).reduce((acc, _, index) => {
    const size = 30 + index * 10;
    return (
      acc +
      `<div style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px"></div>`
    );
  }, '');

  boxes.insertAdjacentHTML('beforeend', markup);
  userInput.value = '';
};

const handleDestroyBoxes = () => {
  boxes.innerHTML = '';
};

createBoxesBtn.addEventListener('click', handleGenerateBoxes);
destroyBoxesBtn.addEventListener('click', handleDestroyBoxes);
