// Variables of HTML elements
var tema = document.getElementById('tema')
var lt = document.getElementById('lt')
var cor = document.getElementById('cor')
var muda = document.getElementById('muda')

// Event that will trigger the functions
tema.addEventListener('change', mudaTema)
cor.addEventListener('change', mudaBg)
muda.addEventListener('click', random)

function mudaTema() {// Function to change the color theme
	let tv = tema.value
	
	lt.href = "//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/styles/" + tv + ".min.css"

}

function mudaBg() {// Function to change the background color
	document.body.style.background = cor.value
}

function random() {// Function to change the background to a random color
	
	let r, g, b
	let fundo = document.body.style
	
	r = Math.floor(Math.random() * 256)
	g = Math.floor(Math.random() * 256)
	b = Math.floor(Math.random() * 256)
	
	fundo.background = `rgb(${r}, ${g}, ${b})`
}
