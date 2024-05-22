import { type Component, Show, createEffect } from "solid-js";
import Layers from "./Layers/LayersContainer";
import Popup from "./PopOver/Popup";
import PopoverComponent from "./PopOver/PopoverComponent";
import styles from "./App.module.css";
import ArrowDown from "./icons/ArrowDown";
import { useDataContext } from "./DataContext";

const App: Component = () => {
  const { state, actions } = useDataContext();
  console.log(state, actions);

  createEffect(() => console.log(state.selectedCard));

  return (
    <>
      <figure class={styles.Figure}>
        <figcaption
          classList={{
            [styles.Caption]: true,
            [styles.Hide]: state.showLayers,
          }}
        >
          <h2 class={styles.Title}>
            Miten todennäköisesti skenaario toteutuu?
          </h2>
        </figcaption>
        <h3>Oletus: Tekoäly tehostaa sote-alan työskentelyä</h3>
        <Show when={!state.showLayers}>
          <ArrowDown size={64} />
        </Show>
        <Layers />
        <Show when={state.showLayers}>
          <PopoverComponent />
        </Show>
        <h3>Seuraus: Työvoiman tarve vähenee</h3>
        <Popup open={state.popupOpen} />
        {/* <button onClick={() => setOpen(true)}>Avaa popup</button> */}
        <Show when={!state.showLayers}>
          <button
            class={styles.Button}
            onClick={() => actions.setShowLayers(true)}
          >
            Kokeile itse interaktiivisella työkalulla
          </button>
        </Show>
      </figure>
    </>
  );
};

export default App;
