let aboutMeContent = document.querySelector('.Modal_Container');
let aboutMeButton = document.querySelector('.about_me_button');
let exitButtonEl = document.querySelector('.modal_exit_button');

aboutMeButton.addEventListener('click', openAboutMe);

function openAboutMe() {
	console.log('about me opened');
	aboutMeContent.style.transition = '';
	aboutMeContent.style.display = 'block';
}

function closeAboutMe() {
	console.log('closing');
	aboutMeContent.style.display = 'none';
}
exitButtonEl.addEventListener('click', closeAboutMe);
