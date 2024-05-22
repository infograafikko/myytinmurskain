import { createStore, produce } from "solid-js/store";
import { createContext, createMemo, useContext, type JSX } from "solid-js";
import { defaultCards } from "./ContextProvider/defaultData";
import { type cardType } from "./types/CardType";
import { type StateType, type ActionsType } from "./types/ContextType";

const DataContext = createContext();

export function DataProvider(props: { children: JSX.Element }) {
  const [state, setState] = createStore<StateType>({
    cards: defaultCards,
    selectedCard: 2,
    showLayers: false,
    cardsRef: null,
    popupOpen: false,
  });

  console.log(state);

  const actions: ActionsType = {
    setSelectedCard: (index) =>
      setState({ selectedCard: index, popupOpen: true }),
    setShowLayers: (show) => setState({ showLayers: show }),
    setCardsRef: (ref) => setState({ cardsRef: ref }),
    setPopupOpen: (open) => setState({ popupOpen: open }),
  };

  const memos = {
    cardDetails: createMemo(() => state.cards[state.selectedCard]),
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
