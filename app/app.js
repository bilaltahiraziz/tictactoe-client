// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./event.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('.box').on('click', authEvents.onBoxClick)
})
