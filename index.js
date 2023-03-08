const baseUrl = 'https://6407755f862956433e7052f4.mockapi.io/users'

const submitButton = document.querySelector('.submit-button');
const loginForm = document.querySelector('.login-form');


const onValidForm = () => {
  submitButton.disabled = !loginForm.reportValidity();
};


const userData = (formData) =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
  });


const onCreateUser = (e) => {
  e.preventDefault();
  const formData = [...new FormData(loginForm)].reduce(
    (acc, [prop, value]) => ({ ...acc, [prop]: value }),
    {}
  );
  userData(formData)
    .then((response) => response.json())
    .then((dataOfUser) => {
      alert(JSON.stringify(dataOfUser));
      loginForm.reset();
      submitButton.disabled = true;
    });
};

loginForm.addEventListener('submit', onCreateUser);
loginForm.addEventListener('input', onValidForm);
