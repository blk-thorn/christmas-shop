import {DOM} from "../dom/dom.js";

export function initScrollTop() {
    if (!DOM.scrollTop) return;

    function trackScroll() {
        const offset = window.scrollY;
        const windowWidth = window.innerWidth;

        DOM.scrollTop.classList.toggle(
            "scroll-top--active",
            windowWidth <= 768 && offset > 300
        );
    }

    window.addEventListener("scroll", trackScroll);
    window.addEventListener("resize", trackScroll);
}
