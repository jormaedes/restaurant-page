export function createFooter() {
	const footer = document.createElement('footer');
	footer.innerHTML = `
		<div class="more-info">
			<div class="logo">
				Maison
			</div>

			<div class="extra-info">
				<p class="footer-heading">Information</p>
				<p>(+1) 99348 3989824 834</p>
				<p>restarant@gmail.com</p>
				<p>123 Skyline Avenue, New York 10001</p>
			</div>

			<div class="extra-info">
				<p class="footer-heading">Opening hours</p>
				<p>Monday to Thursday: 9:00 - 21:00</p>
				<p>Friday: 8:00 - 21:00</p>
				<p>Saturday: 9:30 - 15:00</p>
			</div>

			<div class="extra-info">
				<p class="footer-heading">Social</p>
				<div class="logo-social-media-container">
					<a class="social-footer" href="#"><i class="ri-facebook-box-fill"></i></a>
					<a class="social-footer" href="#"><i class="ri-instagram-fill"></i></a>
					<a class="social-footer" href="#"><i id="twitter-x" class="ri-twitter-x-fill"></i></a>
				</div>
			</div>
		</div>
		<div class="info-developer">
			<p>Built by <a href="https://github.com/jormaedes" target="_blank">Jormaedes</a> as part of <a href="https://www.theodinproject.com/" target="_blank">The Odin Project</a></p>
			<p>&copy; 2026 Restaurant page</p>
		</div>
	`;
	return footer;
}
