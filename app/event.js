'use strict'
const store = require('./store.js')
const authUi = require('./ui.js')
const authApi = require('./api.js')
const getFormFields = require('../lib/get-form-fields.js')

$('#gameBoardT').hide()
$('#sign-out-button').hide()
$('#sign-out-display').hide()

const onSignUp = function (event) {
  event.preventDefault()
  console.log('here')

  // get data from form
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  // api call
  authApi.signUp(data)
    .then(() => authUi.onSignUpSuccess())
    .catch(() => authUi.onSignUpFailure())
}

const onSignIn = function (event) {
  event.preventDefault()

  // get data from form
  const data = getFormFields(event.target)
  console.log(data)

  // api call
  authApi.signIn(data)

    .then((response) => authUi.onSignInSuccess(response))
    .then(() => authApi.createGame())
    .then((response) => { store.game = response.game })
    .catch(() => authUi.onSignInFailure())
}

const onSignOut = function () {
  console.log('now here')
  $('.box').text('')
  $('#gameBoardT').hide()
  // api call
  authApi.signOut()
    .then(() => authUi.onSignOutSuccess())
    .catch(() => authUi.onSignOutFailure())
}

let clicked = 'x'
let plays = 0

const onBoxClick = function (event) {
  const gameIndex = event.target.getAttribute('data-cell-index')


  authApi.playerMove(gameIndex, clicked, false)
   
    .then((response) => { store.game.cells = response.game.cells })
    .then(() => checkBoard())
    plays = plays + 1

  if (clicked === 'x') {
    $(this).text('X').unbind()
    clicked = 'o'
    store.game.cells[gameIndex] = "x"
    console.log(store.game.cells)
  } else {
    $(this).text('O').unbind()
    clicked = 'x'
    store.game.cells[gameIndex] = "o"
    console.log(store.game.cells)
  }
}

const onRestartClick = function () {
  clicked = 'x'
  $('.box').text('')
  $('.box').unbind('click', onBoxClick)
  $('.box').bind('click', onBoxClick)
  $('#auth-display').html('<p>Restarted Game</p>')
  plays = 0

  authApi.createGame()
    .then((response) => { store.game = response.game })
}

const checkBoard = function () {
  // for Os win
  if (store.game.cells[0] === 'o' && store.game.cells[1] === 'o' && store.game.cells[2] === 'o') {
    console.log('Os Win')
    $('#auth-display').html('<p> O WINS</p>')
    $('.box').unbind('click', onBoxClick)
  }
  if (store.game.cells[3] === 'o' && store.game.cells[4] === 'o' && store.game.cells[5] === 'o') {
    console.log('Os Win')
    $('#auth-display').html('<p>O WINS</p>')
    $('.box').unbind('click', onBoxClick)
  }
  if (store.game.cells[6] === 'o' && store.game.cells[7] === 'o' && store.game.cells[8] === 'o') {
    console.log('Os Win')
    $('#auth-display').html('<p>O WINS</p>')
    $('.box').unbind('click', onBoxClick)
  }
  if (store.game.cells[0] === 'o' && store.game.cells[3] === 'o' && store.game.cells[6] === 'o') {
    console.log('Os Win')
    $('#auth-display').html('<p>O WINS</p>')
    $('.box').unbind('click', onBoxClick)
  }
  if (store.game.cells[1] === 'o' && store.game.cells[4] === 'o' && store.game.cells[7] === 'o') {
    console.log('Os Win')
    $('#auth-display').html('<p>O WINS</p>')
    $('.box').unbind('click', onBoxClick)
  }
  if (store.game.cells[2] === 'o' && store.game.cells[5] === 'o' && store.game.cells[8] === 'o') {
    console.log('Os Win')
    $('#auth-display').html('<p>O WINS</p>')
    $('.box').unbind('click', onBoxClick)
  }
  if (store.game.cells[0] === 'o' && store.game.cells[4] === 'o' && store.game.cells[8] === 'o') {
    console.log('Os Win')
    $('#auth-display').html('<p>O WINS</p>')
    $('.box').unbind('click', onBoxClick)
  }
  if (store.game.cells[2] === 'o' && store.game.cells[4] === 'o' && store.game.cells[6] === 'o') {
    console.log('Os Win')
    $('#auth-display').html('<p>O WINS</p>')
    $('.box').unbind('click', onBoxClick)
  }
  // if Xs Win
  if (store.game.cells[0] === 'x' && store.game.cells[1] === 'x' && store.game.cells[2] === 'x') {
    console.log('Xs Win')
    $('#auth-display').html('<p>X WINS</p>')
    $('.box').unbind('click', onBoxClick)
  }
  if (store.game.cells[3] === 'x' && store.game.cells[4] === 'x' && store.game.cells[5] === 'x') {
    console.log('Xs Win')
    $('#auth-display').html('<p>X WINS</p>')
    $('.box').unbind('click', onBoxClick)
  }
  if (store.game.cells[6] === 'x' && store.game.cells[7] === 'x' && store.game.cells[8] === 'x') {
    console.log('Xs Win')
    $('#auth-display').html('<p>X WINS</p>')
    $('.box').unbind('click', onBoxClick)
  }
  if (store.game.cells[0] === 'x' && store.game.cells[3] === 'x' && store.game.cells[6] === 'x') {
    console.log('Xs Win')
    $('#auth-display').html('<p>X WINS</p>')
    $('.box').unbind('click', onBoxClick)
  }
  if (store.game.cells[1] === 'x' && store.game.cells[4] === 'x' && store.game.cells[7] === 'x') {
    console.log('Xs Win')
    $('#auth-display').html('<p>X WINS</p>')
    $('.box').unbind('click', onBoxClick)
  }
  if (store.game.cells[2] === 'x' && store.game.cells[5] === 'x' && store.game.cells[8] === 'x') {
    console.log('Xs Win')
    $('#auth-display').html('<p>X WINS</p>')
    $('.box').unbind('click', onBoxClick)
  }
  if (store.game.cells[0] === 'x' && store.game.cells[4] === 'x' && store.game.cells[8] === 'x') {
    console.log('Xs Win')
    $('#auth-display').html('<p>X WINS</p>')
    $('.box').unbind('click', onBoxClick)
  }
  if (store.game.cells[2] === 'x' && store.game.cells[4] === 'x' && store.game.cells[6] === 'x') {
    console.log('Xs Win')
    $('#auth-display').html('<p>X WINS</p>')
    $('.box').unbind('click', onBoxClick)
  }
  if (plays >= 9) {
    $('#auth-display').html('<p>TIE GAME</p>')
  }
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onBoxClick,
  onRestartClick,
  checkBoard
}
