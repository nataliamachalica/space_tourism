// when someone clicks the hamburger button
// if the menu is closed, open it
// if the menu is open, close it

const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

// when someone clicks the hamburger button
navToggle.addEventListener('click', () => {
	// if nav is closed, open it
	const visibility = nav.getAttribute('data-visible');
	//if nav is open, close it
	if (visibility === 'false') {
		nav.setAttribute('data-visible', true)
	} else {
        nav.setAttribute('data-visible', false);
	}
});