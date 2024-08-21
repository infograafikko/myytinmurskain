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
    teema_tekstivari: string | undefined; //stringified array
    teema_taustavari: string | undefined; //stringified array
    teema_tekstikoko: string | undefined; //stringified array
    teema_kuvaus: string | undefined; //stringified array
    teema_mahdollisuudet_otsikko1: string | undefined; //stringified array
    teema_mahdollisuudet_teksti1: string | undefined; //stringified array
    teema_mahdollisuudet_otsikko2: string | undefined; //stringified array
    teema_mahdollisuudet_teksti2: string | undefined; //stringified array
    teema_mahdollisuudet_otsikko3: string | undefined; //stringified array
    teema_mahdollisuudet_teksti3: string | undefined; //stringified array
    teema_mahdollisuudet_otsikko4: string | undefined; //stringified array
    teema_mahdollisuudet_teksti4: string | undefined; //stringified array
    teema_mahdollisuudet_otsikko5: string | undefined; //stringified array
    teema_mahdollisuudet_teksti5: string | undefined; //stringified array
    teema_mahdollisuudet_otsikko6: string | undefined; //stringified array
    teema_mahdollisuudet_teksti6: string | undefined; //stringified array
    teema_haasteet_otsikko1: string | undefined; //stringified array
    teema_haasteet_teksti1: string | undefined; //stringified array
    teema_haasteet_otsikko2: string | undefined; //stringified array
    teema_haasteet_teksti2: string | undefined; //stringified array
    teema_haasteet_otsikko3: string | undefined; //stringified array
    teema_haasteet_teksti3: string | undefined; //stringified array
    teema_haasteet_otsikko4: string | undefined; //stringified array
    teema_haasteet_teksti4: string | undefined; //stringified array
    teema_haasteet_otsikko5: string | undefined; //stringified array
    teema_haasteet_teksti5: string | undefined; //stringified array
    teema_haasteet_otsikko6: string | undefined; //stringified array
    teema_haasteet_teksti6: string | undefined; //stringified array
    teema_esimerkit: string | undefined; //stringified array
    teema_kysymykset: string | undefined; //stringified array
    teema_linkit: string | undefined; //stringified array
    
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
    setTexts: (data: TextType) => void;
}

export type ContextType = {
  state: StateType;
  actions: ActionsType
};

