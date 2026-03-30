import { renderMenuPage } from "./menu";
import heroVideo from '../assets/video/background-video.mp4';
import dishImg from '../assets/images/dish.jpg';
import chefImg from '../assets/images/chef.jpg';
import drinkImg from '../assets/images/drink.webp';

function initScrollAnimations() {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				observer.unobserve(entry.target); // anima só uma vez
			}
		});
	}, { threshold: 0.15 });

	document.querySelectorAll('.anim-from-left, .anim-from-right').forEach(el => {
		observer.observe(el);
	});
}

function createHero() {
	const home = document.createElement('main');
	home.classList.add('container-home');
	home.innerHTML = `
		<h2 id="main-title">Enjoy our delicious meal</h2>
		<p id="hero-subtitle">Fine dining crafted from the finest seasonal ingredients</p>
		<div id="button-container">
			<button id="open-menu">Open menu</button>
			<button class="btn-reserve-table" id="open-reserve">Reserve a table</button>
		</div>
		<div id="scroll-indicator">
			<span>Scroll to explore</span>
			<div id="scroll-line"></div>
		</div>
	`;
	return home;
}

function renderHomePage(content, target, menuBtn) {
	const activeBtn = document.querySelector('.active');
	if (activeBtn) activeBtn.classList.remove('active');

	while (content.firstChild)
		content.removeChild(content.firstChild);

	target.classList.add('active');

	// ── video ──────────────────────────────────────
	const video = document.createElement('video');
	video.id = 'background-video';
	video.src = heroVideo;
	video.autoplay = true;
	video.muted = true;
	video.loop = true;
	video.playsInline = true;
	content.appendChild(video);

	// ── hero ───────────────────────────────────────
	content.appendChild(createHero());

	// ── philosophy ─────────────────────────────────
	const philosophy = document.createElement('section');
	philosophy.id = 'our-philosophy';
	philosophy.innerHTML = `
	<div class="container-philo">
		<div id="philo-img" class="anim-from-right">
			<img src="${dishImg}" alt="Dish">
		</div>
		<div id="philo-text" class="anim-from-left">
			<span class="section-label">Who we are</span>
			<h2>Our Philosophy</h2>
			<h3>The Art of Stillness</h3>
			<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
			<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
		</div>
	</div>
`;
	content.appendChild(philosophy);

	// ── tonight ────────────────────────────────────
	const tonight = document.createElement('section');
	tonight.id = 'to-night';
	tonight.innerHTML = `
	<div class="tonight-header anim-from-left">
		<span class="section-label">Chef's picks</span>
		<div class="gold-line"></div>
		<h2>Tonight's Selection</h2>
	</div>
	<div class="container-tonight">
		<div class="tonight-card anim-from-right" style="--delay: 0s">
			<img src="${chefImg}" alt="Chef">
			<p class="title-img-tonight">Chef's Special</p>
		</div>
		<div class="tonight-card anim-from-right" style="--delay: 0.15s">
			<img src="${drinkImg}" alt="Drink">
			<p class="title-img-tonight">Signature Cocktail</p>
		</div>
	</div>
`;
	content.appendChild(tonight);

	// ── eventos ────────────────────────────────────
	document.querySelector('#open-menu').addEventListener('click', () => {
		renderMenuPage(content, menuBtn);
	});
	initScrollAnimations();
}

export { renderHomePage };