export const DOM = {
    body: document.body,

    scrollTop: null,

    gifts: {
        list: null,
        items: null,
        cards: null,
    },

    burger: {
        button: null,
        line: null,
        menu: null,
    },

    slider: {
        wrapper: null,
        list: null,
        items: null,

        buttonLeft: null,
        buttonRight: null,
        iconLeft: null,
        iconRight: null,
    },

    timer: {
        days: null,
        hours: null,
        minutes: null,
        seconds: null,
    },
};

export function initDOM() {
    DOM.scrollTop = document.querySelector(".scroll-top");

    DOM.gifts.list = document.querySelector(".gifts__list");
    DOM.gifts.items = document.querySelectorAll(".gifts__item");
    DOM.gifts.cards = document.querySelector(".card__list");

    DOM.burger.button = document.querySelector(".burger");
    DOM.burger.line = document.querySelector(".burger__line");
    DOM.burger.menu = document.querySelector(".menu__list");

    DOM.slider.wrapper = document.querySelector(".slider__wrapper");
    DOM.slider.list = document.querySelector(".slide__list");
    DOM.slider.items = document.querySelectorAll(".slider__item");

    DOM.slider.buttonLeft = document.querySelector(".slider__button--left");
    DOM.slider.buttonRight = document.querySelector(".slider__button--right");
    DOM.slider.iconLeft = document.querySelector(".slider__icon--left");
    DOM.slider.iconRight = document.querySelector(".slider__icon--right");

    DOM.timer.days = document.querySelector(".timer__days");
    DOM.timer.hours = document.querySelector(".timer__hours");
    DOM.timer.minutes = document.querySelector(".timer__minutes");
    DOM.timer.seconds = document.querySelector(".timer__seconds");
}
