'use strict'
const store = require('../app/store.js')


const onSignUpSuccess = function () {
  $('#auth-display').html('<p>User signed up successfully!</p>')
  // RESET ALL FORMS
  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  $('#auth-display').html('<p>User signed up was not successful!</p>')
}

const onSignInSuccess = function (response) {
  $('#auth-display').html('<p>User signed in successfully!</p>')

  // RESET ALL FORMS
  $('form').trigger('reset')
  $('#showHide').hide()
  $('#gameBoardT').show()
  $('#sign-out-button').show()
  $('#sign-out-display').show()
  console.log(response)
  // store data from the response in my store object
  store.user = response.user

  // OR RESET SIGN-IN FORMS
  // $('sign-in-form').trigger('reset')
}

const onSignInFailure = function () {
  $('#auth-display').html('<p>User signed in was not successful!</p>')
}

const onSignOutSuccess = function () {
  $('#auth-display').html('<p>User signed out successfully</p>')
  $('#showHide').show()
  $('form').trigger('reset')
}

const onSignOutFailure = function () {
  $('#auth-display').html('<p>Error while signing out</p>')
}



module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure
}
