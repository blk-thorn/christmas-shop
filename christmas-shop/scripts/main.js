import {renderCards}  from "./renderJson.js";


const menu = document.querySelector('.menu__list');
const burgerBtn = document.querySelector('.burger');
const burgerLine = document.querySelector('.burger__line')
const body = document.body;

if (menu && burgerBtn) {
	burgerBtn.addEventListener('click', () => {
		menu.classList.toggle('menu__list--active');
		burgerBtn.classList.toggle('burger--active');
        burgerLine.classList.toggle('burger__line--active')
		body.classList.toggle('noscroll');
	})

	menu.addEventListener('click', e => {
		if (e.target.classList.contains('menu__item')) {
			menu.classList.remove('menu__list--active');
			burgerBtn.classList.remove('burger--active');
			burgerLine.classList.remove('burger__line--active');
			body.classList.remove('noscroll');
		}
	})

	menu.querySelectorAll('.menu__item').forEach(link => {
		link.addEventListener('click', (event) => {
			menu.classList.remove('menu__list--active');
			burgerBtn.classList.remove('burger--active');
            burgerLine.classList.remove('burger__line--active');
			body.classList.remove('noscroll');
            event._isClicked = true;
		})
	})
};


body.addEventListener('click', (event) => {
    if( 
     event._isClicked === true ||
     event.target.classList.contains('menu__list') == true ||
     event.target.classList.contains('menu__item') == true  ||
     event.target.classList.contains('burger') == true ||
     event.target.classList.contains('burger__line') == true
    ) return;

   menu.classList.remove('menu__list--active');
   burgerBtn.classList.remove('burger--active');
   burgerLine.classList.remove('burger__line--active');
   body.classList.remove('noscroll');
});


