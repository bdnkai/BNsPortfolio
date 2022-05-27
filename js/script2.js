let aboutMeContent_El = document.querySelector('.About_Me_Modal');
let portfolioContent_El = document.querySelector('.Portfolio_Modal');
let resumeContent_El = document.querySelector('.Resume_Modal');

let aboutMeButton_El = document.querySelector('.about_me_button');
let portfolioButton_El = document.querySelector('.portfolio_button');
let resumeButton_El = document.querySelector('.resume_button');
let exitButtonEl = document.querySelector('.modal_exit_button');

aboutMeButton_El.addEventListener('click', openAboutMe);
portfolioButton_El.addEventListener('click', openPortfolio);
resumeButton_El.addEventListener('click', openResume);

function openAboutMe() {
	console.log('About Me opened!');
	aboutMeContent_El.style.display = 'block';
}

function openPortfolio() {
	console.log('Portfolio Opened!');
	portfolioContent_El.style.display = 'block';
}

function openResume() {
	console.log('Resume Opened!');
	resumeContent_El.style.display = 'block';
}

function closeAboutMe() {
	console.log('closing');
	aboutMeContent_El.style.display = 'none';
	portfolioContent_El.style.display = 'none';
	resumeContent_El.style.display = 'none';
}
exitButtonEl.addEventListener('click', closeAboutMe);
