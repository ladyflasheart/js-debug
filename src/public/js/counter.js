'use strict'
/* global alert */
window.onload = function () {
  let button = document.getElementById('gobutton')
  let displayDiv = document.getElementById('numberdisplay')
  let chosenNumberEl = document.getElementById('number')

  let checkNumber = function (number) {
    return number > 0 && number < 101
  }

  let showNumber = function (numberToShow) {
    displayDiv.textContent = numberToShow.toString()
  }

  let clearChosenNumber = function () {
    chosenNumberEl.value = ''
  }

  button.onclick = function () {
    let numberToCountTo = chosenNumberEl.value
    let limit = parseInt(numberToCountTo)
    if (!checkNumber(limit)) {
      alert('Please choose a positive number between 1 and 100 to count to!')
      return
    }
    let count = 1
    let myInterval = setInterval(function () {
      if (count === 1) {
        // if starting a new count then make sure colours back to yellow
        displayDiv.classList.remove('activegreen')
        displayDiv.classList.add('activeyellow')
      }
      if (count === limit) {
        clearInterval(myInterval) // stop counter
        displayDiv.classList.replace('activeyellow', 'activegreen')
        clearChosenNumber()
      }
      showNumber(count)
      count++
    }, 500)
  }
}
