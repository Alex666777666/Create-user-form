const baseUrl = 'https://6407755f862956433e7052f4.mockapi.io/users'

const loginForm = document.querySelector('.login-form')
const submitBtn = document.querySelector('.submit-button')

const user = {}

const handleInputChange = e => {
  const { name, value } = e.target
  if (name === 'email') {
    user.email = value
  } else if (name === 'name') {
    user.name = value
  } else if (name === 'password') {
    user.password = value
  }
  console.log(user)
}

loginForm.addEventListener('input', () => {
  const isFormValid = loginForm.reportValidity()
  submitBtn.disabled = !isFormValid
})

function createUser(userData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  })
}

submitBtn.addEventListener('click', event => {
  event.preventDefault()

  const formValues = Object.fromEntries([...new FormData(loginForm)])

  user.email = formValues.email
  user.name = formValues.name
  user.password = formValues.password

  createUser(user).then(() => {
    alert(JSON.stringify(user))
  })
})
