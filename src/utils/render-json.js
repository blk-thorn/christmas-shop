export const renderCards = async function renderJSON() {
    const response = await fetch('./gifts.json');
    return await response.json();
  }
