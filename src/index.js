import './style.css';
import { createHome } from './js/home';
import { createFooter } from './js/create-footer';
import { createMenu } from './js/menu';

const content = document.getElementById('content');
const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const aboutBtn = document.getElementById('about-btn');

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
	content.appendChild(createFooter());
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
		content.appendChild(createFooter());
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
	content.appendChild(createFooter());
});
