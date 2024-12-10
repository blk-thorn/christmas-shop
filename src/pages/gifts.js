import { initBurger } from "../components/burger.js";
import { initCards } from "../features/cards/init-cards.js";
import { initGiftFilters } from "../features/cards/init-filters.js";
import { closeModal } from "../components/modal.js";
import { initScrollTop } from "../features/scroll-top.js";
import {initDOM} from "../dom/dom.js";

document.addEventListener("DOMContentLoaded", () => {
    initDOM();
    initBurger();
    initCards().catch(console.error);
    initGiftFilters();
    initScrollTop();

    window.addEventListener("click", e => {
        if (
            e.target.classList.contains("modal__button") ||
            e.target.hasAttribute("data-modal-window")
        ) {
            closeModal();
        }
    });
});
