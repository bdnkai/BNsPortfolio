/*----- constants -----*/

/*----- app's state (variables) -----*/
/*----- cached element references -----*/
const aboutMeContent_El = document.querySelector('.About_Me_Modal');
const portfolioContent_El = document.querySelector('.Portfolio_Modal');
const resumeContent_El = document.querySelector('.Resume_Modal');
const contactMe_El = document.querySelector('.Contact_Me_Modal');

const aboutMeButton_El = document.querySelector('.about_me_button');
const portfolioButton_El = document.querySelector('.portfolio_button');
const resumeButton_El = document.querySelector('.resume_button');
const contactMeButton_El = document.querySelector('.contact_me_button');

const aboutMeResume = aboutMeContent_El.querySelector('.footer_nav_resume');
const aboutMeContactMe = aboutMeContent_El.querySelector(
	'.footer_nav_contact_me'
);
const portfolioResume = portfolioContent_El.querySelector('.footer_nav_resume');
const portfolioContactMe = portfolioContent_El.querySelector(
	'.footer_nav_contact_me'
);

const resumeAboutMe = resumeContent_El.querySelector('.footer_nav_about_me');
const resumePortfolio = resumeContent_El.querySelector('.footer_nav_portfolio');
const contactMeAboutMe = contactMe_El.querySelector('.footer_nav_about_me');
const contactMePortfolio = contactMe_El.querySelector('.footer_nav_portfolio');

const aboutMeExit = aboutMeContent_El.querySelector('.modal_exit_button');
const portfolioExit = portfolioContent_El.querySelector('.modal_exit_button');
const resumeExit = resumeContent_El.querySelector('.modal_exit_button');
const contactMeExit = contactMe_El.querySelector('.modal_exit_button');

const cards = document.querySelectorAll('.flip-box');

/*----- event listeners -----*/

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

/*----- functions -----*/

// ========================  OPENING MODALS  ==================

function openAboutMe() {
	aboutMeContent_El.style.display = 'block';
	if (openAboutMe) {
		closeContactMe();
		closeResume();
	}
}

function openPortfolio() {
	portfolioContent_El.style.display = 'block';
	if (openPortfolio) {
		closeContactMe();
		closeResume();
	}
}

function openResume() {
	resumeContent_El.style.display = 'block';
	if (openResume) {
		closeAboutMe();
		closePortfolio();
	}
}

function openContactMe() {
	contactMe_El.style.display = 'block';
	if (openContactMe) {
		closeAboutMe();
		closePortfolio();
	}
}

//========================  CLOSING MODALS  ===================

function closeAboutMe() {
	if (openAboutMe) {
		aboutMeContent_El.style.display = 'none';
	}
}
function closePortfolio() {
	if (openPortfolio) {
		portfolioContent_El.style.display = 'none';
	}
}
function closeResume() {
	if (openResume) {
		resumeContent_El.style.display = 'none';
	}
}
function closeContactMe() {
	if (openContactMe) {
		contactMe_El.style.display = 'none';
	}
}

//====================== CARD FLIPPING =======================

for (let i = 0; i < cards.length; i++) {
	cards[i].addEventListener('click', cardFlip);
	function cardFlip() {
		cards[i].classList.toggle('is-flipped');
	}
}

//======================= CONTACT ME FORM ===================
Email.send({
	Host: 'smtp.yourisp.com',
	Username: 'username',
	Password: 'password',
	To: 'them@website.com',
	From: 'you@isp.com',
	Subject: 'This is the subject',
	Body: 'And this is the body',
}).then((message) => alert(message));
