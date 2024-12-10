import { initBurger } from "../components/burger.js";
import { initSlider } from "../components/slider.js";
import { initCards } from "../features/cards/init-cards.js";
import { initTimer } from "../features/timer.js";
import {initDOM} from "../dom/dom.js";

document.addEventListener("DOMContentLoaded", () => {
    initDOM();
    initBurger();
    initSlider();
    initCards({ limit: 4 }).catch(console.error);
    initTimer();
});
