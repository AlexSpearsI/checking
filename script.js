"use strict"




let button = document.querySelector('.button');
button.style.cursor = "pointer";

button.addEventListener('click', function() {
    button.style.backgroundColor = 'red';
    button.style.fontSize = '20px';
    navigator.vibrate(200)
    navigator.getBattery().then(res => alert(res))
})