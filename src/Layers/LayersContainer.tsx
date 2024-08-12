import {
  mergeProps,
  createEffect,
  onCleanup,
  Show,
  For,
  Index,
} from "solid-js";
import styles from "./Layers.module.css";
import { useDataContext } from "../DataContext";
import SingleLayer from "./SingleLayer";
import Cursor from "../icons/Cursor";
const Layers = (props) => {
  const { state, actions } = useDataContext();

  return (
    <div
      classList={{
        [styles.layersContainer]: true,
        [styles.endTutorial]: state.showLayers && state.tutorialStage >= 2,
      }}
      class={styles.layersContainer}
      style={{
        height: state.showLayers ? "100%" : "0",
      }}
    >
      <p class={styles.tutorialText}>
        Paina näkökulmasta lukeaksesi siitä lisää
      </p>
      <svg
        class={styles.layers}
        viewBox="0 0 100 90"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g ref={actions.setCardsRef}>{props.children}</g>
      </svg>
      <Show when={state.tutorialStage >= 2}>
        <div
          classList={{
            [styles.cursorContainer]: true,
          }}
          style={{
            opacity: state.tutorialStage === 2 ? 1 : 0,
          }}
        >
          <Cursor size={64} />
        </div>
      </Show>
    </div>
  );
};

const LayersContainer = () => {
  const { state } = useDataContext();

  return (
    <Layers showLayers={state.showLayers}>
      <Index each={state.texts.teemat}>
        {(el, i) => {
          const totalElements = state.cards.length;
          const invertedIndex = totalElements - 1 - i;
          const offset = invertedIndex * 15 + 20; // Invert the offset
          const middle = (totalElements / 2) * 15;
          return (
            <>
              <SingleLayer
                index={i}
                text={el}
                textcolor={state.texts.teema_tekstivari?.[i]}
                gradient={[
                  state.texts.teema_taustavari?.[i],
                  state.texts.teema_taustavari?.[i],
                ]}
                offset={[0, offset, 0]}
                middle={[0, middle, 0]}
                classList={{}}
                class={styles.Spread}
                showPointer={state.showLayers && state.tutorialStage >= 2}
                fontsize={state.texts.teema_tekstikoko?.[i]}
              />
            </>
          );
        }}
      </Index>
    </Layers>
  );
};

export default LayersContainer;
