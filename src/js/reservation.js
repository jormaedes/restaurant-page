function fillHours() {
	const select = document.querySelector('#hour');
	select.innerHTML = '';
	const slots = [
		'09:00 am', '10:00 am', '11:00 am', '12:00 pm',
		'01:00 pm', '02:00 pm', '06:00 pm', '07:00 pm',
		'08:00 pm', '09:00 pm'
	];
	slots.forEach(slot => {
		const option = document.createElement('option');
		option.value = slot;
		option.textContent = slot;
		select.appendChild(option);
	});
}

export function createElementReserv() {
	const reserv = document.createElement('main');
	reserv.classList.add('container-reservation');
	reserv.innerHTML = `
		<div class="reserv-header anim-fade-up">
			<span class="section-label">Book a Table</span>
			<div class="gold-line"></div>
			<h2>Reservation</h2>
		</div>
		<form class="reserv-form" action="">
			<div class="personal-info anim-fade-up" style="--delay: 0.1s">
				<div class="field-group">
					<label for="name">Your Name</label>
					<input id="name" type="text" placeholder="John Doe">
				</div>
				<div class="field-group">
					<label for="number">Phone Number</label>
					<input id="number" type="tel" placeholder="+1 (555) 000-0000">
				</div>
			</div>

			<div class="reservation-details anim-fade-up" style="--delay: 0.2s">
				<div class="field-group">
					<label for="people">Guests</label>
					<select name="qtd-people" id="people">
						<option value="1">1 Person</option>
						<option value="2">2 People</option>
						<option value="3">3 People</option>
						<option value="4">4 People</option>
						<option value="5">5 People</option>
						<option value="6">6 People</option>
						<option value="7">7 People</option>
						<option value="8">8 People</option>
					</select>
				</div>
				<div class="field-group">
					<label for="date">Date</label>
					<input type="date" name="date" id="date">
				</div>
				<div class="field-group">
					<label for="hour">Time</label>
					<select name="hour" id="hour"></select>
				</div>
			</div>

			<div class="field-group anim-fade-up" style="--delay: 0.3s">
				<label for="message">Message / Special Requests</label>
				<textarea id="message" placeholder="Allergies, occasion, seating preference..."></textarea>
			</div>

			<button class="anim-fade-up" style="--delay: 0.4s" type="submit">Book a Table</button>
		</form>
	`;
	return reserv;
}

export function createReservationPage(content) {
	const activeBtn = document.querySelector('.active');
	if (activeBtn)
		activeBtn.classList.remove('active');
	while (content.firstChild)
		content.removeChild(content.firstChild);
	content.textContent = '';
	content.appendChild(createElementReserv());
	fillHours();
	initReservAnimations();
}

function initReservAnimations() {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				observer.unobserve(entry.target);
			}
		});
	}, { threshold: 0.1 });

	document.querySelectorAll('.anim-fade-up').forEach(el => observer.observe(el));
}
