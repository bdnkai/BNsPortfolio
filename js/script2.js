let aboutMeContent_El = document.querySelector('.About_Me_Modal');
let portfolioContent_El = document.querySelector('.Portfolio_Modal');
let resumeContent_El = document.querySelector('.Resume_Modal');
let contactMe_El = document.querySelector('.Contact_Me_Modal');

let aboutMeButton_El = document.querySelector('.about_me_button');
let portfolioButton_El = document.querySelector('.portfolio_button');
let resumeButton_El = document.querySelector('.resume_button');
let contactMeButton_El = document.querySelector('.contact_me_button');

let aboutMeResume = aboutMeContent_El.querySelector('.footer_nav_resume');
let aboutMeContactMe = aboutMeContent_El.querySelector('.footer_nav_contact_me');
let portfolioResume = portfolioContent_El.querySelector('.footer_nav_resume');
let portfolioContactMe = portfolioContent_El.querySelector('.footer_nav_contact_me');

let resumeAboutMe = resumeContent_El.querySelector('.footer_nav_about_me');
let resumePortfolio = resumeContent_El.querySelector('.footer_nav_portfolio');
let contactMeAboutMe = contactMe_El.querySelector('.footer_nav_about_me');
let contactMePortfolio = contactMe_El.querySelector('.footer_nav_portfolio');

let aboutMeExit = aboutMeContent_El.querySelector('.modal_exit_button');
let portfolioExit = portfolioContent_El.querySelector('.modal_exit_button');
let resumeExit = resumeContent_El.querySelector('.modal_exit_button');
let contactMeExit = contactMe_El.querySelector('.modal_exit_button');

aboutMeButton_El.addEventListener('click', openAboutMe);
portfolioButton_El.addEventListener('click', openPortfolio);
resumeButton_El.addEventListener('click', openResume);
contactMeButton_El.addEventListener('click', openContactMe);

aboutMeResume.addEventListener('click', openResume);
aboutMeContactMe.addEventListener('click', openContactMe);
portfolioResume.addEventListener('click', openResume);
portfolioContactMe.addEventListener('click', openContactMe);
resumeAboutMe.addEventListener('click', openAboutMe);
resumePortfolio.addEventListener('click', openPortfolio);
contactMeAboutMe.addEventListener('click', openAboutMe);
contactMePortfolio.addEventListener('click', openPortfolio);

aboutMeExit.addEventListener('click', closeAboutMe);
portfolioExit.addEventListener('click', closePortfolio);
resumeExit.addEventListener('click', closeResume);
contactMeExit.addEventListener('click', closeContactMe);

// ========================  OPENING FUNCTIONS  ==================
function openAboutMe() {
	aboutMeContent_El.style.display = 'block';
}

function openPortfolio() {
	portfolioContent_El.style.display = 'block';
}

function openResume() {
	resumeContent_El.style.display = 'block';
}

function openContactMe() {
	contactMe_El.style.display = 'block';
}

//========================  CLOSING FUNCTIONS  ===================
function closeAboutMe() {
	if (openAboutMe) {
		console.log('About Me Modal has been be closed');
		aboutMeContent_El.style.display = 'none';
	}
}
function closePortfolio() {
	if (openPortfolio) {
		console.log('Portfolio is now closing');
		portfolioContent_El.style.display = 'none';
	}
}
function closeResume() {
	if (openResume) {
		console.log('Resume Modal has been be closed');
		resumeContent_El.style.display = 'none';
	}
}
function closeContactMe() {
	if (openContactMe) {
		console.log('Contact Me Modal has been be closed');
		contactMe_El.style.display = 'none';
	}
}

/*----- constants -----*/
/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/
