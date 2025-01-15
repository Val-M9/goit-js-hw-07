const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

const handleInput = (event) => {
  outputName.textContent = event.currentTarget.value.trim() || 'Anonymous';
};

inputName.addEventListener('input', handleInput);
