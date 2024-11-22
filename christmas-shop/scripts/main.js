
const menu = document.querySelector('.menu__list');
const menuBtn = document.querySelector('.burger');
const menuLine = document.querySelector('.burger__line')
const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener('click', e => {
		menu.classList.toggle('menu__list--active');
		menuBtn.classList.toggle('burger--active');
        menuLine.classList.toggle('burger__line--active')
		body.classList.toggle('noscroll');
	})

	menu.addEventListener('click', e => {
		if (e.target.classList.contains('menu__item-link')) {
			menu.classList.remove('menu__list--active');
			menuBtn.classList.remove('burger--active');
			menuLine.classList.remove('burger__line--active');
			body.classList.remove('noscroll');
		}
	})

	menu.querySelectorAll('.menu__item-link').forEach(link => {
		link.addEventListener('click', (event) => {
			menu.classList.remove('menu__list--active');
			menuBtn.classList.remove('burger--active');
            menuLine.classList.remove('burger__line--active');
			body.classList.remove('noscroll');
            event._isClicked = true;
            console.log("Клик по ссылке");
		})
	})
};


body.addEventListener('click', (event) => {
    if( 
     event._isClicked === true ||
     event.target.classList.contains('menu__list') == true ||
     event.target.classList.contains('menu__item-link') == true  ||
     event.target.classList.contains('burger') == true ||
     event.target.classList.contains('burger__line') == true
    ) return;

   menu.classList.remove('menu__list--active');
   menuBtn.classList.remove('burger--active');
   menuLine.classList.remove('burger__line--active');
   body.classList.remove('noscroll');
});