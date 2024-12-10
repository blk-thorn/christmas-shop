import { DOM } from "../../dom/dom.js";

export function initGiftFilters() {
    const { list, items, cards } = DOM.gifts;

    if (!list || !items?.length || !cards) return;

    items[0].classList.add("gifts__item--active");

    list.addEventListener("click", event => {
        const li = event.target.closest("li");
        if (!li) return;

        items.forEach(el =>
            el.classList.remove("gifts__item--active")
        );

        li.classList.add("gifts__item--active");

        cards.querySelectorAll(".card__item").forEach(card => {
            card.classList.toggle(
                "hide",
                card.dataset.f !== li.dataset.f &&
                li.dataset.f !== "All"
            );
        });
    });
}
