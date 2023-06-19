import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import validateEmail from './email'

document.getElementById('signup-form').addEventListener('submit', (event) => {
  event.preventDefault()
  // TODO: validate input and trigger error
  const email = event.target.value;
  // why isn't this working?
  document.getElementById('email-label').classList.remove('error-state')
  document.getElementById('email').classList.remove('bad-input')
  if ( !validateEmail(email) ) {
    document.getElementById('email-label').classList.add('error-state')
    document.getElementById('email').classList.add('bad-input')
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
