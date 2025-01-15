function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const userInput = document.querySelector('#controls > input');
const createBoxesBtn = document.querySelector('button[data-create');
const destroyBoxesBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

const validateInput = () => {
  const inputValue = Number(userInput.value);

  if (inputValue < 1 || inputValue > 100) {
    createBoxesBtn.disabled = true;
  } else {
    createBoxesBtn.disabled = false;
  }
};

const handleGenerateBoxes = () => {
  const inputValue = Number(userInput.value);

  handleDestroyBoxes();
  const fragment = document.createDocumentFragment();
  let size = 30;
  for (let i = 1; i <= inputValue; i += 1) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    fragment.appendChild(box);
    size += 10;
  }

  boxes.appendChild(fragment);
  userInput.value = '';
};

const handleDestroyBoxes = () => {
  boxes.innerHTML = '';
};

userInput.addEventListener('input', validateInput);
createBoxesBtn.addEventListener('click', handleGenerateBoxes);
destroyBoxesBtn.addEventListener('click', handleDestroyBoxes);
