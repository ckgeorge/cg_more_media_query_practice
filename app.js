const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', (e) => {
	hamburger.parentElement.classList.toggle('active');

})