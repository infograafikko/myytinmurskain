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
      teema_kuvaus: undefined,
      teema_tekstivari: undefined,
      teema_taustavari: undefined,
      teema_tekstikoko: undefined,
      teema_mahdollisuudet_otsikko1: undefined,
      teema_mahdollisuudet_teksti1: undefined,
      teema_mahdollisuudet_otsikko2: undefined,
      teema_mahdollisuudet_teksti2: undefined,
      teema_mahdollisuudet_otsikko3: undefined,
      teema_mahdollisuudet_teksti3: undefined,
      teema_mahdollisuudet_otsikko4: undefined,
      teema_mahdollisuudet_teksti4: undefined,
      teema_mahdollisuudet_otsikko5: undefined,
      teema_mahdollisuudet_teksti5: undefined,
      teema_mahdollisuudet_otsikko6: undefined,
      teema_mahdollisuudet_teksti6: undefined,
      teema_haasteet_otsikko1: undefined,
      teema_haasteet_teksti1: undefined,
      teema_haasteet_otsikko2: undefined,
      teema_haasteet_teksti2: undefined,
      teema_haasteet_otsikko3: undefined,
      teema_haasteet_teksti3: undefined,
      teema_haasteet_otsikko4: undefined,
      teema_haasteet_teksti4: undefined,
      teema_haasteet_otsikko5: undefined,
      teema_haasteet_teksti5: undefined,
      teema_haasteet_otsikko6: undefined,
      teema_haasteet_teksti6: undefined,
      teema_esimerkit: undefined,
      teema_kysymykset: undefined,
      teema_linkit: undefined,
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
