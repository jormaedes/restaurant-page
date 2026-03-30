import place from '../assets/images/place.jpeg';

function initAboutAnimations() {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				observer.unobserve(entry.target);
			}
		});
	}, { threshold: 0.15 });

	document.querySelectorAll('.anim-from-left, .anim-from-right, .anim-fade-up').forEach(el => {
		observer.observe(el);
	});
}

function creatAbout() {
	const about = document.createElement('main');
	about.classList.add('container-about');
	about.innerHTML = `
	<div class="about-left anim-from-left">
		<img src="${place}" alt="">
	</div>
	<div class="about-right">
		<div class="contact anim-from-right">
			<h2>Contact</h2>
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
			<div class="informations">
				<div class="local-container">
					<i class="ri-map-pin-fill"></i>
					<span>123 Skyline Avenue, New York 10001</span>
				</div>
				<div class="phone-container">
					<i class="ri-phone-fill"></i>
					<span>(+1) 99348 3989824 834</span>
				</div>
				<div class="phone-container">
					<i class="ri-mail-fill"></i>
					<span>restarant@gmail.com</span>
				</div>
			</div>
		</div>
		<div class="social-media-about anim-fade-up" style="--delay: 0.2s">
			<a class="social-about" href="#"><i class="ri-facebook-box-fill"></i></a>
			<a class="social-about" href="#"><i class="ri-instagram-fill"></i></a>
			<a class="social-about" href="#"><i id="twitter-x" class="ri-twitter-x-fill"></i></a>
		</div>
		<div id="map" class="anim-fade-up" style="--delay: 0.35s">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.514497870376!2d13.18161887592072!3d-8.92464509113265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f5b4d4af96a7%3A0x68fd6c057cc7467a!2s42%20Luanda!5e0!3m2!1spt-PT!2sao!4v1774860075766!5m2!1spt-PT!2sao" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
		</div>
	</div>
`;
	return (about);
}

export function renderAboutPage(content, target) {
	const activeBtn = document.querySelector('.active');
	if (activeBtn)
		activeBtn.classList.remove('active');
	while (content.firstChild)
		content.removeChild(content.firstChild);
	target.classList.add('active');
	content.textContent = '';
	content.appendChild(creatAbout());
	initAboutAnimations(); // ← aqui
}