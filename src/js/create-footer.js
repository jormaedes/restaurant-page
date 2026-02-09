export function createFooter() {
	const footer = document.createElement('footer');
	footer.innerHTML = `
		<p>Built by <a href="https://github.com/jormaedes" target="_blank">Jormaedes</a> as part of <a href="https://www.theodinproject.com/" target="_blank">The Odin Project</a></p>
		<p>&copy; 2026 Restaurant page</p>
	`;
	return footer;
}
