import { cardType } from "./CardType";

export type StateType = {
    cards: cardType[];
    selectedCard: number;
    showLayers: boolean;
    cardsRef: HTMLElement | null;
    popupOpen: boolean;
}

export type ActionsType = {
    setCardsRef: (ref: HTMLElement) => void;
    setSelectedCard: (index: number) => void;
    setShowLayers: (show: boolean) => void;
    setPopupOpen: (open: boolean) => void;
}

export type ContextType = {
  state: StateType;
  actions: ActionsType
};

