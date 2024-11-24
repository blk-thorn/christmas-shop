import { renderCards } from "./renderJson.js";

const cardList = document.querySelector(".card__list")

renderCards().then(cards => {
    cards.forEach((card, index) => {
    switch (card.category) {
        case "For Work":
        card.img = "./img/image.png"
        break;
        case "For Health":
        card.img = "./img/image2.png"
        break;
        case "For Harmony":
        card.img = "./img/image3.png"
        break;
    }
    cardTemplate(card, index);
 });
 });



 function cardTemplate(card, index) {
    const cardItem = document.createElement("li");
    cardItem.classList.add("card__item");
    cardItem.setAttribute("modal-data", index);

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image__container")

    const img = document.createElement("img");
    img.src = card.img;
    img.classList.add("card__image");

    const textContainer = document.createElement("div");
    textContainer.classList.add("text__container")

    const name = document.createElement("h3");
    name.classList.add("card__title");
    name.textContent = card.name;

    const category = document.createElement("h4");
    category.classList.add("card__subtitle");
    category.textContent = card.category;
    switch (card.category) {
        case "For Work":
            category.style.color = "#4361ff";
            break;
        case "For Health":
            category.style.color = "#06a44f";
            break;
        case "For Harmony":
            category.style.color = "#ff43f7";
            break;
    }
   
    imageContainer.appendChild(img);
    textContainer.appendChild(category);
    textContainer.appendChild(name);

    cardItem.appendChild(imageContainer);
    cardItem.appendChild(textContainer);

    cardList.appendChild(cardItem);

    return cardItem;
 }

 function modalTemplate(array, i) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.setAttribute("data-modal-window", i);

    const modalWrapper = document.createElement("div");
    modalWrapper.classList.add("modal__wrapper")

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal__content");

    const modalInner = document.createElement("div");
    modalInner.classList.add("modal__inner");

    const modalInnerText = document.createElement("div");
    modalInnerText.classList.add("modal__text");

    const modalImg = document.createElement("img");
    modalImg.classList.add("modal__img");
    modalImg.src = array[i].img;

    const modalName = document.createElement("h3");
    modalName.classList.add("modal__title");
    modalName.textContent = array[i].name;

    const modalBreed = document.createElement("h4");
    modalBreed.classList.add("modal__subtitle");
    modalBreed.innerHTML = "<strong>" + array[i].type + " - </strong> " + array[i].breed;

    const modalText = document.createElement("p");
    modalText.classList.add("modal__description");
    modalText.innerHTML = array[i].description;

    const modalList = document.createElement("ul");
    modalList.classList.add("modal__list");

    const liEl = document.createElement("li");
    liEl.classList.add("modal__item");
    liEl.innerHTML = "<strong>Age:</strong> " + array[i].age;

    const liEl2 = document.createElement("li");
    liEl2.classList.add("modal__item");
    liEl2.innerHTML = "<strong>Inoculations:</strong> " + array[i].inoculations;

    const liEl3 = document.createElement("li");
    liEl3.classList.add("modal__item");
    liEl3.innerHTML = "<strong>Diseases:</strong> " + array[i].diseases;

    const liEl4 = document.createElement("li");
    liEl4.classList.add("modal__item");
    liEl4.innerHTML = "<strong>Parasites:</strong> " + array[i].parasites;

    const modalButton = document.createElement("button");
    modalButton.classList.add("modal__button");
    modalButton.textContent = "\u00D7";


    modal.appendChild(modalWrapper);
    modalWrapper.appendChild(modalContent);
    
    modalContent.appendChild(modalInner);
    modalContent.appendChild(modalInnerText);

    modalWrapper.appendChild(modalButton);

    modalList.appendChild(liEl);
    modalList.appendChild(liEl2);
    modalList.appendChild(liEl3);
    modalList.appendChild(liEl4);


    modalInnerText.appendChild(modalName);
    modalInnerText.appendChild(modalBreed);
    modalInnerText.appendChild(modalText);
    modalInnerText.appendChild(modalList);

    modalInner.appendChild(modalImg);

    return modal;

}