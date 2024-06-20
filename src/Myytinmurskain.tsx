import { type Component, Show, createEffect } from "solid-js";
import Layers from "./Layers/LayersContainer";
import Popup from "./PopOver/Popup";
import PopoverComponent from "./PopOver/PopoverComponent";
import styles from "./App.module.css";
import ArrowDown from "./icons/ArrowDown";
import { useDataContext } from "./DataContext";
import { TextType } from "./types/ContextType";

const Myytinmurskain: Component<TextType> = (props) => {
  const { state, actions } = useDataContext();
  console.log(state, actions, props);

  createEffect(() => {
    actions.setTexts(props);
  });

  return (
    <figure class={styles.Figure}>
      <figcaption
        classList={{
          [styles.Caption]: true,
          [styles.Hide]: state.showLayers,
        }}
      >
        <h2 class={styles.Title}>{state.texts.otsikko}</h2>
      </figcaption>
      <h3>{state.texts.oletus}</h3>
      <Show when={!state.showLayers}>
        <ArrowDown size={64} />
      </Show>
      <Layers />
      <Show when={state.showLayers}>
        <PopoverComponent />
      </Show>
      <h3>{state.texts.seuraus}</h3>
      <Popup open={state.popupOpen} />
      {/* <button onClick={() => setOpen(true)}>Avaa popup</button> */}
      <Show when={!state.showLayers}>
        <button
          class={styles.Button}
          onClick={() => actions.setShowLayers(true)}
        >
          {state.texts.painike}
        </button>
      </Show>
    </figure>
  );
};

export default Myytinmurskain;
