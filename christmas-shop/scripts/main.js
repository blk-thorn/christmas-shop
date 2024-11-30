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
		body.classList.toggle('stop-scroll');
	})

	menu.addEventListener('click', e => {
		if (e.target.classList.contains('menu__item')) {
			menu.classList.remove('menu__list--active');
			burgerBtn.classList.remove('burger--active');
			burgerLine.classList.remove('burger__line--active');
			body.classList.remove('stop-scroll');
		}
	})

	menu.querySelectorAll('.menu__item').forEach(link => {
		link.addEventListener('click', (event) => {
			menu.classList.remove('menu__list--active');
			burgerBtn.classList.remove('burger--active');
            burgerLine.classList.remove('burger__line--active');
			body.classList.remove('stop-scroll');
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
   body.classList.remove('stop-scroll');
});



const  sliderWrapper = document.querySelector(".slider__wrapper")

const leftBtn = document.querySelector(".slider__button--left");
const rightBtn = document.querySelector(".slider__button--right");
const slider = document.querySelector(".slide__list");
const sliderRow = document.querySelector(".slider__row")
const slides = document.querySelectorAll(".slider__item");

let counter = 0;
let moveSlider = 0;
let slideTransform = 0;
let lastWidth = window.innerWidth;

function updateMoveSlider() {
	const visibleArea = sliderWrapper.clientWidth; 

    const stepSize = slider.scrollWidth - visibleArea; 

    let steps = window.innerWidth > 768 ? 3 : (window.innerWidth >= 380 ? 6 : slides.length);
    moveSlider = Math.floor(stepSize / steps); 

    console.log("Step Size:", moveSlider);
}

	function moveSlides() {
		
		if (counter < 0) {
			counter = 0; // Не позволяем уходить за пределы влево
		}
		if (counter >= slides.length) {
			counter = slides.length - 1; // Не позволяем уходить за пределы вправо
		}
	
		// Перед пересчётом slideTransform запрашиваем актуальное значение moveSlider
		const visibleArea = sliderWrapper.clientWidth; // Обновляем значение for visibleArea
		const stepSize = slider.scrollWidth - visibleArea; 

		let steps = window.innerWidth > 768 ? 3 : (window.innerWidth >= 380 ? 6 : slides.length);
		moveSlider = Math.floor(stepSize / steps); 
	
		slideTransform = counter * moveSlider; // Обновляем slideTransform на основе counter
		slider.style.transform = `translateX(${-slideTransform}px)`;
		console.log("Value:", slider.style.transform); 

		updateButtons();
	}

	function updateButtons() {
		const visibleArea = sliderWrapper.clientWidth;
		const lastVisibleIndex = Math.floor((slider.scrollWidth - visibleArea) / moveSlider);
	
		if (counter >= lastVisibleIndex) {
			rightBtn.disabled = true;
		} else {
			rightBtn.disabled = false;
		}
	
		leftBtn.disabled = (counter === 0); // Если слайдер в начале, кнопка влево блокируется
	}
	

rightBtn.addEventListener("click", () => {
    counter++;
    moveSlides();
});

leftBtn.addEventListener("click", () => {
    counter--;
    moveSlides();
});


window.onresize = () => {
	
    counter = 0;      // Сброс счетчика
    updateMoveSlider(); // Обновляем шаги
    moveSlides(); 
};

updateMoveSlider();