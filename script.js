// Project Requirements
// Your app must be a HTML/CSS/JS frontend that accesses data from a public API. All interactions between the client and the API should be handled asynchronously and use JSON as the communication format.

// Your entire app must run on a single page. There should be NO redirects. In other words, your project will contain a single HTML file.

// Your app needs to incorporate at least 3 separate event listeners (DOMContentLoaded, click, change, submit, etc).

// Some interactivity is required. This could be as simple as adding a "like" button or adding comments. These interactions do not need to persist after reloading the page.
// const h2 = document.createElement('h2');
// h2.textContent = "This content added by JavaScript"; 
// document.querySelector('body').appendChild(h2); 
document.addEventListener('DOMContentLoaded', () => {
	
})

const likeButton = document.getElementById("like-button")

// likeButton.addEventListener("click", () => {
	
// })
const button = document.getElementById("submitBtn")
submitBtn.addEventListener("click", function (e){
e.preventDefault()

const imgUrl = "https://thatcopy.pw/catapi/rest/"

fetch(imgUrl)
	.then(res => res.json())
	.then(console.log)
// 	.then(data => data.message.forEach(url => renderImage(url)))
})	

