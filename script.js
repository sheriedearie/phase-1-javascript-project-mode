// Project Requirements
// Your app must be a HTML/CSS/JS frontend that accesses data from a public API. All interactions between the client and the API should be handled asynchronously and use JSON as the communication format.

// Your entire app must run on a single page. There should be NO redirects. In other words, your project will contain a single HTML file.

// Your app needs to incorporate at least 3 separate event listeners (DOMContentLoaded, click, change, submit, etc).

// Some interactivity is required. This could be as simple as adding a "like" button or adding comments. These interactions do not need to persist after reloading the page.

document.addEventListener('DOMContentLoaded', () => {

})

const whiteHeart = '\u2661';
const blackHeart = '\u2665';
const heartBtn = document.querySelector('#button');
heartBtn.addEventListener('click', toggle);

function toggle() {
  const like = heartBtn.innerHTML;
  if(like===whiteHeart) {
    heartBtn.innerHTML = blackHeart;
  } else {
    heartBtn.innerHTML = whiteHeart;
  }
}
// const likeButton = document.getElementById("likeBtn")
// likeBtn.addEventListener("click", function(){
// 	console.log(likeButton)
// // when like button is pressed say you liked this page
// })

const button = document.getElementById("submitBtn")
submitBtn.addEventListener("click", function (e){
	fetchImages()
})

function renderImages (image) {
	const img = document.createElement("img");
	img.src = image.url
	document.body.appendChild(img)
}

document.querySelector("body > img")

const imgUrl = "https://thatcopy.pw/catapi/rest/"

const fetchImages = () => {
fetch(imgUrl)
	.then(res => res.json())
	.then(data => renderImages(data))

	// .then(data.message.forEach(url => renderImage(url)))
	// can't do data.message because it is not an array... they are single objects
	// .then(data => data.fetchImages.forEach(url => renderImage(url)))
	// grabbing the container that the images are in and saying for each image render the image from the url
	// create a renderImages function
}

const commentForm = document.getElementById("commentForm")
const commentText = document.getElementById("commentText")
const commentList = document.getElementById("commentList")
// itentifies the comment button and tells js to grab it form HTML
commentForm.addEventListener("submit", (e) => {
	// taking the comment and saying when the submit is pressed do something
e.preventDefault()
const li = document.createElement('li')
console.log(li.value)
li.innerHTML = commentText.value
// // // preventing the page from reloading and erasing the comment
commentList.append(li)
})