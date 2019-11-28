'use strict'

console.log('Here\'s a hidden message')
let today = new Date()
let formaDate = today.toDateString()
let selectElement = document.getElementById('date')
selectElement.innerHTML = formaDate

