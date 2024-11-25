

export const renderCards = async function renderJSON() {
    const response = await fetch('./gifts.json');
    const cards = await response.json();
    // console.log(cards);
    return cards;
  }