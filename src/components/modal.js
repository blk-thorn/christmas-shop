import { DOM } from "../dom/dom.js";
import { CATEGORY_CONFIG } from "../constants/category-config.js";
import { createSnowflakes } from "./snowflake.js";
import { createCloseButton } from "./close-button.js";
import { capitalize } from "../utils/capitalize.js";
import { percentToRatio } from "../utils/math.js";
import { state } from "../state/state.js";

const { body } = DOM;

export function createModal(card, index) {
    if (state.isModalOpen) return;

    state.isModalOpen = true;

    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.dataset.modalWindow = index;

    const modalCard = document.createElement("div");
    modalCard.classList.add("modal__card");

    const closeButton = createCloseButton();
    setupCloseButton(closeButton);

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image__container");

    const img = document.createElement("img");
    img.src = card.img;
    img.alt = card.name;
    img.classList.add("modal__image");

    const textContainer = document.createElement("div");
    textContainer.classList.add("text__container");

    const category = document.createElement("h4");
    category.classList.add("card__subtitle");
    category.textContent = card.category;

    const config = CATEGORY_CONFIG[card.category];
    if (config) {
        category.style.color = config.color;
    }

    const name = document.createElement("h3");
    name.classList.add("card__title");
    name.textContent = card.name;

    const description = document.createElement("p");
    description.classList.add("card__description");
    description.textContent = card.description;

    const modalTitle = document.createElement("h4");
    modalTitle.classList.add("modal__title");
    modalTitle.textContent = "ADDS SUPERPOWERS TO:";

    const modalList = document.createElement("ul");
    modalList.classList.add("modal__list");

    Object.entries(card.superpowers).forEach(([key, value]) => {
        const item = createModalListItem(key, value);
        modalList.appendChild(item);
    });

    imageContainer.appendChild(img);

    textContainer.append(
        category,
        name,
        description,
        modalTitle,
        modalList
    );

    modalCard.append(
        imageContainer,
        textContainer,
        closeButton
    );

    modal.appendChild(modalCard);
    body.appendChild(modal);
    body.classList.add("stop-scroll");

    modal.addEventListener("click", handleOverlayClick, {once: true});

    state.currentModal = modal;
    return modal;
}

export function closeModal() {
    if (!state.isModalOpen) return;

    state.currentModal?.remove();
    state.currentModal = null;
    state.isModalOpen = false;
    body.classList.remove("stop-scroll");
}

function setupCloseButton(button) {
    button.addEventListener("click", closeModal);
}

function handleOverlayClick(event) {
    if (event.target.classList.contains("modal")) {
        closeModal();
    }
}

function createModalListItem(key, value) {
    const modalItem = document.createElement("li");
    modalItem.classList.add("modal__item");

    const modalText = document.createElement("p");
    modalText.classList.add("modal__text");
    modalText.textContent = capitalize(key);

    const modalNumber = document.createElement("p");
    modalNumber.classList.add("modal__number");
    modalNumber.textContent = value;

    const modalSnowflakes = document.createElement("div");
    modalSnowflakes.classList.add("modal__snowflakes");

    const snowflakesList = document.createElement("ul");
    snowflakesList.classList.add("snowflakes__list");

    const filled = percentToRatio(value);

    for (let i = 0; i < 5; i++) {
        const opacity = i < filled ? 1 : 0.1;
        snowflakesList.appendChild(createSnowflakes(opacity));
    }

    modalSnowflakes.appendChild(snowflakesList);

    modalItem.append(
        modalText,
        modalNumber,
        modalSnowflakes
    );

    return modalItem;
}
