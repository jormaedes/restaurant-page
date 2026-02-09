function creatAbout() {
	const about = document.createElement('main');
	about.classList.add('container-about');
	about.innerHTML = `
		<h2>About us</h2>
		<div class="who-we-are">
			<h3>Who we are</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente ratione possimus cum deserunt
				itaque est eum, eos voluptate nihil exercitationem optio unde odit. Magnam voluptatem totam dolores
				veritatis tenetur.</p>
		</div>
		<div class="what-we-do">
			<h3>What we do</h3>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem hic tempora doloribus labore
				aspernatur ducimus ipsa animi repellat eos velit ex natus harum nam quas ab distinctio dicta, nulla
				repudiandae?</p>
		</div>
		<div class="contact">
			<h3>Contact</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nisi asperiores eveniet ipsa nemo
				minus provident. Nam reprehenderit placeat praesentium, similique aperiam laborum maxime. Unde
				aliquam ullam cum qui nisi!</p>
		</div>
	`;
	return (about);
}

export function renderAboutPage(content, target) {
	const activeBtn = document.querySelector('.active');
	if (activeBtn)
		activeBtn.classList.remove('active');
	while (content.firstChild) {
		content.removeChild(content.firstChild);
	}
	target.classList.add('active');
	content.textContent = '';
	content.appendChild(creatAbout());
}
