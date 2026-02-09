import './style.css';
import { renderHomePage } from './js/home';
import { createFooter } from './js/create-footer';
import { renderMenuPage } from './js/menu';
import { renderAboutPage } from './js/about';

const content = document.getElementById('content');
const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const aboutBtn = document.getElementById('about-btn');
const body = document.querySelector('body'); 

homeBtn.addEventListener('click', (e) => {
	renderHomePage(content, e.target, menuBtn);
});

menuBtn.addEventListener('click', (e) => {
	renderMenuPage(content, e.target);
});

aboutBtn.addEventListener('click', (e) => {
	renderAboutPage(content, e.target);
});

function firstRender() {
	body.appendChild(createFooter());
	renderHomePage(content, homeBtn, menuBtn);
}

firstRender();