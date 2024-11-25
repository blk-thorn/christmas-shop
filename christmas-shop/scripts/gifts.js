import {renderCards}  from "./renderJson.js";

const giftsList = document.querySelector(".gifts__list");
// const giftsItem = document.querySelectorAll(".gifts__item");


const cardList = document.querySelector(".card__list");
// const filterItems = document.querySelectorAll(".card__item");


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


renderCards().then(cards => {
    cards.forEach(card => {
        switch (card.category) {
            case "For Work":
                card.img = "./img/image.png";
                break;
            case "For Health":
                card.img = "./img/image2.png";
                break;
            case "For Harmony":
                card.img = "./img/image3.png";
                break;
        }
    });

    shuffleArray(cards);

    cards.map((card, index) => {
            createCard(card, index);
            return card;
        });
});


    giftsList.addEventListener("click", (event) => {

        const liElement = event.target.closest('LI');
        const filterClass = document.querySelectorAll(".card__item");
        const giftsItem = document.querySelectorAll(".gifts__item");
       

        
        if(!liElement) return;

        giftsItem.forEach(element => {
            element.classList.remove("gifts__item--active");
        });
        liElement.classList.add("gifts__item--active");
        
        filterClass.forEach(element => {
            element.classList.remove("hide");
         if(element.dataset.f !== liElement.dataset.f && liElement.dataset.f !== "All") {
            element.classList.add("hide");
         }
        })
     });

function createCard (card, index) {
    const cardItem = document.createElement("li");
    cardItem.classList.add("card__item");
    cardItem.setAttribute("data-modal-btn", index);
    cardItem.setAttribute("data-f", card.category);

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

