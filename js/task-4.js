const loginForm = document.querySelector('.login-form');

const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const emailName = form.elements.email.name;
  const emailValue = form.elements.email.value.trim();
  const passwordName = form.elements.password.name;
  const passwordValue = form.elements.password.value.trim();

  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
  } else {
    console.log({ [emailName]: emailValue, [passwordName]: passwordValue });
    form.reset();
  }
};

loginForm.addEventListener('submit', handleSubmit);
