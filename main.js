import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

document.getElementById('signup-form').addEventListener('submit', (event) => {
  event.preventDefault()
  // TODO: validate input and trigger error
  document.getElementById('subscribe').classList.add('hidden')
  document.getElementById('success').classList.remove('hidden')
  document.getElementById('subscribe').classList.add('visible')
})

document.getElementById('dismiss').addEventListener('click', (event) => {
  document.getElementById('success').classList.add('hidden')
  document.getElementById('subscribe').classList.remove('hidden')
  document.getElementById('subscribe').classList.add('visible')
})
