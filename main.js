const adviceEl = document.querySelector('#advice')
const adviceNumber = document.querySelector('#advice-number')
const adviceGenerator = document.querySelector('#advice-generator')

const loadAdvice = () => {
  // Fetch api data and send to render
    fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then((data) => renderAdvice(data))
  }

adviceGenerator.addEventListener('click', (e)=> {
  // load new advice every time the div is clicked
  loadAdvice()
})

const renderAdvice = (data) => {
  // Parse data from api
  const adviceId = data.slip.id
  const advice = data.slip.advice

  // Set html elements to content from api
  adviceNumber.innerText = adviceId
  adviceEl.innerText = '"' + advice + '"'
}