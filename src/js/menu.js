import { Dish } from './models/dish';

const dishes = [
	new Dish('Spaghetti Carbonara',    'Classic Italian pasta with eggs, cheese, pancetta and pepper.',        'starter',    12.99, 'https://recipes.net/wp-content/uploads/2024/08/Elegant-Starters-Gourmet-Ideas.jpg'),
	new Dish('Vegetarian Bolognese',   'Rich tomato ragù with lentils, mushrooms and fresh herbs.',            'vegetarian', 16.99, 'https://midwestfoodieblog.com/wp-content/uploads/2020/02/FINAL-vegetarian-bolognese-1-2.jpg'),
	new Dish('Cajun Seafood Boil',     'Prawns, crab and clams in a bold Cajun-spiced broth.',                'seafood',    14.99, 'https://www.foxyfolksy.com/wp-content/uploads/2021/04/cajun-seafood-boil-recipe.jpg'),
	new Dish('Smoked Salmon',          'Cured salmon with cream cheese, capers and toasted brioche.',         'starter',    14.99, 'https://recipes.net/wp-content/uploads/2023/05/smoked-salmon-and-cream-cheese-roll-ups_9e23d5256db6bedfe75c18e0eaff27a4.jpeg'),
	new Dish('Caramel Pretzel Skillet','Warm pretzel skillet with salted caramel and vanilla ice cream.',     'dessert',    14.99, 'https://img.huffingtonpost.com/asset/6215512f2700004961458c21.jpeg?ops=scalefit_960_noupscale&format=webp'),
	new Dish('Main Dish',              'Slow-roasted prime rib with seasonal vegetables and red wine jus.',   'main',       14.99, 'https://media.30seconds.com/tip/lg/10-Exciting-Main-Dish-Recipes-You-Have-Got-to-Make-in-2021-20099-22e0fa7a45-1609793664.jpg'),
	new Dish('Zucchini Pasta',         'Zucchini ribbons with chilli, garlic, lemon and parmesan.',           'main',       14.99, 'https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_iw/v1/img/recipes/24/91/80/picas3wWz.jpg'),
];

function createDishCard(dish) {
	const card = document.createElement('div');
	card.classList.add('dish-card', dish.category);
	card.innerHTML = `
		<div class="dish-card-img-container">
			<img src="${dish.imgSrc}" alt="${dish.name}">
		</div>
		<div class="dish-info">
			<span class="dish-category">${dish.category}</span>
			<h3 class="dish-name">${dish.name}</h3>
			<p class="dish-description">${dish.description}</p>
			<div class="dish-footer">
				<p class="price">$${dish.price}</p>
				<button class="order-btn">Order</button>
			</div>
		</div>
	`;
	return card;
}

function renderDishes(container, filter = 'all') {
	container.innerHTML = '';
	const filtered = filter === 'all'
		? dishes
		: dishes.filter(d => d.category === filter);

	filtered.forEach((dish, i) => {
		const card = createDishCard(dish);
		card.style.setProperty('--delay', `${i * 0.08}s`);
		container.appendChild(card);
	});
}

function createMenu() {
	const menu = document.createElement('main');
	menu.classList.add('container-menu');
	menu.innerHTML = `
		<div id="title-menu">
			<h2>Our popular menu</h2>
			<p>Each dish is prepared fresh daily using locally sourced ingredients, crafted to bring you an unforgettable dining experience.</p>
		</div>
		<div id="categories">
			<h3>Category</h3>
			<div class="buttons-category">
				<button class="filter current" data-filter="all">All</button>
				<button class="filter" data-filter="starter">Starter</button>
				<button class="filter" data-filter="main">Mains</button>
				<button class="filter" data-filter="seafood">Seafood</button>
				<button class="filter" data-filter="vegetarian">Vegetarian</button>
				<button class="filter" data-filter="dessert">Dessert</button>
			</div>
		</div>
		<div id="dishes-list"></div>
	`;

	const dishesList = menu.querySelector('#dishes-list');
	renderDishes(dishesList);

	menu.querySelectorAll('.filter').forEach(btn => {
		btn.addEventListener('click', () => {
			menu.querySelectorAll('.filter').forEach(b => b.classList.remove('current'));
			btn.classList.add('current');
			renderDishes(dishesList, btn.dataset.filter);
		});
	});

	return menu;
}

export function renderMenuPage(content, target) {
	const activeBtn = document.querySelector('.active');
	if (activeBtn) activeBtn.classList.remove('active');
	while (content.firstChild)
		content.removeChild(content.firstChild);
	target.classList.add('active');
	content.appendChild(createMenu());
}