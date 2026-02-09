import './style.css';
import { createHome } from './js/home';
import { createFooter } from './js/create-footer';

const content = document.getElementById('content');
const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const aboutBtn = document.getElementById('about-btn');

homeBtn.addEventListener('click', () => {
	while (content.firstChild) {
		content.removeChild(content.firstChild);
	}
	content.textContent = '';
	content.appendChild(createHome());
	content.appendChild(createFooter());
});
