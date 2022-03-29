'use strict'

const store = require('./store.js')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-up',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-in',
    data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}


const gameStatus = function () {
  return $.ajax({
    method: 'GET',
    url: 'https://tic-tac-toe-api-development.herokuapp.com/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const createGame = function () {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-api-development.herokuapp.com/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {}
  })
}

const playerMove = function (index, value, gameOver) {
  return $.ajax({
    method: 'PATCH',
    url: 'https://tic-tac-toe-api-development.herokuapp.com/games/' + store.game._id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: index,
          value: value
        },
        over: gameOver
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  gameStatus,
  createGame,
  playerMove
}
