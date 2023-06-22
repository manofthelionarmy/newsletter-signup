import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import validateEmail from './email'

const email = document.getElementById('email')
const emailLabel = document.getElementById('email-label')

email.addEventListener('focus', () => {
  emailLabel.classList.remove('error-state')
  email.classList.remove('bad-input')
})

document.getElementById('signup-form').addEventListener('submit', (event) => {
  event.preventDefault()
  emailLabel.classList.remove('error-state')
  email.classList.remove('bad-input')
  const {typeMismatch, valueMissing} = email.validity
  if ( typeMismatch || valueMissing) {
    emailLabel.classList.add('error-state')
    email.classList.add('bad-input')
    return
  }
  document.getElementById('subscribe').classList.add('hidden')
  document.getElementById('success').classList.remove('hidden')
  document.getElementById('subscribe').classList.add('visible')
})

document.getElementById('dismiss').addEventListener('click', (event) => {
  document.getElementById('success').classList.add('hidden')
  document.getElementById('subscribe').classList.remove('hidden')
  document.getElementById('subscribe').classList.add('visible')
})
