function createMenu() {
	const menu = document.createElement('main');
	menu.classList.add('container-menu');
	menu.innerHTML = `<h2>Our Menu</h2>`;
	let dishes = `<div class="dishes-container">`;
	for (let i = 0; i < 9; i++) {
		dishes += `
				<div class="dish-card">
					<div class="dish-info">
						<h3 class="dish-name">Spaghetti Carbonara</h3>
						<p class="dish-description">A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.</p>
						<p class="price">$12.99</p>
					</div>
					<img src="https://tostibanaan.nl/wp-content/uploads/2020/05/tostibanaan-spaghetti-carbonara-580x580.png"
						alt="Spaghetti Carbonara">
				</div>
		`;
	}
	dishes += `</div>`;
	menu.innerHTML += dishes;
	return (menu);
}

export function renderMenuPage(content, target) {
	const activeBtn = document.querySelector('.active');
	if (activeBtn)
		activeBtn.classList.remove('active');
	while (content.firstChild) {
		content.removeChild(content.firstChild);
	}
	target.classList.add('active');
	content.textContent = '';
	content.appendChild(createMenu());
}
