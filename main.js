import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

document.getElementById('submit').addEventListener('click', (event) => {
  event.preventDefault()
  location.href = "/success/"
})

// setupCounter(document.querySelector('#counter'))
