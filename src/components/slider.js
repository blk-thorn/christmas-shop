import { DOM } from "../dom/dom.js";
import { state } from "../state/state.js";

export function initSlider() {
    const {
        wrapper,
        list,
        items,
        buttonLeft,
        buttonRight,
        iconLeft,
        iconRight,
    } = DOM.slider;

    if (!wrapper || !list || !items.length) return;

    buttonLeft.disabled = true;
    iconLeft.disabled = true;

    function calculateStep() {
        const visibleArea = wrapper.clientWidth;
        const maxScroll = list.scrollWidth - visibleArea;

        const steps =
            window.innerWidth > 768
                ? 3
                : window.innerWidth >= 380
                    ? 6
                    : items.length;

        state.moveSlider = Math.floor(maxScroll / steps);
    }

    function updateButtons() {
        const visibleArea = wrapper.clientWidth;
        const maxIndex = Math.floor(
            (list.scrollWidth - visibleArea) / state.moveSlider
        );

        const isAtStart = state.counter === 0;
        const isAtEnd = state.counter >= maxIndex;

        buttonLeft.disabled = isAtStart;
        iconLeft.disabled = isAtStart;

        buttonRight.disabled = isAtEnd;
        iconRight.disabled = isAtEnd;
    }

    function moveSlides() {
        if (state.counter < 0) state.counter = 0;

        calculateStep();

        state.slideTransform = state.counter * state.moveSlider;
        list.style.transform = `translateX(${-state.slideTransform}px)`;

        updateButtons();
    }

    buttonRight.addEventListener("click", () => {
        state.counter++;
        moveSlides();
    });

    buttonLeft.addEventListener("click", () => {
        state.counter--;
        moveSlides();
    });

    window.addEventListener("resize", () => {
        state.counter = 0;
        moveSlides();
    });

    calculateStep();
}
