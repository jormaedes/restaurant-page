import { renderMenuPage } from "./menu";

function createHome() {
	const home = document.createElement('main');
	home.classList.add('container-home');
	home.innerHTML = `
		<h2>Best food for you</h2>
		<button id="open-menu">Open menu</button>
	`;
	return (home);
}

function renderHomePage(content, target, menuBtn) {
	const activeBtn = document.querySelector('.active');
	if (activeBtn)
		activeBtn.classList.remove('active');
	while (content.firstChild) {
		content.removeChild(content.firstChild);
	}
	target.classList.add('active');
	content.textContent = '';
	content.appendChild(createHome());
	const btnOpenMenu = document.querySelector("#open-menu");
	btnOpenMenu.addEventListener('click', () => {
		renderMenuPage(content, menuBtn);
	});
}

export { renderHomePage };