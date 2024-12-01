import { renderCards } from "./renderJson.js";

const cardList = document.querySelector(".card__list");
const body = document.body;
 

let isModalOpen = false;
let currentModal = null; 
let superpowersValue;

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

    const newArr = cards.slice(0, 4).map((card, index) => {
        createCard(card, index);
        return card;
    });

 const giftCards = document.querySelectorAll("[data-modal-btn]");
 giftCards.forEach((cardElement, index) => {
    cardElement.addEventListener("click", (event) => {
        const target = event.currentTarget;

        // Ищем ближайший элемент с data-modal-btn
        const modalBtnElement = event.currentTarget.closest("[data-modal-btn]");

        if (modalBtnElement) {
            const name = modalBtnElement.dataset.modalBtn;

            if (!isModalOpen) {
                createModal(newArr[index], name); // Используем имя для создания модального окна
                body.classList.add("no-scroll");
            } else {
                console.log("Modal is opened");
            }
        } else {
            console.log("Modal button not found.");
        
            console.log('Closest:', target.closest("[data-modal-btn]"));
            console.log('Parent:', target.parentElement);
        }

    });
});
});


function closeModal() {
    if (isModalOpen) {
        if (currentModal) {
            currentModal.remove(); // Удаляем текущее модальное окно
            currentModal = null; // Сбрасываем переменную
        }
        body.classList.remove("no-scroll");
        isModalOpen = false;
    }
}

function setupCloseButton(closeButton) {
    closeButton.addEventListener("click", (e) => {
        closeModal();
    });
}
window.onclick = function (e) {
    if (e.target.classList.contains("modal__button")||
        e.target.hasAttribute("data-modal-window")) {
            closeModal();
    }
};


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



 function createModal (card, index) { 
    if (isModalOpen) return;

    isModalOpen = true;

    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.setAttribute("data-modal-window", index);

    const modalCard = document.createElement("div");
    modalCard.classList.add("modal__card");

    const closeButton = document.createElement("button");
    closeButton.classList.add("modal__button");


    closeButton.innerHTML = `
     <svg class="modal__button-svg" xmlns="http://www.w3.org/2000/svg" width="40"
         height="40" viewBox="0 0 40 40" fill="none">
         <path class="modal__button-path" d="M30 10L10 30" stroke="#181C29" stroke-width="2" stroke-linecap="round"
             stroke-linejoin="round" />
         <path class="modal__button-path" d="M10 10L30 30" stroke="#181C29" stroke-width="2" stroke-linecap="round"
             stroke-linejoin="round" />
     </svg>
    `;

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image__container")

    const img = document.createElement("img");
    img.src = card.img;
    img.alt = "image"; 
    img.classList.add("modal__image");

    const textContainer = document.createElement("div");
    textContainer.classList.add("text__container")

    const name = document.createElement("h3");
    name.classList.add("card__title");
    name.textContent = card.name;

    const description = document.createElement("p");
    description.classList.add("card__description");
    description.textContent = card.description;

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

    const modalTitle = document.createElement("h4");
    modalTitle.classList.add("modal__title");
    modalTitle.innerText = "ADDS SUPERPOWERS TO:"
   

    const modalList = document.createElement("ul");
    modalList.classList.add("modal__list");

    modalList.appendChild(modalTitle);

    const cardSuperpowers = Object.entries(card.superpowers);
    for (const [key, value] of cardSuperpowers) {
        const modalItem = createModalList(key, value);
        modalList.appendChild(modalItem); 
    }


    imageContainer.appendChild(img);
    textContainer.appendChild(category);
    textContainer.appendChild(name);
    textContainer.appendChild(description);
    textContainer.appendChild(modalTitle);
    textContainer.appendChild(modalList);

    modalCard.appendChild(imageContainer);
    modalCard.appendChild(textContainer);
    modalCard.appendChild(closeButton); 

    modal.appendChild(modalCard);
    body.appendChild(modal); 

    currentModal = modal;
    setupCloseButton(closeButton);
    return modal;

}



function createModalList (key, value) {
    superpowersValue = Number(value) / 100;

    const modalItem = document.createElement("li");
    modalItem.classList.add("modal__item");

    const modalText = document.createElement("p");
    modalText.classList.add("modal__text");
    modalText.innerText = String(key).charAt(0).toUpperCase() + String(key).slice(1);
        
    const modalNumber = document.createElement("p");
    modalNumber.classList.add("modal__number");
    modalNumber.textContent = value;

    const modalSnowflakes = document.createElement("div");
    modalSnowflakes.classList.add("modal__snowflakes");


    const snowflakesList = document.createElement("ul");
    snowflakesList.classList.add("snowflakes__list");
    modalSnowflakes.appendChild(snowflakesList);

    for (let i = 0; i < 5; i++) {
        const opacityValue = (i < superpowersValue) ? 1 : 0.1;

        const snowflakeItem = createSnowflakesList(opacityValue);
        snowflakesList.appendChild(snowflakeItem);
    }
      
    modalItem.appendChild(modalText);
    modalItem.appendChild(modalNumber);
    modalItem.appendChild(modalSnowflakes);

    return modalItem;
  
}

function createSnowflakesList(opacityValue) {
    const snowflakeItem = document.createElement("li");
    snowflakeItem.classList.add("snowflake__item");

    
    snowflakeItem.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="snowflake" clip-path="url(#clip0_8129_58)"><path id="Vector" d="M12.1959 9.88162L11.6482 9.56542L13.1158 9.17219L12.8732 8.26704L10.5005 8.90278L9.38146 8.25667C9.39689 8.17336 9.40538 8.08765 9.40538 7.99997C9.40538 7.91229 9.39692 7.82655 9.38146 7.74327L10.5005 7.09716L12.8732 7.7329L13.1158 6.82775L11.6482 6.43452L12.1959 6.11831L14.546 5.97725L14.8921 4.02063L13.0246 3.34203L11.7274 5.30677L11.1797 5.62297L11.5729 4.15545L10.6678 3.91293L10.032 6.28561L8.91226 6.93211C8.78247 6.82103 8.63242 6.73313 8.4683 6.67494V5.3828L10.2052 3.64586L9.5426 2.98325L8.46827 4.05755V3.42515L9.51792 1.32584L7.99976 0L6.48157 1.3259L7.53122 3.42521V4.05761L6.45689 2.98332L5.79429 3.64592L7.53119 5.38286V6.675C7.36708 6.73319 7.21702 6.82109 7.08724 6.93217L5.96746 6.28568L5.33171 3.91299L4.42656 4.15551L4.81979 5.62304L4.27213 5.30684L2.9749 3.34209L1.10742 4.02069L1.45349 5.97731L3.80362 6.11838L4.35128 6.43458L2.88375 6.82781L3.1263 7.73296L5.49898 7.09722L6.61807 7.74333C6.60264 7.82664 6.59414 7.91235 6.59414 8.00003C6.59414 8.08771 6.60261 8.17345 6.61807 8.25673L5.49898 8.90285L3.1263 8.2671L2.88375 9.17226L4.35128 9.56548L3.80362 9.88169L1.45349 10.0227L1.10742 11.9793L2.97493 12.6579L4.27216 10.6932L4.81985 10.377L4.42662 11.8445L5.33177 12.087L5.96752 9.71435L7.0873 9.06786C7.21708 9.17894 7.36714 9.26684 7.53125 9.32503V10.6172L5.79435 12.3541L6.45696 13.0167L7.53129 11.9424V12.5748L6.48163 14.6741L7.99983 16L9.51802 14.6741L8.46837 12.5748V11.9424L9.5427 13.0167L10.2053 12.3541L8.4684 10.6172V9.32503C8.63251 9.26684 8.78257 9.17894 8.91235 9.06786L10.0321 9.71435L10.6679 12.087L11.573 11.8445L11.1798 10.377L11.7275 10.6932L13.0247 12.6579L14.8922 11.9793L14.5462 10.0227L12.1959 9.88162Z" fill="#FF4646" fill-opacity="${opacityValue}"/></g>
    <defs><clipPath id="clip0_8129_58"><rect width="16" height="16" fill="white"/></clipPath></defs>
    </svg>
    `;
    
    return snowflakeItem;
}


