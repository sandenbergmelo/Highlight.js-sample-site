// Variables of HTML elements
var tema = document.getElementById('tema')
var lt = document.getElementById('lt')
var cor = document.getElementById('cor')
var muda = document.getElementById('muda')

// Events that will trigger the functions
tema.addEventListener('change', mudaTema)
cor.addEventListener('change', mudaBg)
muda.addEventListener('click', randomColor)

function mudaTema() {// Function to change the color theme
	lt.href = "//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/" + tema.value + ".min.css"
}

function mudaBg() {// Function to change the background color
	document.body.style.background = cor.value
}

function randomColor() {// Function to change the background to a random color
	
	let r, g, b
	
	r = Math.floor(Math.random() * 256)
	g = Math.floor(Math.random() * 256)
	b = Math.floor(Math.random() * 256)
	
	document.body.style.background = `rgb(${r}, ${g}, ${b})`
}
