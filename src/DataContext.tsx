import { createStore, produce } from "solid-js/store";
import { createContext, createMemo, useContext, type JSX } from "solid-js";

import { type StateType, type ActionsType } from "./types/ContextType";
import { cardTextProvider } from "./ContextProvider/Memos";

const DataContext = createContext();

export function DataProvider(props: { children: JSX.Element }) {
  const [state, setState] = createStore<StateType>({
    cards: [],
    tutorialStage: 0,
    selectedCard: 2,
    middleCard: 2,
    showLayers: false,
    cardsRef: null,
    popupOpen: false,
    iswebcomponent: false,
    texts: {
      oletus: undefined,
      seuraus: undefined,
      otsikko: undefined,
      painike: undefined,
      opasteotsikko1: undefined,
      opasteotsikko2: undefined,
      opasteotsikko3: undefined,
      opasteteksti1: undefined,
      opasteteksti2: undefined,
      opasteteksti3: undefined,
      teemat: undefined,
      "teema-kuvaus": undefined,
      "teema-tekstivari": undefined,
      "teema-taustavari": undefined,
      "teema-tekstikoko": undefined,
      "teema-mahdollisuudet-otsikko1": undefined,
      "teema-mahdollisuudet-teksti1": undefined,
      "teema-mahdollisuudet-otsikko2": undefined,
      "teema-mahdollisuudet-teksti2": undefined,
      "teema-mahdollisuudet-otsikko3": undefined,
      "teema-mahdollisuudet-teksti3": undefined,
      "teema-mahdollisuudet-otsikko4": undefined,
      "teema-mahdollisuudet-teksti4": undefined,
      "teema-mahdollisuudet-otsikko5": undefined,
      "teema-mahdollisuudet-teksti5": undefined,
      "teema-mahdollisuudet-otsikko6": undefined,
      "teema-mahdollisuudet-teksti6": undefined,
      "teema-haasteet-otsikko1": undefined,
      "teema-haasteet-teksti1": undefined,
      "teema-haasteet-otsikko2": undefined,
      "teema-haasteet-teksti2": undefined,
      "teema-haasteet-otsikko3": undefined,
      "teema-haasteet-teksti3": undefined,
      "teema-haasteet-otsikko4": undefined,
      "teema-haasteet-teksti4": undefined,
      "teema-haasteet-otsikko5": undefined,
      "teema-haasteet-teksti5": undefined,
      "teema-haasteet-otsikko6": undefined,
      "teema-haasteet-teksti6": undefined,
      "teema-esimerkit": undefined,
      "teema-kysymykset": undefined,
      "teema-linkit": undefined,
      tekstiversio: undefined,
    },
  });

  const actions: ActionsType = {
    setSelectedCard: (index) =>
      setState({ selectedCard: index, popupOpen: true }),
    setTutorialStage: (stage) => setState({ tutorialStage: stage }),
    setShowLayers: (show) => setState({ showLayers: show }),
    setCardsRef: (ref) => setState({ cardsRef: ref }),
    setMiddleCard: (index) => setState({ middleCard: index }),
    setPopupOpen: (open) => setState({ popupOpen: open }),
    setIsWebcomponent: (iswebcomponent) => setState({ iswebcomponent }),
    setTexts: (data) => {
      setState(
        produce((state) => {
          for (const key in data) {
            if (data.hasOwnProperty(key) && key in state.texts) {
              const textKey = key as keyof typeof state.texts; // Ensure key is a valid key of TextType

              if (textKey) {
                // Check if data[key] is a string that starts with '[' and ends with ']'
                if (
                  typeof data[key] === "string" &&
                  data[key].startsWith("[") &&
                  data[key].endsWith("]")
                ) {
                  try {
                    state.texts[textKey] = JSON.parse(data[key]);
                  } catch (error) {
                    console.error(
                      "ongelmia datan kanssa objektissa:",
                      data[key],
                      error
                    );
                  }
                } else {
                  state.texts[textKey] = data[key];
                }
              }
            }
          }
        })
      );
    },
  };

  const memos = {
    cardDetails: createMemo(() =>
      cardTextProvider(state.texts, state.selectedCard)
    ),
  };

  const data = {
    state,
    actions,
    memos,
  };

  return (
    <DataContext.Provider value={data}>{props.children}</DataContext.Provider>
  );
}

export const useDataContext = () => useContext(DataContext);
