import { DOM } from "../dom/dom.js";
import {state} from "../state/state.js";

export function initBurger() {
    const { button, line, menu } = DOM.burger;
    const { body } = DOM;

    if (!button || !menu || !line) return;

    button.addEventListener("click", () => {
        menu.classList.toggle("menu__list--active");
        button.classList.toggle("burger--active");
        line.classList.toggle("burger__line--active");
        body.classList.toggle("stop-scroll");
    });

    menu.addEventListener("click", event => {
        if (event.target.classList.contains("menu__item")) {
            closeBurger();
        }
    });

    menu.querySelectorAll(".menu__item").forEach(link => {
        link.addEventListener("click", event => {
            closeBurger();
            event._isClicked = true;
        });
    });

    body.addEventListener("click", event => {
        if (
            event._isClicked === true ||
            event.target.closest(".menu__list") ||
            event.target.closest(".burger")
        ) {
            return;
        }

        closeBurger();
    });

    function closeBurger() {
        menu.classList.remove("menu__list--active");
        button.classList.remove("burger--active");
        line.classList.remove("burger__line--active");

        if (!state.isModalOpen) {
            body.classList.remove("stop-scroll");
        }
    }
}
