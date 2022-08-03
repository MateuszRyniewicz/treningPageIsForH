const nav = document.querySelector('.nav__items');
const navbtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item');
const navBtnBars = document.querySelector('.burger-btn__bars');
const allSection = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');

const handleOvserver = () => {
	const currentSection = window.scrollY;

	allSection.forEach((section) => {
		if (
			section.classList.contains('white-section') &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.add('black-bars-color');
		} else if (
			!section.classList.contains('white-section') &&
			section.offsetTop <= currentSection + 60
		) {
			navBtnBars.classList.remove('black-bars-color');
		}
	});
};

const hanleNav = () => {
	nav.classList.toggle('nav--active');

	navBtnBars.classList.remove('black-bars-color');

	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active');
		});
	});

	handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;
	allNavItems.forEach((item) => {
		item.classList.toggle('nav-items-Animation');

		item.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	});
};

const handleCurrentYears = () => {
	cuurrentYear = new Date().getFullYear();
	footerYear.innerHTML = cuurrentYear;
};
handleCurrentYears();
navbtn.addEventListener('click', hanleNav);
window.addEventListener('scroll', handleOvserver);
