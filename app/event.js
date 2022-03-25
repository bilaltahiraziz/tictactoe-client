'use strict'
const store = require('./store.js')
const authUi = require('./ui.js')
const authApi = require('./api.js')
const getFormFields = require('../lib/get-form-fields.js')

const onSignUp = function (event) {
    event.preventDefault()
    console.log('here')

    // get data from form
    const form = event.target
    const data = getFormFields(form)
    console.log(data)

    // if (data.credentials.password !== data.credentials.password_confirmation) {
    // }else { api call (include below)}

    // api call
    authApi.signUp(data)
        .then(() => authUi.onSignUpSuccess())
        .catch(() => authUi.onSignUpFailure())
}



const onSignIn = function (event) {
    event.preventDefault()
    console.log('now here')

    // get data from form
    const data = getFormFields(event.target)
    console.log(data)



    // api call
    
    authApi.signIn(data)

        .then((response) => authUi.onSignInSuccess(response))
        .then(() => authApi.createGame())
        .then((response) => { store.game = response.game.cells })
        .catch(() => authUi.onSignInFailure())
}

const onSignOut = function () {
    console.log('now here')

    // api call
    authApi.signOut()
    .then(() => authUi.onSignOutSuccess())
    .catch(() => authUi.onSignOutFailure())
}


let clicked = true

const onBoxClick = function () {
  if (clicked) {
    $(this).text('X').unbind()
    clicked = false
    store.game[0] = 'X'
    console.log(store.game)
  } else {
    $(this).text('O').unbind()
    clicked = true
  }
  console.log(authApi.gameStatus())
}

const onRestartClick = function () {
    $('.box').text('')
    $('.box').bind('click', onBoxClick)
}

module.exports = {
    onSignUp,
    onSignIn,
    onSignOut,
    onBoxClick,
    onRestartClick
}