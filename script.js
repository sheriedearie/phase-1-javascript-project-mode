// const h2 = document.createElement('h2');
// h2.textContent = "This content added by JavaScript"; 
// document.querySelector('body').appendChild(h2); 

const btn = document.getElementById("btn")

const catUrl = 
fetch("https://thatcopy.pw/catapi/rest/")
	.then(res => res.json())
	console.log(catUrl)

