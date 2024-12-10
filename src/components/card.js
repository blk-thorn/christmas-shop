import { DOM } from "../dom/dom.js";
import { CATEGORY_CONFIG } from "../constants/category-config.js";

export function createCard(card, index) {
    const cardItem = document.createElement("li");
    cardItem.classList.add("card__item");
    cardItem.dataset.modalBtn = index;
    cardItem.dataset.f = card.category;

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image__container");

    const img = document.createElement("img");
    img.src = card.img;
    img.alt = card.name;
    img.classList.add("card__image");

    const textContainer = document.createElement("div");
    textContainer.classList.add("text__container");

    const category = document.createElement("h4");
    category.classList.add("card__subtitle");
    category.textContent = card.category;

    const name = document.createElement("h3");
    name.classList.add("card__title");
    name.textContent = card.name;

    const config = CATEGORY_CONFIG[card.category];
    if (config) {
        category.style.color = config.color;
    }

    imageContainer.appendChild(img);
    textContainer.appendChild(category);
    textContainer.appendChild(name);

    cardItem.appendChild(imageContainer);
    cardItem.appendChild(textContainer);

    DOM.gifts.cards?.appendChild(cardItem);

    return cardItem;
}
