// Variables of HTML elements
let tema = document.getElementById('tema')
let lt = document.getElementById('lt')
let cor = document.getElementById('cor')
let muda = document.getElementById('muda')

tema.addEventListener('change', () => {// Function to change the color theme
	lt.href = "//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/" + tema.value + ".min.css"
})

cor.addEventListener('change', () => {// Function to change the background color
	document.body.style.background = cor.value
})

muda.addEventListener('click', () => {// Function to change the background to a random color
	let r, g, b
	
	r = Math.floor(Math.random() * 256)
	g = Math.floor(Math.random() * 256)
	b = Math.floor(Math.random() * 256)
	
	document.body.style.background = `rgb(${r}, ${g}, ${b})`
})
