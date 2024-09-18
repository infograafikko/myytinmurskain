import { cardType } from "./CardType";

export type StateType = {
    cards: cardType[];
    tutorialStage: number;
    selectedCard: number;
    middleCard: number;
    showLayers: boolean;
    cardsRef: HTMLElement | null;
    popupOpen: boolean;
    texts: TextType;
    iswebcomponent: boolean;
}

export type TextType = {
    otsikko: string | undefined;
    oletus: string | undefined;
    seuraus: string | undefined;
    painike: string | undefined;
    opasteotsikko1: string | undefined;
    opasteteksti1: string | undefined;
    opasteotsikko2: string | undefined;
    opasteteksti2: string | undefined;
    opasteotsikko3: string | undefined;
    opasteteksti3: string | undefined;
    tekstiversio: string | undefined; //stringified array
    teemat: string | undefined; //stringified array
    "teema-tekstivari": string | undefined; //stringified array
    "teema-taustavari": string | undefined; //stringified array
    "teema-tekstikoko": string | undefined; //stringified array
    "teema-kuvaus": string | undefined; //stringified array
    "teema-mahdollisuudet-otsikko1": string | undefined; //stringified array
    "teema-mahdollisuudet-teksti1": string | undefined; //stringified array
    "teema-mahdollisuudet-otsikko2": string | undefined; //stringified array
    "teema-mahdollisuudet-teksti2": string | undefined; //stringified array
    "teema-mahdollisuudet-otsikko3": string | undefined; //stringified array
    "teema-mahdollisuudet-teksti3": string | undefined; //stringified array
    "teema-mahdollisuudet-otsikko4": string | undefined; //stringified array
    "teema-mahdollisuudet-teksti4": string | undefined; //stringified array
    "teema-mahdollisuudet-otsikko5": string | undefined; //stringified array
    "teema-mahdollisuudet-teksti5": string | undefined; //stringified array
    "teema-mahdollisuudet-otsikko6": string | undefined; //stringified array
    "teema-mahdollisuudet-teksti6": string | undefined; //stringified array
    "teema-haasteet-otsikko1": string | undefined; //stringified array
    "teema-haasteet-teksti1": string | undefined; //stringified array
    "teema-haasteet-otsikko2": string | undefined; //stringified array
    "teema-haasteet-teksti2": string | undefined; //stringified array
    "teema-haasteet-otsikko3": string | undefined; //stringified array
    "teema-haasteet-teksti3": string | undefined; //stringified array
    "teema-haasteet-otsikko4": string | undefined; //stringified array
    "teema-haasteet-teksti4": string | undefined; //stringified array
    "teema-haasteet-otsikko5": string | undefined; //stringified array
    "teema-haasteet-teksti5": string | undefined; //stringified array
    "teema-haasteet-otsikko6": string | undefined; //stringified array
    "teema-haasteet-teksti6": string | undefined; //stringified array
    "teema-esimerkit": string | undefined; //stringified array
    "teema-kysymykset": string | undefined; //stringified array
    "teema-linkit": string | undefined; //stringified array
    
}

export type AppProps = TextType & {
    iswebcomponent: boolean;
}

export type ActionsType = {
    setMiddleCard: (index: number) => void;
    setTutorialStage: (stage: number) => void;
    setCardsRef: (ref: HTMLElement) => void;
    setSelectedCard: (index: number) => void;
    setShowLayers: (show: boolean) => void;
    setPopupOpen: (open: boolean) => void;
    setIsWebcomponent: (iswebcomponent: boolean) => void;
    setTexts: (data: TextType) => void;
}

export type ContextType = {
  state: StateType;
  actions: ActionsType
};

