import './style.css';
import { createHome } from './js/home';
import { createFooter } from './js/create-footer';
import { createMenu } from './js/menu';
import { creatAbout } from './js/about';

const content = document.getElementById('content');
const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const aboutBtn = document.getElementById('about-btn');
const body = document.querySelector('body'); 

homeBtn.addEventListener('click', () => {
	const activeBtn = document.querySelector('.active');
	if (activeBtn)
		activeBtn.classList.remove('active');
	while (content.firstChild) {
		content.removeChild(content.firstChild);
	}
	homeBtn.classList.add('active');
	content.textContent = '';
	content.appendChild(createHome());
	const btnOpenMenu = document.querySelector("#open-menu");
	btnOpenMenu.addEventListener('click', () => {
		const activeBtn = document.querySelector('.active');
		if (activeBtn)
			activeBtn.classList.remove('active');
		while (content.firstChild) {
			content.removeChild(content.firstChild);
		}
		menuBtn.classList.add('active');
		content.textContent = '';
		content.appendChild(createMenu());
	});
});

menuBtn.addEventListener('click', () => {
	const activeBtn = document.querySelector('.active');
	if (activeBtn)
		activeBtn.classList.remove('active');
	while (content.firstChild) {
		content.removeChild(content.firstChild);
	}
	menuBtn.classList.add('active');
	content.textContent = '';
	content.appendChild(createMenu());
});

aboutBtn.addEventListener('click', () => {
	const activeBtn = document.querySelector('.active');
	if (activeBtn)
		activeBtn.classList.remove('active');
	while (content.firstChild) {
		content.removeChild(content.firstChild);
	}
	aboutBtn.classList.add('active');
	content.textContent = '';
	content.appendChild(creatAbout());
});

