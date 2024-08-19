import { type Component, Show, createEffect } from "solid-js";
import Layers from "./Layers/LayersContainer";
import Popup from "./PopOver/Popup";
import PopoverComponent from "./PopOver/PopoverComponent";
import styles from "./App.module.css";
import { useDataContext } from "./DataContext";
import { TextType } from "./types/ContextType";
import Cursor from "./icons/Cursor";
import ArrowDown from "./icons/ArrowDown";
import snarkdown from "snarkdown";
const Myytinmurskain: Component<TextType> = (props) => {
  const { state, actions } = useDataContext();

  createEffect(() => {
    console.log(props);
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
        <Show when={!state.showLayers}>
          <button
            class={styles.Button}
            onClick={() => actions.setShowLayers(true)}
            title="Aloita interaktiivisen työkalun käyttö"
          >
            {state.texts.painike}
            <div class={styles.cursorContainer}>
              <Cursor size={64} />
            </div>
          </button>
        </Show>
      </figcaption>

      {/* BACK TO TUTORIAL BUTTON */}
      <Show when={state.tutorialStage >= 3 && state.showLayers}>
        <button
          class={styles.backToTutorial}
          onClick={() => {
            actions.setTutorialStage(0);
            actions.setShowLayers(true);
          }}
          title="Takaisin käyttöoppaaseen"
        >
          ?
        </button>
      </Show>
      <Show when={state.showLayers}>
        {/* OLETUSOTSIKKO */}
        <h3 class="oletusotsikko">{state.texts.oletus}</h3>
        {/* DEPRECATED <ArrowDown size={24} /> */}
      </Show>
      <Layers />
      <Show when={state.showLayers}>
        <PopoverComponent />
      </Show>

      <Show when={state.showLayers}>
        {/* DEPRECATED <ArrowDown size={24} /> */}
        {/* SEURAUSOTSIKKO JA KYSYMYSMERKKI */}
        <h3 class="seurausotsikko">
          {state.texts.seuraus}
          {/* DEPRECATED <span
            classList={{
              [styles.QuestionMark]: true,
              [styles.QuestionMarkActive]: state.tutorialStage === 1,
            }}
          >
            ?
          </span> */}
        </h3>
      </Show>

      <Popup open={state.popupOpen} />
      <Show when={state.texts.tekstiversio}>
        <p
          class={styles.tutorialText}
          innerHTML={snarkdown(state.texts.tekstiversio)}
        />
      </Show>
    </figure>
  );
};

export default Myytinmurskain;
