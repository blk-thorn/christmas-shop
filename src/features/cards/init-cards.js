import { renderCards } from "../../utils/render-json.js";
import { shuffleArray } from "../../utils/shuffle-array.js";
import { createCard } from "../../components/card.js";
import { createModal } from "../../components/modal.js";
import { DOM } from "../../dom/dom.js";
import { state } from "../../state/state.js";
import { CATEGORY_CONFIG } from "../../constants/category-config.js";

/**
 * @param {{ limit?: number | null }} options
 */
export function initCards({ limit = null } = {}) {
    return renderCards().then(cards => {
        cards.forEach(card => {
            card.img = CATEGORY_CONFIG[card.category]?.image;
        });

        shuffleArray(cards);

        const visibleCards =
            typeof limit === "number"
                ? cards.slice(0, limit)
                : cards;

        visibleCards.forEach((card, index) => {
            const cardEl = createCard(card, index);

            cardEl.addEventListener("click", () => {
                if (state.isModalOpen) return;

                createModal(card, index);
            });
        });

        return visibleCards;
    });
}
