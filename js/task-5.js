function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const changeColorBtn = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');

const handleChangeColor = () => {
  const backgroundColor = getRandomHexColor();
  body.style.backgroundColor = backgroundColor;
  colorValue.textContent = backgroundColor;
  colorValue.style.color = '#fff';
};

changeColorBtn.addEventListener('click', handleChangeColor);
