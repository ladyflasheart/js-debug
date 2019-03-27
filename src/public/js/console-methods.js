'use strict'
/* global $ */
$(document).ready(function () {
  let coordinate = {
    x: 34,
    y: 75.574,
    z: 20
  }

  let characters = [
    { name: 'tom', age: 45, favouriteVegetable: 'leek' },
    { name: 'dick', age: 52, favouriteVegetable: 'turnip' },
    { name: 'harry', age: 73, favouriteVegetable: 'marrow' },
    { name: 'gertrude', age: 66, favouriteVegetable: 'carrot' },
    { name: 'edna', age: 57, favouriteVegetable: 'purple sprouting broccoli' },
    { name: 'bernard', age: 98, favouriteVegetable: 'parsnip', favouriteFruit: 'banana' },
    { name: 'colin', age: 81, favouriteVegetable: 'courgette', favouriteFruits: ['orange', 'apple', 'kiwi'] }
  ]

  let runMessages = function () {
    console.log(coordinate)
    console.trace(coordinate)
    console.warn(coordinate)
    console.info(coordinate)
    console.error(coordinate)
    console.debug(coordinate)
  }

  let runMessagesFormatted = function () {
    console.log('Logging div object as DOM element %o', document.getElementById('console-table'))
    console.warn('Warning with div element as JS object %O', document.getElementById('console-table'))
    console.dir(document.getElementById('console-time')) // another way to display things as JS object
    console.info('Information call with Y value as integer %d', coordinate.y)
    console.info('Information call with Y value as float %f', coordinate.y)
    console.error('Error call with coordinate y as string %s', coordinate.y)
    console.log('%cStyling the coordinate object output with CSS %O', 'color:RebeccaPurple; font-weight:bold; font-size: large', coordinate)
  }

  let hideOthers = function (id) {
    let divs = [
      'console-messages',
      'console-messages-formatted',
      'console-table',
      'console-time',
      'console-filter',
      'console-group'
    ]
    let divsToHide = divs.filter(divId => divId !== id)
    divsToHide.forEach(function (identifier) {
      $('#' + identifier).collapse('hide')
    })
  }

  let runTableDisplay = function () {
    console.table(characters)
    console.table(characters, ['age', 'name'])
  }

  let runCountingAndTiming = function () {
    console.time('Counter1')
    let storage = []
    for (let i = 1; i < 5000; i++) {
      storage.push(i)
    }
    console.timeEnd('Counter1')
  }

  let runFilterExample = function () {
    // generate an array of random numbers and different fruits
    let randomValues = makeMixedArray(30)
    console.dir(randomValues)
    randomValues.forEach(function (element) {
      if (typeof element === 'number') {
        console.log(element)
      } else {
        console.warn(element)
        console.count('Got a fruit')
        // deliberately do something that will generate a browser error in console
        let randomAscii = Math.floor((Math.random() * 25) + 97)
        let missingAjaxPage = String.fromCharCode(randomAscii) + '.php'
        $.get(missingAjaxPage)
      }
    })
  }

  let makeMixedArray = function (size) {
    // generate an array of random numbers and different fruits
    return new Array(size).fill(0).map(function () {
      let fruits = ['banana', 'apple', 'orange', 'kiwi', 'kumquat', 'pomegranate', 'physalis', 'damson']
      let randomFruit = fruits[makeRandomInteger(1, 7)]
      let randomInteger = makeRandomInteger(0, 1000)
      if (randomInteger % 2) {
        return randomInteger
      }
      return randomFruit
    })
  }

  let firstFunction = function (choice) {
    console.group('First function with choice number %d', choice)
    let animals = ['kittens', 'aardvarks', 'meerkats', 'puppies']
    console.log(animals.length)
    let likeAmounts = ['a bit', 'a lot', 'very very much', 'more than anything else in the world']
    console.log(likeAmounts)
    console.groupEnd()
    return 'I like ' + animals[choice] + ' ' + likeAmounts[choice]
  }

  let secondFunction = function () {
    console.group('Second function')
    for (let i = 1; i < 4; i++) {
      console.group('Looping on loop %d', i)
      let number = makeRandomInteger(0, 3)
      let personalPreference = firstFunction(number)
      console.log(personalPreference)
      console.groupEnd()
    }
    console.groupEnd()
  }

  let makeRandomInteger = function (minimum, maximum) {
    return Math.floor(Math.random() * (maximum + 1 - minimum) + minimum)
  }

  let messagesCodeDisplay = $('#console-messages')
  let formattedMessagesCodeDisplay = $('#console-messages-formatted')
  let dataAsTableDisplay = $('#console-table')
  let timeExamples = $('#console-time')
  let filterExamples = $('#console-filter')
  let groupExamples = $('#console-group')

  // add listeners hooking into the bootstrap code so appropriate functions are run
  // immediately after the relevant section is made visible. Also just before the
  // section is made visible clear the console and hide any other sections
  messagesCodeDisplay.on('shown.bs.collapse', function () {
    runMessages()
  })
  messagesCodeDisplay.on('show.bs.collapse', function (event) {
    console.clear()
    hideOthers(event.target.id)
  })

  formattedMessagesCodeDisplay.on('shown.bs.collapse', function () {
    runMessagesFormatted()
  })
  formattedMessagesCodeDisplay.on('show.bs.collapse', function (event) {
    console.clear()
    hideOthers(event.target.id)
  })

  dataAsTableDisplay.on('shown.bs.collapse', function () {
    runMessagesFormatted()
  })
  dataAsTableDisplay.on('show.bs.collapse', function (event) {
    console.clear()
    hideOthers(event.target.id)
  })

  dataAsTableDisplay.on('shown.bs.collapse', function () {
    runTableDisplay()
  })
  dataAsTableDisplay.on('show.bs.collapse', function (event) {
    hideOthers(event.target.id)
  })

  timeExamples.on('shown.bs.collapse', function () {
    runCountingAndTiming()
  })
  timeExamples.on('show.bs.collapse', function (event) {
    console.clear()
    hideOthers(event.target.id)
  })

  filterExamples.on('shown.bs.collapse', function () {
    runFilterExample()
  })
  filterExamples.on('show.bs.collapse', function (event) {
    console.clear()
    hideOthers(event.target.id)
  })

  groupExamples.on('shown.bs.collapse', function () {
    secondFunction()
  })
  groupExamples.on('show.bs.collapse', function (event) {
    console.clear()
    hideOthers(event.target.id)
  })
})
