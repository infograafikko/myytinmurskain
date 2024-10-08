import { type Component, Show, createEffect } from "solid-js";
import Layers from "./Layers/LayersContainer";
import Popup from "./PopOver/Popup";
import PopoverComponent from "./PopOver/PopoverComponent";

import styles from "./App.module.css";
import * as cssStyle from "./App.module.css?inline";
import StylesForWebcomponent from "./utils/stylesWebcomponent";

import { useDataContext } from "./DataContext";
import { AppProps } from "./types/ContextType";
import Cursor from "./icons/Cursor";

import customSnarkdown from "./utils/snarkdownCustomizer";
const Nakokulmain: Component<AppProps> = (props) => {
  const { state, actions } = useDataContext();

  createEffect(() => {
    if (props.iswebcomponent) {
      actions.setIsWebcomponent(true);
    }

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
        <h3 class={styles.heading3 + " oletusotsikko"}>{state.texts.oletus}</h3>
      </Show>
      <Layers />
      <Show when={state.showLayers}>
        <PopoverComponent />
      </Show>

      <Show when={state.showLayers}>
        {/* DEPRECATED <ArrowDown size={24} /> */}
        {/* SEURAUSOTSIKKO JA KYSYMYSMERKKI */}
        <h3 class={styles.heading3 + " seurausotsikko"}>
          {state.texts.seuraus}
        </h3>
      </Show>

      <Show when={state.tutorialStage >= 3 && state.popupOpen}>
        <Popup open={state.popupOpen} />
      </Show>
      <Show when={state.texts.tekstiversio}>
        <p
          class={styles.tutorialText}
          innerHTML={customSnarkdown(state.texts.tekstiversio)}
        />
      </Show>
      <Show when={state?.iswebcomponent}>
        <StylesForWebcomponent css={cssStyle} />
      </Show>
    </figure>
  );
};

export default Nakokulmain;
