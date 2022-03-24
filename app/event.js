'use strict'

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
        .catch(() => authUi.onSignInFailure())
}

const onSignOut = function () {
    console.log('now here')

    // api call
    authApi.signOut()
    .then(() => authUi.onSignOutSuccess())
    .catch(() => authUi.onSignOutFailure())
}

const onBoxClick = function () {
    console.log('here')
    $(this).css('background', "red")
}


module.exports = {
    onSignUp,
    onSignIn,
    onSignOut,
    onBoxClick
}