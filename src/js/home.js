function createHome() {
	const home = document.createElement('main');
	home.classList.add('container-home');
	home.innerHTML = `
		<h2>Best food for you</h2>
		<button id="open-menu">Open menu</button>
	`;
	return (home);
}

export { createHome };